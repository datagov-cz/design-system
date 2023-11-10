import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from "@stencil/core"
import { govForm } from "../../../helpers/Dom/form"
import { GovForm } from "../../../helpers/Dom/form.types"
import { govHost, toBoolAttr, toBoolAttrIfDefined, toOnOffAttrIfDefined } from "../../../helpers/Dom/template"
import { GovHost } from "../../../helpers/Dom/template.types"
import { canValidateWcagOnRender } from "../../../helpers/Dom/win"
import { validateProp } from "../../../helpers/Validate/props"
import { validateWcagLabelFor, validateWcagRef } from "../../../helpers/Validate/wcag"
import { createID } from "../../../utils/string.utils"
import { delay } from "../../../utils/utils"
import {
	FormInputClass,
	FormInputSizes,
	FormInputSizesType,
	FormInputVariants,
	FormInputVariantType,
	InputType,
	Type,
} from "./constants"
import { FormInputEvent } from "./gov-form-input.types"
import { Nullable } from "../../../types/interfaces"

enum Tags {
	INPUT = "input",
	TEXTAREA = "textarea",
}

@Component({
	tag: "gov-form-input",
	styleUrl: "gov-form-input.scss",
})
export class GovFormInput {
	private f: GovForm
	private readonly h: GovHost
	private inputRef?: HTMLInputElement
	private readonly inputId: string

	constructor() {
		this.h = govHost(this.host)
		this.inputId = createID("GovInput")
		this.f = govForm(this.h)
	}

