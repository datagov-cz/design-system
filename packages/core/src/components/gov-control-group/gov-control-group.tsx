import { Component, Element, h, Host, Prop, Watch } from "@stencil/core"
import { Variants } from "../../core/constants/variants"
import { govHost } from "../../helpers/Dom/template"
import { GovHost } from "../../helpers/Dom/template.types"
import { validateProp } from "../../helpers/Validate/props"
import { ControlGroupClass, ControlGroupVariantType } from "./constants"

@Component({
	tag: "gov-control-group",
	styleUrl: "gov-control-group.scss",
})
export class GovControlGroup {
	private readonly h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovControlGroupElement
	/**
	 * Style variation of the content message.
	 */
	@Prop() readonly variant: ControlGroupVariantType = Variants.PRIMARY
	/**
	 * Specifies the display of the border between elements
	 */
	@Prop({ attribute: "no-border" }) readonly noBorder: boolean = false

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(Variants, newValue, ControlGroupClass.root)
	}

	render() {
		const noBorder = this.noBorder === true ? "no-border" : undefined
		return (
			<Host
				class={this.h.classes([ControlGroupClass.root, noBorder])}
				variant={this.variant}>
				<slot />
			</Host>
		)
	}
}
