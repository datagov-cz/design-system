import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from "@stencil/core"
import { registerClickOutside } from "stencil-click-outside"
import { govHost, toBoolAttr } from "../../../helpers/Dom/template"
import { GovHost } from "../../../helpers/Dom/template.types"
import { Nullable } from "../../../types/interfaces"
import { createID } from "../../../utils/string.utils"
import { ButtonClass } from "../button/constants"
import { DropdownClass, Position, PositionType } from "./constants"
import { DropdownEvent } from "./gov-dropdown.types"

@Component({
	tag: "gov-dropdown",
	styleUrl: "gov-dropdown.scss",
})
export class GovDropdown {
	private h: GovHost
	private readonly listId: string
	private readonly controlId: string

	constructor() {
		this.h = govHost(this.host)
		this.listId = createID("GovDropdownList")
		this.controlId = createID("GovDropdownControl")
	}

	@Element() host: HTMLGovButtonElement
	/**
	 * Dropdown open state
	 */
	@Prop({ mutable: true }) open = false
	/**
	 * Menu display position
	 */
	@Prop() readonly position: PositionType = Position.LEFT
	/**
	 * Emitted when the dropdown change state
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<DropdownEvent>

	componentWillLoad() {
		if (this.trigger) {
			this.trigger.setAttribute("wcag-controls", this.listId)
			this.trigger.setAttribute("wcag-has-popup", toBoolAttr(!!this.list))
			this.trigger.setAttribute("identifier", this.controlId)

			this.trigger.addEventListener("gov-click", (e) => {
				e.preventDefault()
				e.stopPropagation()
				this.open = !this.open

				this.govChange.emit({
					component: DropdownClass.root,
					originalEvent: e,
					open: this.open,
				})
			})
		}
	}

	get trigger() {
		return this.host.querySelector(`* > ${ButtonClass.root}`) as HTMLGovButtonElement
	}

	get list() {
		return this.h.getSlot("list") as Nullable<HTMLUListElement>
	}

	render() {
		return (
			<Host class={this.h.classes([DropdownClass.root])} open={this.open} position={this.position}>
				<slot></slot>
				<div
					ref={el => registerClickOutside(this, el, () => this.open = false)}
					class={DropdownClass.list}
					id={this.listId}
					aria-labelledby={this.controlId}
					aria-hidden={toBoolAttr(!this.open)}
					hidden={!this.open}>
					<slot name="list"></slot>
				</div>
			</Host>
		)
	}

	/**
	 * Returns the current state of the dropdown
	 */
	@Method()
	async getState() {
		return this.open
	}

	/**
	 * Sets the dropdown state
	 */
	@Method()
	async setOpen(state: boolean) {
		this.open = state
	}
}
