import {Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch} from "@stencil/core"
import {validateProp} from "../../../helpers/Validate/props"
import {
	ButtonClass,
	ButtonSizesType,
	ButtonTargetType,
	ButtonVariants,
	ButtonVariantType,
	NativeType,
	NativeTypesType,
	Type,
	TypesType,
} from "./constants"
import {govHost, prepareClasses, toBoolAttr, toBoolAttrIfDefined} from "../../../helpers/Dom/template"
import {GovHost} from "../../../helpers/Dom/template.types"
import {toBool} from "../../../utils/bool.utils"
import {Sizes} from "../../../core/constants/sizes"
import {validateWcagLabel, validateWcagRef} from "../../../helpers/Validate/wcag"
import {canValidateWcagOnRender} from "../../../helpers/Dom/win"
import {delay} from "../../../utils/utils"
import {ButtonEvent} from "./gov-button.types"
import {prepareIconFormat} from "../../gov-icon/helpers";

enum Tags {
	A = "a",
	BUTTON = "button",
}

@Component({
	tag: "gov-button",
	styleUrl: "gov-button.scss",
})
export class GovButton {
	private h: GovHost
	private triggerRef?: HTMLButtonElement | HTMLLinkElement

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovButtonElement

	/**
	 * Style variation of the button
	 */
	@Prop({reflect: true}) readonly variant?: ButtonVariantType
	/**
	 * Button’s size
	 */
	@Prop({reflect: true}) readonly size?: ButtonSizesType = "m"
	/**
	 * Button's type
	 */
	@Prop({reflect: true}) readonly type?: TypesType = "solid"
	/**
	 * Expands the button to fill 100% of the container width
	 */
	@Prop({reflect: true}) readonly expanded: boolean = false
	/**
	 * Determine if component should have inversed colors to be used on dark background
	 */
	@Prop({reflect: true}) readonly inverse: boolean = false
	/**
	 * The name of the button, which gets paired with the button's value when submitted as part of a form. Corresponds with the native HTML name attribute
	 */
	@Prop() readonly name: string
	/**
	 * Definition of the button icon on the left. The icon must be defined in the form "type/name".
	 */
	@Prop({attribute: "icon-left"}) readonly iconLeft?: string
	/**
	 * Definition of the button icon on the left. The icon must be defined in the form "type/name".
	 */
	@Prop({attribute: "icon-right"}) readonly iconRight?: string
	/**
	 * Makes the button component disabled.
	 * This prevents users from being able to interact with the button, and conveys its inactive state to assistive technologies
	 */
	@Prop({reflect: true}) readonly disabled: boolean = false
	/**
	 * Same as original parameter
	 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
	 */
	@Prop() readonly nativeType?: NativeTypesType = "button"
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href
	 */
	@Prop() readonly href: string
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
	 */
	@Prop() readonly target?: ButtonTargetType
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
	 */
	@Prop() readonly download: boolean
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-hreflang
	 */
	@Prop() readonly hreflang: string
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-referrerpolicy
	 */
	@Prop() readonly referrerpolicy: string
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel
	 */
	@Prop() readonly rel: string
	/**
	 * Indicates whether an asynchronous process is running
	 */
	@Prop() readonly loading: string
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/focusable
	 */
	@Prop() readonly focusable: boolean = true
	/**
	 * Custom button identifier
	 */
	@Prop({attribute: "identifier"}) readonly identifier: string
	/**
	 * Indicates the id of a related component’s visually focused element
	 */
	@Prop({attribute: "wcag-active-descendant"}) readonly wcagActiveDescendant: string
	/**
	 * Use this property to add an aria-controls attribute to the button. Use the attribute to point to the unique id of the content that the button manages
	 */
	@Prop({attribute: "wcag-controls"}) readonly wcagControls: string
	/**
	 * Indicates the id of a component that describes the button
	 */
	@Prop({attribute: "wcag-described-by"}) readonly wcagDescribedBy: string
	/**
	 * Aria description the button
	 */
	@Prop({attribute: "wcag-description"}) readonly wcagDescription: string
	/**
	 * Details of the component
	 */
	@Prop({attribute: "wcag-details"}) readonly wcagDetails: string
	/**
	 * If a button expands or collapses adjacent content, then use the ariaExpanded prop to add the aria-expanded attribute to the button
	 * Set the value to convey the current expanded (true) or collapsed (false) state of the content
	 */
	@Prop({attribute: "wcag-expanded"}) readonly wcagExpanded: boolean
	/**
	 * Adds accessible label for the button that is only shown for screen readers
	 * Typically, this label text replaces the visible text on the button for users who use assistive technology
	 */
	@Prop({attribute: "wcag-label"}) readonly wcagLabel: string
	/**
	 * String of id's that indicate alternative labels elements
	 */
	@Prop({attribute: "wcag-labelled-by"}) readonly wcagLabelledBy: string
	/**
	 * Indicates the id of a component owned by the button
	 */
	@Prop({attribute: "wcag-owns"}) readonly wcagOwns: string
	/**
	 * 	Use this property to add an aria-haspopup attribute to a button, if you are using it as a menu button
	 */
	@Prop({attribute: "wcag-has-popup"}) readonly wcagHasPopup: string
	/**
	 * Tells screen reader the element is pressed
	 */
	@Prop({attribute: "wcag-pressed"}) readonly wcagPressed: string
	/**
	 * Indicates the current item within a container or set of related elements
	 */
	@Prop({attribute: "wcag-current"}) readonly wcagCurrent: string
	/**
	 * Emitted when the button click
	 */
	@Event({eventName: "gov-click"}) govClick: EventEmitter<ButtonEvent>
	/**
	 * Emitted when the button has focus
	 */
	@Event({eventName: "gov-focus"}) govFocus: EventEmitter<ButtonEvent>
	/**
	 * Emitted when the button loses focus
	 */
	@Event({eventName: "gov-blur"}) govBlur: EventEmitter<ButtonEvent>

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(ButtonVariants, newValue, ButtonClass.root)
	}

	@Watch("type")
	validateType(newValue: string): void {
		validateProp(Type, newValue, ButtonClass.root)
	}

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(Sizes, newValue, ButtonClass.root)
	}

	@Watch("nativeType")
	validateNativeType(newValue: string): void {
		validateProp(NativeType, newValue, ButtonClass.root)
	}

	@State() isPressed = false

	componentWillLoad(): void {
		this.validateVariant(this.variant)
		this.validateType(this.type)
		this.validateSize(this.size)
		this.validateNativeType(this.nativeType)
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	get classNames(): string {
		const {h} = this

		return prepareClasses([ButtonClass.root, h.hasSlot("left-icon") && ButtonClass.rootWithIcon, h.hasSlot("right-icon") && ButtonClass.rootWithIcon])
	}

	render() {
		const Tag = this.href ? Tags.A : Tags.BUTTON
		const nativeType = Tag === Tags.A ? undefined : this.nativeType

		const iconLeft = prepareIconFormat(this.iconLeft)
		const iconRight = prepareIconFormat(this.iconRight)

		return (
			<Host hoverable={true}
						size={this.size}
						variant={this.variant}
						class={this.h.classes(this.classNames)}
						type={this.type} inverse={this.inverse}>
				<Tag
					class="element"
					ref={el => (this.triggerRef = el as HTMLButtonElement | HTMLLinkElement)}
					onClick={this.onClickHandler.bind(this)}
					onFocus={this.onFocusHandler.bind(this)}
					onBlur={this.onBlurHandler.bind(this)}
					onMouseDown={() => (this.isPressed = true)}
					onMouseUp={() => (this.isPressed = false)}
					disabled={this.disabled}
					id={this.identifier}
					href={this.href}
					target={this.target}
					download={this.download}
					hreflang={this.hreflang}
					rel={this.rel}
					name={this.name}
					type={nativeType}
					tabindex={this.focusable ? "0" : "-1"}
					aria-activedescendant={this.wcagActiveDescendant}
					aria-describedby={this.wcagActiveDescendant}
					aria-description={this.wcagDescription}
					aria-controls={this.wcagControls}
					aria-details={this.wcagDetails}
					aria-expanded={toBoolAttrIfDefined(this.wcagExpanded)}
					aria-label={this.wcagLabel}
					aria-labelledby={this.wcagLabelledBy}
					aria-owns={this.wcagOwns}
					aria-haspopup={toBoolAttrIfDefined(this.wcagHasPopup)}
					aria-pressed={toBoolAttr(this.isPressed)}
					aria-disabled={toBoolAttrIfDefined(this.disabled)}
					aria-current={this.wcagCurrent}
				>
					{toBool(this.loading) && !this.h.hasSlot("right-icon") &&
						<gov-icon name="loader" class="gov-spin-animation"></gov-icon>}
					{this.h.hasSlot("left-icon") && <slot name="left-icon"></slot>}
					{iconLeft && 	<gov-icon type={iconLeft.type} name={iconLeft.name}></gov-icon>}
					<slot/>
					{this.h.hasSlot("right-icon") && <slot name="right-icon"></slot>}
					{iconRight && 	<gov-icon type={iconRight.type} name={iconRight.name}></gov-icon>}
					{toBool(this.loading) && this.h.hasSlot("right-icon") &&
						<gov-icon name="loader" class="gov-spin-animation"></gov-icon>}
				</Tag>
			</Host>
		)
	}

	private onClickHandler(e: PointerEvent): void {
		e.stopPropagation()
		if (this.disabled === false) {
			this.govClick.emit({
				component: ButtonClass.root,
				originalEvent: e,
				ref: this.host,
			})
		}
	}

	private onFocusHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govFocus.emit({
			component: ButtonClass.root,
			originalEvent: e,
			ref: this.host,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govBlur.emit({
			component: ButtonClass.root,
			originalEvent: e,
			ref: this.host,
		})
	}

	/**
	 * Focus button element
	 */
	@Method()
	async setFocus(): Promise<void> {
		this.triggerRef.focus()
	}

	/**
	 * Returns a clickable element instance
	 */
	@Method()
	async getTriggerRef() {
		return this.triggerRef
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		if (this.focusable) {
			validateWcagRef(this.wcagActiveDescendant, "aria-activedescendant", ButtonClass.root)
			validateWcagRef(this.wcagControls, "aria-controls", ButtonClass.root)
			validateWcagRef(this.wcagDetails, "aria-details", ButtonClass.root)
			validateWcagRef(this.wcagOwns, "aria-owns", ButtonClass.root)
			validateWcagRef(this.wcagHasPopup, "aria-haspopup", ButtonClass.root)
			validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, ButtonClass.root)
		}
	}
}
