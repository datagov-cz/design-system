import {Component, Element, h, Host, Method, Prop, State, Watch} from "@stencil/core"
import {validateProp} from "../../helpers/Validate/props"
import {
	TooltipClass,
	TooltipContentClass,
	TooltipPosition,
	TooltipPositionType,
	TooltipSize,
	TooltipSizeType,
	TooltipVariant,
	TooltipVariantType,
} from "./constants"
import {createID} from "../../utils/string.utils"
import {govHost} from "../../helpers/Dom/template"
import {GovHost} from "../../helpers/Dom/template.types"

@Component({
	tag: "gov-tooltip",
	styleUrl: "gov-tooltip.scss",
})
export class GovTooltip {
	private h: GovHost
	private content: HTMLGovTooltipContentElement
	private readonly tooltipContentId = undefined
	private readonly tooltipId = undefined

	constructor() {
		this.h = govHost(this.host)
		this.tooltipId = createID("GovTooltip")
		this.tooltipContentId = createID("GovContentTooltip")
	}

	@Element() host: HTMLGovTooltipElement
	/**
	 * Style variation of the tooltip
	 */
	@Prop() readonly variant?: TooltipVariantType = TooltipVariant.PRIMARY
	/**
	 * Tooltip’s size.
	 */
	@Prop() readonly size?: TooltipSizeType = TooltipSize._M
	/**
	 * Tooltip display position
	 */
	@Prop({mutable: true}) position: TooltipPositionType = "right"
	/**
	 * Information contained in the tooltip
	 */
	@Prop() readonly message: string = undefined
	/**
	 * Custom tooltip identifier.
	 */
	@Prop({attribute: "identifier"}) readonly identifier: string
	/**
	 * Trigger is just an icon
	 */
	@Prop({reflect: true}) readonly icon: boolean = undefined

