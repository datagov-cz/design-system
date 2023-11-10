import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core"
import { createID } from "../../../utils/string.utils"
import { validateProp } from "../../../helpers/Validate/props"
import { FormSwitchClass, FormSwitchSizes, FormSwitchSizesType } from "./constants"
import { govHost, toBoolAttr, toBoolAttrIfDefined } from "../../../helpers/Dom/template"
import { validateWcagLabelFor, validateWcagRef } from "../../../helpers/Validate/wcag"
import { canValidateWcagOnRender } from "../../../helpers/Dom/win"
import { delay } from "../../../utils/utils"
import { GovForm } from "../../../helpers/Dom/form.types"
import { GovHost } from "../../../helpers/Dom/template.types"
import { govForm } from "../../../helpers/Dom/form"
import Fragment from "../../../helpers/Fragment"
import { FormSwitchEvent } from "./gov-form-switch.types"

@Component({
	tag: "gov-form-switch",
	styleUrl: "gov-form-switch.scss",
})
export class GovFormSwitch {
	private readonly h: GovHost
	private f: GovForm
	private inputRef?: HTMLInputElement

	private readonly checkboxId: string

	constructor() {
		this.checkboxId = createID("GovCheckbox")

		this.h = govHost(this.host)
		this.f = govForm(this.h)
	}

	@Element() host: HTMLGovFormSwitchElement
	/**
	 * Value of switch
	 */
	@Prop() readonly value: string
	/**
	 * When you can't use the form label.
	 */
	@Prop({ attribute: "no-label" }) readonly noLabel: boolean = false
	/**
	 * Switch button state
	 */
	@Prop({ reflect: true, mutable: true }) checked = false
	/**
	 * Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them.
	 * When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors.
	 */
	@Prop() readonly required: boolean = false
	/**
	 * Makes the switch component disabled.
	 * This prevents users from being able to interact with the switch, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Name of the switch.
	 */
	@Prop() readonly name: string
	/**
	 * Switch's size.
	 */
	@Prop() readonly size?: FormSwitchSizesType = "m"
	/**
	 * Custom switch identifier.
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
	 * Emitted when the switch has focus.
	 */
	@Event({ eventName: "gov-focus" }) govFocus: EventEmitter<FormSwitchEvent>
	/**
	 * Emitted when the switch loses focus.
	 */
	@Event({ eventName: "gov-blur" }) govBlur: EventEmitter<FormSwitchEvent>
	/**
	 * Emitted when the switch change value.
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<FormSwitchEvent>

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(FormSwitchSizes, newValue, FormSwitchClass.root)
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
		this.f.passAttrToControl("type", "switch")
	}

	componentWillLoad() {
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
					<label>
						{children}
					</label>
				)
			}
			return children
		}

		return (
			<Host class={this.h.classes(FormSwitchClass.root)} checked={this.checked} size={this.size} invalid={toBoolAttrIfDefined(this.invalid)}>
				<div class={FormSwitchClass.holder}>
					{wrapCheckbox(
						<Fragment>
							<input
								class={FormSwitchClass.input}
								id={this.identifier || this.checkboxId}
								type="checkbox"
								value={this.value}
								name={this.name}
								disabled={this.disabled}
								checked={this.checked}
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
							<span class={FormSwitchClass.indicator}></span>
							<slot name="label"></slot>
						</Fragment>,
					)}
				</div>
			</Host>
		)
	}

	private onClickHandler(e: Event) {
		e.stopPropagation()
	}

	private onFocusHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govFocus.emit({
			component: FormSwitchClass.root,
			checked: this.checked,
			value: this.value,
			originalEvent: e,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		e.stopPropagation()
		this.govBlur.emit({
			component: FormSwitchClass.root,
			checked: this.checked,
			value: this.value,
			originalEvent: e,
		})
	}

	private onChangeHandler(e: Event) {
		this.checked = (e.target as HTMLInputElement).checked
		e.stopPropagation()
		this.govChange.emit({
			component: FormSwitchClass.root,
			checked: this.checked,
			value: this.value,
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
		validateWcagRef(this.wcagDescribedBy, "wcag-described-by", FormSwitchClass.root)
		validateWcagRef(this.wcagLabelledBy, "wcag-labelled-by", FormSwitchClass.root)
		validateWcagLabelFor(this.identifier || this.checkboxId, this.wcagLabelledBy, FormSwitchClass.root)
	}
}