	@Element() host: HTMLGovFormInputElement
	/**
	 * Value of input
	 */
	@Prop({ reflect: true, mutable: true }) value: string
	/**
	 * Custom input identifier.
	 */
	@Prop({ attribute: "identifier" }) readonly identifier: string
	/**
	 * Style variation of the form input.
	 */
	@Prop() readonly variant?: FormInputVariantType = "secondary"
	/**
	 * Indicates the entered value of child form element does conform to the format expected by the application.
	 */
	@Prop() readonly success: boolean
	/**
	 * Input’s size.
	 */
	@Prop() readonly size?: FormInputSizesType = "m"
	/**
	 * Name of the input.
	 */
	@Prop() readonly name: string
	/**
	 * Generates a texarea for the possibility of multiple lines
	 */
	@Prop() readonly multiline: boolean
	/**
	 * Same as original parameter https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attr-rows
	 */
	@Prop() readonly rows: number
	/**
	 * Same as original parameter https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attr-cols
	 */
	@Prop() readonly cols: number
	/**
	 * Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them.
	 * When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors.
	 */
	@Prop() readonly required: boolean = false
	/**
	 * Makes the input component disabled.
	 * This prevents users from being able to interact with the select, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Text that appears in the form control when it has no value set
	 */
	@Prop() readonly placeholder: string
	/**
	 * The value is not editable
	 */
	@Prop() readonly readonly: boolean
	/**
	 * Minimum length (number of characters) of value
	 */
	@Prop() readonly minlength: number
	/**
	 * Maximum length (number of characters) of value
	 */
	@Prop() readonly maxlength: number
	/**
	 * Minimum value that is acceptable and valid for the input containing the attribute
	 */
	@Prop() readonly min?: string | number
	/**
	 * Maximum value that is acceptable and valid for the input containing the attribute
	 */
	@Prop() readonly max?: string | number
	/**
	 * Same as original parameter https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attr-autocomplete
	 */
	@Prop() readonly autocomplete: boolean
	/**
	 * Same as original parameter https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attr-autocorrect
	 */
	@Prop() readonly autocorrect: boolean
	/**
	 * Defineds the visual style of input
	 */
	@Prop() readonly type?: Type
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
	 */
	@Prop({ attribute: "input-type" }) readonly inputType: InputType = "text"
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/input_role
	 */
	@Prop() readonly role: Nullable<string>
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 */
	@Prop() readonly invalid: boolean
	/**
	 * Indicates the id of a component that describes the input.
	 */
	@Prop({ attribute: "wcag-described-by" }) readonly wcagDescribedBy: string
	/**
	 * Indicates the id of a component that labels the input.
	 */
	@Prop({ attribute: "wcag-labelled-by" }) readonly wcagLabelledBy: string
	/**
	 * Indicates the id of a component that describes the input.
	 */
	@Prop({ attribute: "wcag-owns" }) readonly wcagOwns: string
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value.
	 */
	@Prop({ attribute: "wcag-autocomplete" }) readonly wcagAutocomplete: string
	/**
	 *  Attribute is set on an element to indicate if a control is expanded or collapsed
	 */
	@Prop({ attribute: "wcag-expanded" }) readonly wcagExpanded: boolean
	/**
	 * Emitted when the input has focus.
	 */
	@Event({ eventName: "gov-focus" }) govFocus: EventEmitter<FormInputEvent>
	/**
	 * Emitted when the input loses focus.
	 */
	@Event({ eventName: "gov-blur" }) govBlur: EventEmitter<FormInputEvent>
	/**
	 * Emitted when the input change value.
	 */
	@Event({ eventName: "gov-input" }) govInput: EventEmitter<FormInputEvent>
	/**
	 * Emitted when the input change value.
	 */
	@Event({ eventName: "gov-keyup" }) govKeyUp: EventEmitter<FormInputEvent>
	/**
	 * Emitted when the input change value.
	 */
	@Event({ eventName: "gov-keydown" }) govKeyDown: EventEmitter<FormInputEvent>
	@State() focused: boolean

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(FormInputVariants, newValue, FormInputClass.root)
	}

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(FormInputSizes, newValue, FormInputClass.root)
	}

	@Watch("disabled")
	@Watch("invalid")
	@Watch("type")
	@Watch("size")
	watchDisabled(): void {
		this.passControlAttrs()
	}

	private passControlAttrs() {
		this.f.passAttrToControl("size", this.size)
		this.f.passAttrToControl("disabled", toBoolAttr(this.disabled))
		this.f.passAttrToControl("invalid", toBoolAttr(this.invalid))
		this.f.passAttrToControl("type", this.multiline ? Tags.TEXTAREA : Tags.INPUT)
	}

	componentWillLoad() {
		this.validateVariant(this.variant)
		this.validateSize(this.size)
		this.passControlAttrs()

		this.f.passAttrToLabel("required", String(this.required))
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		const Tag = this.multiline ? Tags.TEXTAREA : Tags.INPUT

		return (
			<Host class={FormInputClass.root} size={this.size} variant={this.variant} type={this.type}>
				{this.h.hasSlot("prefix") && <slot name="prefix"></slot>}
				<span class="element">
					{this.h.hasSlot("left-icon") && <slot name="left-icon" />}

					{this.h.hasSlot("right-icon") && !(this.success || this.invalid) && <slot name="right-icon" />}

					{this.success && !this.multiline &&
											<gov-icon slot="right-icon" class="icon-validation" name="check-lg"></gov-icon>}
					{this.invalid && !this.multiline &&
											<gov-icon slot="right-icon" class="icon-validation" name="exclamation-lg"></gov-icon>}
					<Tag
						type={this.inputType}
						disabled={this.disabled}
						id={this.identifier || this.inputId}
						name={this.name}
						onFocus={this.onFocusHandler.bind(this)}
						onInput={this.onInputHandler.bind(this)}
						onBlur={this.onBlurHandler.bind(this)}
						onKeyUp={this.onKeyUpHandler.bind(this)}
						onKeyDown={this.onKeyDownHandler.bind(this)}
						ref={el => (this.inputRef = el as HTMLInputElement)}
						placeholder={this.placeholder}
						value={this.value}
						readonly={toBoolAttrIfDefined(this.readonly)}
						autocomplete={toOnOffAttrIfDefined(this.autocomplete)}
						autocorrect={toOnOffAttrIfDefined(this.autocorrect)}
						minlength={this.minlength}
						maxlength={this.maxlength}
						min={this.min}
						max={this.max}
						required={this.required}
						rows={this.rows}
						cols={this.cols}
						role={this.role}
						aria-required={toBoolAttrIfDefined(this.required)}
						aria-invalid={toBoolAttrIfDefined(this.invalid)}
						aria-disabled={toBoolAttrIfDefined(this.disabled)}
						aria-describedby={this.wcagDescribedBy}
						aria-labelledby={this.wcagLabelledBy}
						aria-owns={this.wcagOwns}
						aria-expanded={toBoolAttrIfDefined(this.wcagExpanded)}
						aria-autocomplete={this.wcagAutocomplete}
					/>
				</span>
				{this.h.hasSlot("sufix") && <slot name="sufix"></slot>}
			</Host>
		)
	}

	private onFocusHandler(e: FocusEvent) {
		e.stopPropagation()
		this.focused = true
		this.govFocus.emit({
			component: FormInputClass.root,
			value: this.value,
			originalEvent: e,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		e.stopPropagation()
		this.focused = false
		this.govBlur.emit({
			component: FormInputClass.root,
			value: this.value,
			originalEvent: e,
		})
	}

	private onKeyUpHandler(e: KeyboardEvent) {
		e.stopPropagation()
		this.govKeyUp.emit({
			component: FormInputClass.root,
			value: this.value,
			originalEvent: e,
		})
	}

	private onKeyDownHandler(e: KeyboardEvent) {
		e.stopPropagation()
		this.govKeyDown.emit({
			component: FormInputClass.root,
			value: this.value,
			originalEvent: e,
		})
	}

	private onInputHandler(e: InputEvent) {
		this.value = (e.target as HTMLInputElement).value
		e.stopPropagation()
		this.govInput.emit({
			component: FormInputClass.root,
			value: this.value,
			originalEvent: e,
		})
	}

	/**
	 * Returns the current state of the component
	 */
	@Method()
	async setFocus(options?: FocusOptions): Promise<void> {
		return this.inputRef.focus(options)
	}

	/**
	 * Sets the ordered value of the element
	 */
	@Method()
	async setValue(value: string): Promise<void> {
		this.value = value
	}

	/**
	 * Clears input value
	 */
	@Method()
	async clearValue(): Promise<void> {
		this.value = ""
		this.inputRef.value = ""
	}

	/**
	 * Returns an instance of the native html input element
	 */
	@Method()
	async getRef(): Promise<HTMLInputElement> {
		return this.inputRef
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagRef(this.wcagDescribedBy, "wcag-described-by", FormInputClass.root)
		validateWcagRef(this.wcagLabelledBy, "wcag-labelled-by", FormInputClass.root)
		validateWcagRef(this.wcagOwns, "wcag-owns", FormInputClass.root)
		validateWcagLabelFor(this.identifier || this.inputId, this.wcagLabelledBy, FormInputClass.root)
	}
}