	@State() persist = false

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(TooltipVariant, newValue, TooltipClass.root)
	}

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(TooltipSize, newValue, TooltipClass.root)
	}

	@Watch("position")
	validatePosition(newValue: string): void {
		validateProp(TooltipPosition, newValue, TooltipClass.root)
	}

	componentWillLoad(): void {
		this.validateVariant(this.variant)
		this.validateSize(this.size)
		this.validatePosition(this.position)

		this.createContentWrapper()
		this.registerListeners()
	}

	disconnectedCallback() {
		this.removeContent()
	}

	private createContentWrapper() {
		const hasContentInside = this.host.querySelector(TooltipContentClass.root) as HTMLGovTooltipContentElement
		if (hasContentInside) {
			this.content = hasContentInside
		} else {
			this.content = document.createElement(TooltipContentClass.root) as HTMLGovTooltipContentElement
			this.content.innerHTML = this.message
			this.host.appendChild(this.content)
		}

		const trigger = this.host.getBoundingClientRect()
		this.content.style.left = trigger.left + 'px'
		this.content.style.top = trigger.top + 'px'
		this.content.style.visibility = 'hidden'

		this.content.setAttribute("id", this.identifier ?? this.tooltipContentId)
		this.content.setAttribute("parent-id", this.tooltipId)
		this.content.setAttribute("variant", this.variant)
		this.content.setAttribute("size", this.size)
		document.body.appendChild(this.content)
	}

	private registerListeners() {
		this.host.addEventListener("click", e => {
			e.preventDefault()
			this.persist = true
			if (this.content) {
				this.content.setAttribute("persist", "true")
			}
			this.showTooltip()
		})
		this.host.addEventListener("focus", e => {
			e.preventDefault()
			this.showTooltip()
		})
		this.host.addEventListener("blur", e => {
			e.preventDefault()
			if (this.persist === false) {
				this.hideTooltip()
			}
		})
		this.host.addEventListener("mouseenter", e => {
			e.preventDefault()
			this.showTooltip()
		})
		this.host.addEventListener("mouseleave", e => {
			e.preventDefault()
			if (this.persist === false) {
				this.hideTooltip()
			}
		})
	}

	private verifyPositionSpace() {
		const offset = 12
		const windowWidth = window.innerWidth
		const trigger = this.host.getBoundingClientRect()
		const trgWidth = this.host.offsetWidth
		const trgHeight = this.host.offsetHeight
		const contentWidth = this.content.offsetWidth
		const contentHeight = this.content.offsetHeight
		const triggerPos = {
			left: trigger.left + document.documentElement.scrollLeft,
			top: trigger.top + document.documentElement.scrollTop,
		}

		const isRightSpace = ((triggerPos.left + offset + trigger.width) + contentWidth) <= windowWidth;
		const isLeftSpace = triggerPos.left > contentWidth;

		// LEFT/RIGHT
		if (this.position === TooltipPosition.LEFT || this.position === TooltipPosition.RIGHT) {
			this.content.style.top = (triggerPos.top - ((contentHeight - trgHeight) / 2)) + "px";
			if (isRightSpace === false && isLeftSpace === false) {
				this.position = TooltipPosition.TOP
				this.content.setAttribute("position", TooltipPosition.TOP)
			}
			if (isLeftSpace && isRightSpace === false && this.position === TooltipPosition.RIGHT) {
				this.position = TooltipPosition.LEFT
			}
			if (isRightSpace && isLeftSpace === false && this.position === TooltipPosition.LEFT) {
				this.position = TooltipPosition.RIGHT
			}
		}
		if (this.position === TooltipPosition.RIGHT) {
			this.content.setAttribute("position", TooltipPosition.RIGHT)
			this.content.style.left = (triggerPos.left + offset + trigger.width) + "px"
		}
		if (this.position === TooltipPosition.LEFT) {
			this.content.setAttribute("position", TooltipPosition.LEFT)
			this.content.style.left = (triggerPos.left - (contentWidth + offset)) + "px"
		}

		// LEFT/RIGHT FOR TOP/BOTTOM
		if (this.position === TooltipPosition.TOP || this.position === TooltipPosition.BOTTOM) {
			if (contentWidth > trgWidth) {
				let leftPosition = (triggerPos.left - ((contentWidth - trgWidth) / 2));
				const isNotLeftSpace = leftPosition < 0;
				const isNotRightSpace = (leftPosition + contentWidth) > windowWidth;
				if (isNotLeftSpace && isNotRightSpace) {
					this.content.style.width = "auto";
					this.content.style.left = offset + "px";
					this.content.style.right = offset + "px";
				} else {
					if (isNotLeftSpace) {
						leftPosition = offset
					}
					if (isNotRightSpace) {
						leftPosition = leftPosition - ((windowWidth - (leftPosition + contentWidth + offset)) * -1)
					}
					this.content.style.left = leftPosition + "px"
				}
			} else {
				const leftPosition = (triggerPos.left + ((trgWidth - contentWidth) / 2))

				this.content.style.left = leftPosition + "px"
			}
		}
		if (this.position === TooltipPosition.TOP) {
			this.content.setAttribute("position", TooltipPosition.TOP)
			this.content.style.top = (triggerPos.top - (contentHeight + offset)) + "px"
		}
		if (this.position === TooltipPosition.BOTTOM) {
			this.content.setAttribute("position", TooltipPosition.BOTTOM)
			this.content.style.top = (triggerPos.top + (trgHeight + offset)) + "px"
		}

		this.content.setAttribute("is-visible", "true")
		this.content.style.opacity = '1'

	}

	private showTooltip() {
		if (this.content) {
			this.content.style.opacity = '0'
			this.content.hidden = false
			this.verifyPositionSpace()
		}
	}

	private hideTooltip() {
		if (this.content) {
			this.content.setAttribute("is-visible", "false")
			this.content.setAttribute("persist", "false")
		}
	}

	private removeContent() {
		const contentEl = document.getElementById(this.tooltipContentId)
		if (contentEl) {
			contentEl.remove()
		}
	}

	render() {
		return (
			<Host
				id={this.tooltipId}
				class={this.h.classes(TooltipClass.root)}
				position={this.position}
				tabindex={0}
				aria-describedby={this.identifier ?? this.tooltipContentId}>
				<slot/>
			</Host>
		)
	}

	/**
	 * Showing the modal
	 */
	@Method()
	async show(): Promise<void> {
		this.showTooltip()
	}

	/**
	 * Hiding the modal
	 */
	@Method()
	async hide(): Promise<void> {
		this.persist = false
		this.hideTooltip()
	}
}
