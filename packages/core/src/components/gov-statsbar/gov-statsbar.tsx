import { Component, Element, h, Host, Prop, Watch } from "@stencil/core"
import { validateProp } from "../../helpers/Validate/props"
import {
	StatsBarClass,
	StatsBarIconPosition,
	StatsBarIconPositionType,
	StatsBarItemClass,
	StatsBarVariants,
	StatsBarVariantType,
} from "./constants"
import { GovHost } from "../../helpers/Dom/template.types"
import { govHost } from "../../helpers/Dom/template"

@Component({
	tag: "gov-statsbar",
	styleUrl: "gov-statsbar.scss",
})
export class GovStatsbar {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovStatsbarElement

	/**
	 * Icon’s position
	 */
	@Prop({ attribute: "icon-position" }) readonly iconPosition?: StatsBarIconPositionType
	/**
	 * Style variation
	 */
	@Prop({ attribute: "variant" }) readonly variant?: StatsBarVariantType = StatsBarVariants.PRIMARY

	@Watch("iconPosition")
	validateIconPosition(newValue: string): void {
		validateProp(StatsBarIconPosition, newValue, StatsBarClass.root)
	}

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(StatsBarVariants, newValue, StatsBarClass.root)
	}

	componentWillLoad(): void {
		this.validateIconPosition(this.iconPosition)
		this.validateVariant(this.variant)
	}

	componentDidLoad() {
		this.host.querySelectorAll(StatsBarItemClass.root).forEach((node: any) => {
			if (this.iconPosition === "left") {
				node.setAttribute("icon-position", "left")
			}
		})
	}

	render() {
		return (
			<Host class={this.h.classes(StatsBarClass.root)} variant={this.variant}>
				<section class={StatsBarClass.section}>
					<slot />
				</section>
			</Host>
		)
	}
}
