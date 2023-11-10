import { Component, Element, h, Host, Prop, Watch } from "@stencil/core"
import { TooltipContentClass, TooltipSize, TooltipSizeType, TooltipVariant, TooltipVariantType } from "./constants"
import { toBoolAttr } from "../../helpers/Dom/template"

@Component({
	tag: "gov-tooltip-content",
	styleUrl: "gov-tooltip-content.scss",
})
export class GovTooltipContent {
	private timeout

	@Element() host: HTMLGovTooltipContentElement
	/**
	 * Style variation of the tooltip
	 */
	@Prop() readonly variant?: TooltipVariantType = TooltipVariant.PRIMARY
	/**
	 * Tooltip’s size.
	 */
	@Prop() readonly size?: TooltipSizeType = TooltipSize._M
	/**
	 * Tooltip is still visible.
	 */
	@Prop() persist?: boolean = false
	/**
	 * Indicates display of tooltip content
	 */
	@Prop({ attribute: "is-visible", mutable: true }) isVisible = false
	/**
	 * Indicates display of tooltip content
	 */
	@Prop({ attribute: "parent-id" }) parentId: string = null

	@Watch("isVisible")
	visibleContent(newValue: boolean): void {
		clearTimeout(this.timeout)
		if (newValue === false) {
			this.timeout = setTimeout(() => {
				this.host.style.visibility = "hidden"
			}, 250)
		} else {
			this.host.style.visibility = "visible"
		}
	}

	hideContent() {
		this.isVisible = false
		this.persist = false
		const parentEl = document.getElementById(this.parentId) as HTMLGovTooltipElement
		if (parentEl) {
			parentEl.hide().catch()
		}
	}

	render() {
		return (
			<Host
				class={TooltipContentClass.root}
				role={"tooltip"}
				hidden={!this.isVisible}
				aria-hidden={!toBoolAttr(this.isVisible)}
				is-visible={this.isVisible}>
				<slot></slot>
				{this.persist ? (
					<gov-button
						on-gov-click={this.hideContent.bind(this)}
						variant={this.variant}
						size={this.size}
						type={"base"}
						inverse={this.variant === TooltipVariant.SECONDARY}>
						<gov-icon slot={"left-icon"} name={"x-lg"} type={"basic"}></gov-icon>
					</gov-button>
				) : null}
			</Host>
		)
	}
}
