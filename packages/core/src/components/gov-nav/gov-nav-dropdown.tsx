import { Component, Element, h, Host } from '@stencil/core'

@Component({
	tag: 'gov-nav-dropdown',
	styleUrl: 'gov-nav-dropdown.scss',
})
export class GovNavItem {
	@Element() readonly host: HTMLGovNavDropdownElement

  /**
   * Store listener used to listen for global click event.
   */
  private documentOnClickListener

  componentDidLoad() {
    this.documentOnClickListener = () => this.onClose()
    document.addEventListener("click", this.documentOnClickListener)
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.documentOnClickListener)
  }

  private onClose() {
    this.host.classList.remove("open")
  }

  private onToggle(event) {
    event.stopPropagation();
    this.host.classList.toggle("open")
  }

	render() {
		return (
			<Host class={"gov-nav-dropdown"} onClick={(event) => this.onToggle(event)}>
        <div class="gov-nav-item__link">
          <slot name="label" />
        </div>
        <div class="dropdown">
          <slot name="dropdown" />
        </div>
			</Host>
		)
	}
}
