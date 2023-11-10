import {Component, Element, h, Host, Prop, Watch} from "@stencil/core"
import {
  FormGroupClass,
  FormGroupOrientation,
  FormGroupOrientationType,
  FormGroupSizes,
  FormGroupSizesType
} from "./constants"
import {GovHost} from "../../../helpers/Dom/template.types"
import {govHost} from "../../../helpers/Dom/template"
import {validateProp} from "../../../helpers/Validate/props"

@Component({
  tag: "gov-form-group",
  styleUrl: "gov-form-group.scss",
})
export class GovFormGroup {
  private readonly h: GovHost

  constructor() {
    this.h = govHost(this.host)
  }

  @Element() host: HTMLGovFormGroupElement
  /**
   * Gap's size.
   */
  @Prop() readonly gap?: FormGroupSizesType = undefined
  /**
   * Elements orientation
   */
  @Prop() readonly orientation?: FormGroupOrientationType = 'vertical'

  @Watch("gap")
  validateGap(newValue: string): void {
    if (newValue) {
      validateProp(FormGroupSizes, newValue, FormGroupClass.root)
    }
  }

  @Watch("orientation")
  validateOrientation(newValue: string): void {
    if (newValue) {
      validateProp(FormGroupOrientation, newValue, FormGroupClass.root)
    }
  }

  componentWillLoad(): void {
    this.validateGap(this.gap)
    this.validateOrientation(this.orientation)
  }

  render() {
    return (
      <Host gap={this.gap} class={this.h.classes(FormGroupClass.root)}>
        <slot></slot>
      </Host>
    )
  }
}
