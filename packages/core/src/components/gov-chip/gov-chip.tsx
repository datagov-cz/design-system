import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core"
import { GovHost } from "../../helpers/Dom/template.types"
import { validateProp } from "../../helpers/Validate/props"
import { govHost, toBoolAttr } from "../../helpers/Dom/template"
import { ChipClass, NativeType, NativeTypesType } from "./constants"
import { ButtonSizes, ButtonSizesType, ButtonVariants, ButtonVariantType } from "../gov-button/button/constants"
import { createID } from "../../utils/string.utils"
import {prepareIconFormat} from "../gov-icon/helpers";

@Component({
	tag: "gov-chip",
	styleUrl: "gov-chip.scss",
})
export class GovChip {
	private triggerRef?: HTMLButtonElement | HTMLLinkElement | HTMLSpanElement
	private h: GovHost
	private readonly chipId: string

	constructor() {
		this.h = govHost(this.host)
		this.chipId = createID('GovChip')
	}

	@Element() host: HTMLGovChipElement

	/**
	 * Determine if component should have inverse colors to be used on dark background
	 */
	@Prop() readonly inverse: boolean = false
	/**
	 * Makes the chip component disabled.
	 * This prevents users from being able to interact with the button, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href
	 */
	@Prop() readonly href: string
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
	 */
	@Prop() readonly target: string
	/**
	 * Definition of the button icon on the left. The icon must be defined in the form "type/name".
	 */
	@Prop({attribute: "icon-left"}) readonly iconLeft?: string
	/**
	 * Definition of the button icon on the left. The icon must be defined in the form "type/name".
	 */
	@Prop({attribute: "icon-right"}) readonly iconRight?: string
	/**
	 * Chip’s size.
	 */
	@Prop() readonly size: ButtonSizesType = ButtonSizes._M
	/**
	 * Used to change the HTML tag in the chip
	 */
	@Prop() readonly tag: NativeTypesType = "span"
	/**
	 * Style variation of the chip.
	 */
	@Prop() readonly variant: ButtonVariantType = ButtonVariants.PRIMARY
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/focusable
	 */
	@Prop() readonly focusable: boolean = true
	/**
	 * Custom chip identifier. Otherwise, it will be generated
	 */
	@Prop() readonly identifier: string
	/**
	 * Adds accessible label for the button that is only shown for screen readers.
	 * Typically, this label text replaces the visible text on the button for users who use assistive technology.
	 */
	@Prop({ attribute: "wcag-label" }) readonly wcagLabel: string
	/**
	 * Use this property to add an aria-controls attribute to the button. Use the attribute to point to the unique id of the content that the button manages
	 */
	@Prop({ attribute: "wcag-controls" }) readonly wcagControls: string
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected
	 */
	@Prop({ attribute: "wcag-selected" }) readonly wcagSelected: boolean
	/**
	 * Emitted when the button click.
	 */
	@Event({ eventName: "gov-click" }) govClick: EventEmitter<PointerEvent>

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(ButtonVariants, newValue, ChipClass.root)
	}

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(ButtonSizes, newValue, ChipClass.root)
	}

	componentWillLoad(): void {
		this.validateVariant(this.variant)
		this.validateSize(this.size)
	}

	render() {
		const Tag = this.href ? NativeType.A : this.tag
		const nativeType = Tag == NativeType.BUTTON ? NativeType.BUTTON : undefined

		const iconLeft = prepareIconFormat(this.iconLeft)
		const iconRight = prepareIconFormat(this.iconRight)

		return (
			<Host
				class={this.h.classes([
					ChipClass.root,
					this.h.hasSlot("right") ? ChipClass.hasRight : undefined,
					this.h.hasSlot("left") ? ChipClass.hasLeft : undefined,
				])}
				disabled={this.disabled}
				href={this.href}
				variant={this.variant}
				type={this.inverse ? undefined : "solid"}
				size={this.size}
				inverse={this.inverse}
				hoverable={Tag == NativeType.A || Tag == NativeType.BUTTON}
			>
				<Tag
					class="element"
					href={this.href}
					target={this.target}
					aria-label={this.wcagLabel}
					ref={el => (this.triggerRef = el as HTMLLinkElement | HTMLButtonElement | HTMLSpanElement)}
					onClick={this.onClickHandler.bind(this)}
					aria-controls={this.wcagControls}
					aria-selected={toBoolAttr(this.wcagSelected)}
					tabindex={this.focusable ? "0" : "-1"}
					id={this.identifier || this.chipId}
					type={nativeType}>
					{this.h.hasSlot("left") && <slot name="left"></slot>}
					{this.h.hasSlot("left-icon") && <slot name="left-icon"></slot>}
					{iconLeft && 	<gov-icon type={iconLeft.type} name={iconLeft.name}></gov-icon>}
					<slot />
					{this.h.hasSlot("right-icon") && <slot name="right-icon"></slot>}
					{this.h.hasSlot("right") && <slot name="right"></slot>}
					{iconRight && 	<gov-icon type={iconRight.type} name={iconRight.name}></gov-icon>}
				</Tag>
			</Host>
		)
	}

	private onClickHandler(e: PointerEvent): void {
		e.stopPropagation()
		if (this.disabled === false && this.tag === NativeType.BUTTON) {
			this.govClick.emit(e)
		}
	}

	/**
	 * Returns a clickable element instance
	 */
	@Method()
	async getTriggerRef() {
		return this.triggerRef
	}

	/**
	 * Returns a unique tab trigger identifier
	 */
	@Method()
	async getTriggerIdentifier(): Promise<string> {
		return this.identifier || this.chipId
	}

	/**
	 * Focus button element
	 */
	@Method()
	async setFocus(): Promise<void> {
		this.triggerRef.focus()
	}
}
