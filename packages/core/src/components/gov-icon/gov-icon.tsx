import {Build, Component, Element, h, Host, Prop, State, Watch} from "@stencil/core"
import {IconClass} from "./constants"
import {fetchIcon} from "../../utils/icon.utils"
import {govHost} from "../../helpers/Dom/template"
import {GovHost} from "../../helpers/Dom/template.types"
import {iconsLazyLoad} from "../../helpers/Dom/win"

@Component({
  assetsDirs: ["assets"],
  styleUrl: "gov-icon.scss",
  tag: "gov-icon",
})
export class GovIcon {
  private h: GovHost

  constructor() {
    this.h = govHost(this.host)
  }

  @Element() host: HTMLGovIconElement
  /**
   * Name of icon
   */
  @Prop() name: string = null
  /**
   * Type (folder) of icon
   */
  @Prop() type: string = "basic"
  @State() private iconData: string
  @State() private visible = false
  @State() private error = false
  private intersectionObserver: IntersectionObserver

  @Watch("name")
  private async loadIconPathData(): Promise<void> {
    const {name, visible, type} = this
    if (!Build.isBrowser || !name || !visible) {
      return
    }
    try {
      this.iconData = await fetchIcon({name, type})
    } catch (e) {
      this.error = true
    }
  }

  connectedCallback(): void {
    if (iconsLazyLoad()) {
      this.visible = true
      this.loadIconPathData().finally()
    } else {
      this.waitUntilVisible(async () => {
        this.visible = true
        await this.loadIconPathData()
      })
    }
  }

  disconnectedCallback(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect()
      this.intersectionObserver = null
    }
  }

  async componentWillLoad(): Promise<void> {
    await this.loadIconPathData()
  }

  private waitUntilVisible(callback: () => void): void {
    if (!Build.isBrowser || typeof window === "undefined" || !(window as any).IntersectionObserver) {
      callback()
      return
    }
    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (this.intersectionObserver) {
              this.intersectionObserver.disconnect()
              this.intersectionObserver = null
            }
            callback()
          }
        })
      },
      {rootMargin: "50px"},
    )
    this.intersectionObserver.observe(this.host)
  }

  render() {
    if (this.error) {
      return null
    }
    return (
      <Host class={this.h.classes(IconClass.root)}>
        <span class={IconClass.holder} innerHTML={this.iconData}></span>
      </Host>
    )
  }
}
