import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core"
import { createID } from "../../../utils/string.utils"
import { validateProp } from "../../../helpers/Validate/props"
import { FormRadioClass, FormRadioSizes, FormRadioSizesType } from "./constants"
import { govHost, toBoolAttr, toBoolAttrIfDefined } from "../../../helpers/Dom/template"
import { validateWcagLabelFor, validateWcagRef } from "../../../helpers/Validate/wcag"
import { canValidateWcagOnRender } from "../../../helpers/Dom/win"
import { delay } from "../../../utils/utils"
import { GovForm } from "../../../helpers/Dom/form.types"
import { GovHost } from "../../../helpers/Dom/template.types"
import { govForm } from "../../../helpers/Dom/form"
import Fragment from "../../../helpers/Fragment"
import { FormRadioEvent } from "./gov-form-radio.types"

@Component({
	tag: "gov-form-radio",
	styleUrl: "gov-form-radio.scss",
})
export class GovFormRadio {
	private readonly h: GovHost
	private f: GovForm
	private inputRef?: HTMLInputElement

	private readonly radioId: string

	constructor() {
		this.radioId = createID("GovRadio")

		this.h = govHost(this.host)
		this.f = govForm(this.h)
	}

	@Element() host: HTMLGovFormRadioElement
	/**
	 * Value of radio
	 */
	@Prop() readonly value: string
	/**
	 * When you can't use the form label.
	 */
	@Prop({ attribute: "no-label" }) readonly noLabel: boolean = false
	/**
	 * Radio button state
	 */
	@Prop({ reflect: true, mutable: true }) checked = false
	/**
	 * Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them.
	 * When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors.
	 */
	@Prop() readonly required: boolean = false
	/**
	 * Makes the radio component disabled.
	 * This prevents users from being able to interact with the radio, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Name of the radio.
	 */
	@Prop() readonly name: string
	/**
	 * Radio's size.
	 */
	@Prop() readonly size?: FormRadioSizesType = "m"
	/**
	 * Custom radio identifier.
	 */
	@Prop({ attribute: "identifier" }) readonly identifier: string
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
	 * Emitted when the radio has focus.
	 */
	@Event({ eventName: "gov-focus" }) govFocus: EventEmitter<FormRadioEvent>
	/**
	 * Emitted when the radio loses focus.
	 */
	@Event({ eventName: "gov-blur" }) govBlur: EventEmitter<FormRadioEvent>
	/**
	 * Emitted when the radio change value.
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<FormRadioEvent>

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(FormRadioSizes, newValue, FormRadioClass.root)
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
		this.f.passAttrToControl("type", "radio")
	}


	componentWillLoad() {
		this.passControlAttrs()
	}

	async componentDidRender() {
		this.f.passAttrToLabel("identifier", this.identifier || this.radioId)
		this.f.passAttrToLabel("required", String(this.required))
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		const wrapRadio = children => {
			if (this.noLabel) {
				return <label class={FormRadioClass.label}>{children}</label>
			}
			return children
		}

		return (
			<Host class={FormRadioClass.root} checked={this.checked} size={this.size} invalid={toBoolAttrIfDefined(this.invalid)}>
				<div class={FormRadioClass.holder}>
					{wrapRadio(
						<Fragment>
							<input
								class={FormRadioClass.input}
								id={this.identifier || this.radioId}
								type="radio"
								value={this.value}
								name={this.name}
								checked={this.checked}
								disabled={this.disabled}
								onClick={this.onClickHandler.bind(this)}
								onChange={this.onChangeHandler.bind(this)}
								onFocus={this.onFocusHandler.bind(this)}
								onBlur={this.onBlurHandler.bind(this)}
								ref={el => (this.inputRef = el as HTMLInputElement)}
								required={this.required}
								aria-checked={this.checked}
								aria-required={toBoolAttrIfDefined(this.required)}
								aria-invalid={toBoolAttrIfDefined(this.invalid)}
								aria-describedby={this.wcagDescribedBy}
								aria-labelledby={this.wcagLabelledBy}
								aria-disabled={toBoolAttrIfDefined(this.disabled)}
							/>
							<span>
								<slot name="label" />
							</span>
						</Fragment>,
					)}
				</div>
			</Host>
		)
	}

	private onClickHandler(e: PointerEvent) {
		e.stopPropagation()
	}

	private onFocusHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govFocus.emit({
			component: FormRadioClass.root,
			value: this.value,
			checked: this.checked,
			originalEvent: e,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govBlur.emit({
			component: FormRadioClass.root,
			value: this.value,
			checked: this.checked,
			originalEvent: e,
		})
	}

	private onChangeHandler(e: Event) {
		this.checked = (e.target as HTMLInputElement).checked
		e.stopPropagation()
		this.govChange.emit({
			component: FormRadioClass.root,
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
		validateWcagRef(this.wcagDescribedBy, "wcag-described-by", FormRadioClass.root)
		validateWcagRef(this.wcagLabelledBy, "wcag-labelled-by", FormRadioClass.root)
		validateWcagLabelFor(this.identifier || this.radioId, this.wcagLabelledBy, FormRadioClass.root)
	}
}
