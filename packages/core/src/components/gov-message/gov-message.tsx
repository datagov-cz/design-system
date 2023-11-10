import { Component, Element, h, Host, Prop, Watch } from "@stencil/core"
import { validateProp } from "../../helpers/Validate/props"
import { MessageClass, MessageVariantType } from "./constants"
import { govHost } from "../../helpers/Dom/template"
import { GovHost } from "../../helpers/Dom/template.types"
import { Variants } from "../../core/constants/variants"

@Component({
	tag: "gov-message",
	styleUrl: "gov-message.scss",
})
export class GovMessage {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovMessageElement

	/**
	 * Style variation of the content message.
	 */
	@Prop() readonly variant: MessageVariantType = Variants.PRIMARY

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(Variants, newValue, MessageClass.root)
	}

	render() {
		return (
			<Host class={this.h.classes(MessageClass.root)} variant={this.variant} role="alert">
				{this.h.hasSlot("icon") && (
					<span class={MessageClass.icon}>
						<slot name="icon" />
					</span>
				)}

				<div class={MessageClass.content}>
					<slot />
				</div>
			</Host>
		)
	}
}
