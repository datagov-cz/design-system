import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core"
import { createID } from "../../../utils/string.utils"
import { validateProp } from "../../../helpers/Validate/props"
import { FormCheckboxClass, FormCheckboxSizes, FormCheckboxSizesType } from "./constants"
import { govHost, toBoolAttr, toBoolAttrIfDefined } from "../../../helpers/Dom/template"
import { validateWcagLabelFor, validateWcagRef } from "../../../helpers/Validate/wcag"
import { canValidateWcagOnRender } from "../../../helpers/Dom/win"
import { delay } from "../../../utils/utils"
import { GovForm } from "../../../helpers/Dom/form.types"
import { GovHost } from "../../../helpers/Dom/template.types"
import { govForm } from "../../../helpers/Dom/form"
import Fragment from "../../../helpers/Fragment"
import { FormCheckboxEvent } from "./gov-form-checkbox.types"

@Component({
	tag: "gov-form-checkbox",
	styleUrl: "gov-form-checkbox.scss",
})
export class GovFormCheckbox {
	private readonly h: GovHost
	private f: GovForm
	private inputRef?: HTMLInputElement

	private readonly checkboxId: string

	constructor() {
		this.checkboxId = createID("GovCheckbox")

		this.h = govHost(this.host)
		this.f = govForm(this.h)
	}

	@Element() host: HTMLGovFormCheckboxElement
	/**
	 * Value of checkbox
	 */
	@Prop() readonly value: string
	/**
	 * Checkbox button state
	 */
	@Prop({ reflect: true, mutable: true }) checked = false
	/**
	 * Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them.
	 * When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors.
	 */
	@Prop() readonly required: boolean = false
	/**
	 * Makes the checkbox component disabled.
	 * This prevents users from being able to interact with the checkbox, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Name of the checkbox.
	 */
	@Prop() readonly name: string
	/**
	 * Checkboxes size.
	 */
	@Prop() readonly size?: FormCheckboxSizesType = "m"
	/**
	 * Custom checkbox identifier.
	 */
	@Prop({ attribute: "identifier" }) readonly identifier: string
	/**
	 * When you can't use the form label.
	 */
	@Prop({ attribute: "no-label" }) readonly noLabel: boolean = false
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
	 * Emitted when the checkbox has focus.
	 */
	@Event({ eventName: "gov-focus" }) govFocus: EventEmitter<FormCheckboxEvent>
	/**
	 * Emitted when the checkbox loses focus.
	 */
	@Event({ eventName: "gov-blur" }) govBlur: EventEmitter<FormCheckboxEvent>
	/**
	 * Emitted when the checkbox change value.
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<FormCheckboxEvent>

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(FormCheckboxSizes, newValue, FormCheckboxClass.root)
	}

	@Watch("disabled")
	@Watch("invalid")
	@Watch("size")
	watchDisabled(): void {
		this.passControlAttrs()
	}

	private passControlAttrs() {
		this.f.passAttrToControl("size", this.size)
		this.f.passAttrToControl("disabled", toBoolAttr(this.disabled))
		this.f.passAttrToControl("invalid", toBoolAttr(this.invalid))
	}

	componentWillLoad() {
		this.f.passAttrToControl("type", "checkbox")
		this.passControlAttrs()
	}

	async componentDidRender() {
		this.f.passAttrToLabel("identifier", this.identifier || this.checkboxId)
		this.f.passAttrToLabel("required", String(this.required))
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		const wrapCheckbox = (children) => {
			if (this.noLabel) {
				return (
					<label class={FormCheckboxClass.label}>
						{children}
					</label>
				)
			}
			return children
		}

		return (
			<Host class={FormCheckboxClass.root} checked={this.checked} size={this.size} invalid={toBoolAttrIfDefined(this.invalid)}>
				{wrapCheckbox(
					<Fragment>
						<input
							id={this.identifier || this.checkboxId}
							type="checkbox"
							value={this.value}
							name={this.name}
							checked={this.checked}
							onClick={this.onClickHandler.bind(this)}
							onChange={this.onChangeHandler.bind(this)}
							onFocus={this.onFocusHandler.bind(this)}
							onBlur={this.onBlurHandler.bind(this)}
							required={this.required}
							disabled={this.disabled}
							ref={el => (this.inputRef = el as HTMLInputElement)}
							aria-checked={toBoolAttr(this.checked)}
							aria-required={toBoolAttrIfDefined(this.required)}
							aria-invalid={toBoolAttrIfDefined(this.invalid)}
							aria-describedby={this.wcagDescribedBy}
							aria-labelledby={this.wcagLabelledBy}
							aria-disabled={toBoolAttrIfDefined(this.disabled)}
						/>
						<span>
							<slot name="label" />
							<gov-icon class={FormCheckboxClass.check} name="check-lg"></gov-icon>
						</span>
					</Fragment>,
				)}
			</Host>
		)
	}

	private onFocusHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govFocus.emit({
			component: FormCheckboxClass.root,
			value: this.value,
			checked: this.checked,
			originalEvent: e,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govBlur.emit({
			component: FormCheckboxClass.root,
			value: this.value,
			checked: this.checked,
			originalEvent: e,
		})
	}

	private onClickHandler(e: PointerEvent) {
		e.stopPropagation()
	}

	private onChangeHandler(e: Event) {
		this.checked = (e.target as HTMLInputElement).checked
		e.stopPropagation()
		this.govChange.emit({
			component: FormCheckboxClass.root,
			value: this.value,
			checked: this.checked,
			originalEvent: e,
		})
	}

	/**
	 * Returns the reference of the native element
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
		validateWcagRef(this.wcagDescribedBy, "wcag-described-by", FormCheckboxClass.root)
		validateWcagRef(this.wcagLabelledBy, "wcag-labelled-by", FormCheckboxClass.root)
		validateWcagLabelFor(this.identifier || this.checkboxId, this.wcagLabelledBy, FormCheckboxClass.root)
	}
}
