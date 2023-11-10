import {Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch} from '@stencil/core'
import {govForm} from '../../../helpers/Dom/form'
import {GovForm} from '../../../helpers/Dom/form.types'
import {govHost, toBoolAttr, toBoolAttrIfDefined} from '../../../helpers/Dom/template'
import {GovHost} from '../../../helpers/Dom/template.types'
import {canValidateWcagOnRender} from '../../../helpers/Dom/win'
import {validateProp} from '../../../helpers/Validate/props'
import {validateWcagLabelFor, validateWcagRef} from '../../../helpers/Validate/wcag'
import {createID} from '../../../utils/string.utils'
import {delay} from '../../../utils/utils'
import {
	FormSelectClass,
	FormSelectSizes,
	FormSelectSizesType,
	FormSelectVariants,
	FormSelectVariantType
} from './constants'
import {FormSelectEvent, FormSelectOption} from './gov-form-select.types'

@Component({
	tag: 'gov-form-select',
	styleUrl: 'gov-form-select.scss',
})
export class GovFormSelect {
	private f: GovForm
	private readonly h: GovHost
	private selectRef?: HTMLSelectElement

	private readonly selectId: string

	constructor() {
		this.h = govHost(this.host)
		this.f = govForm(this.h)
		this.selectId = createID('GovSelect')
	}

	@Element() host: HTMLGovFormSelectElement
	/**
	 * Value of select
	 */
	@Prop({reflect: true, mutable: true}) value: string
	/**
	 * Custom select identifier.
	 */
	@Prop({attribute: 'identifier'}) readonly identifier: string
	/**
	 * Style variation of the form select.
	 */
	@Prop() readonly variant?: FormSelectVariantType = 'secondary'
	/**
	 * Select’s size.
	 */
	@Prop() readonly size?: FormSelectSizesType = 'm'
	/**
	 * Name of the select.
	 */
	@Prop() readonly name: string
	/**
	 * Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them.
	 * When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors.
	 */
	@Prop() readonly required: boolean = false
	/**
	 * Indicates the entered value of child form element does conform to the format expected by the application.
	 */
	@Prop() readonly success: boolean
	/**
	 * Makes the select component disabled.
	 * This prevents users from being able to interact with the select, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 */
	@Prop() readonly invalid: boolean
	/**
	 * Indicates the id of a related component’s visually focused element.
	 */
	@Prop({attribute: 'wcag-active-descendant'}) readonly wcagActiveDescendant: string
	/**
	 * Use this prop to add an aria-controls attribute. Use the attribute to indicate the id of a component controlled by this component.
	 */
	@Prop({attribute: 'wcag-controls'}) readonly wcagControls: string
	/**
	 * Indicates the id of a component that describes the input.
	 */
	@Prop({attribute: 'wcag-described-by'}) readonly wcagDescribedBy: string
	/**
	 * Indicates the id of a component that labels the input.
	 */
	@Prop({attribute: 'wcag-labelled-by'}) readonly wcagLabelledBy: string
	/**
	 * Indicates the id of a component that describes the input.
	 */
	@Prop({attribute: 'wcag-owns'}) readonly wcagOwns: string
	/**
	 * Emitted when the select has focus.
	 */
	@Event({eventName: 'gov-focus'}) govFocus: EventEmitter<FormSelectEvent>
	/**
	 * Emitted when the select loses focus.
	 */
	@Event({eventName: 'gov-blur'}) govBlur: EventEmitter<FormSelectEvent>
	/**
	 * Emitted when the select change value.
	 */
	@Event({eventName: 'gov-change'}) govChange: EventEmitter<FormSelectEvent>
	@State() focused: boolean
	@State() options: FormSelectOption[] = []

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(FormSelectVariants, newValue, FormSelectClass.root)
	}

	@Watch('size')
	validateSize(newValue: string): void {
		validateProp(FormSelectSizes, newValue, FormSelectClass.root)
	}

	@Watch('disabled')
	@Watch('invalid')
	@Watch('size')
	watchDisabled(): void {
		this.passControlAttrs()
	}

	@Watch('value')
	watchValue(): void {
		this.markSelectedValue()
	}

	private passControlAttrs() {
		this.f.passAttrToControl('size', this.size)
		this.f.passAttrToControl('disabled', toBoolAttr(this.disabled))
		this.f.passAttrToControl('invalid', toBoolAttr(this.invalid))
		this.f.passAttrToControl('type', 'select')
	}

	componentWillLoad() {
		this.validateVariant(this.variant)
		this.validateSize(this.size)

		this.markSelectedValue()
		this.passControlAttrs()
		this.f.passAttrToLabel('required', String(this.required))
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	private markSelectedValue() {
		this.host.querySelectorAll('option').forEach((option: HTMLOptionElement) => {
			if (option.value === this.value) {
				option.setAttribute('selected', 'selected')
			} else {
				option.removeAttribute('selected')
			}
		})
	}

	render() {
		return (
			<Host class={FormSelectClass.root} size={this.size} variant={this.variant}>
				{this.h.hasSlot('prefix') && <slot name="prefix"></slot>}
				<span class="element">
					<gov-icon slot="right-icon" name="chevron-down" class="icon-arrow"></gov-icon>
					{this.h.hasSlot('right-icon') && !(this.success || this.invalid) && <slot name="right-icon"/>}
					{this.success && <gov-icon slot="right-icon" class="icon-validation" name="check-lg"></gov-icon>}
					{this.invalid && <gov-icon slot="right-icon" class="icon-validation" name="exclamation-lg"></gov-icon>}
					<select
						id={this.identifier || this.selectId}
						onFocus={this.onFocusHandler.bind(this)}
						onChange={this.onChangeHandler.bind(this)}
						onBlur={this.onBlurHandler.bind(this)}
						required={this.required}
						name={this.name}
						disabled={this.disabled}
						ref={el => (this.selectRef = el as HTMLSelectElement)}
						aria-disabled={toBoolAttrIfDefined(this.disabled)}
						aria-activedescendant={this.wcagActiveDescendant}
						aria-controls={this.wcagControls}
						aria-required={toBoolAttrIfDefined(this.required)}
						aria-invalid={toBoolAttrIfDefined(this.invalid)}
						aria-describedby={this.wcagDescribedBy}
						aria-labelledby={this.wcagLabelledBy}
						aria-owns={this.wcagOwns}
					>
						<slot></slot>
						{this.options.map((option) => {
							return (<option value={option.value} selected={option.value === this.value}
															disabled={option?.disabled}>{option.label}</option>)
						})}
					</select>
				</span>
				{this.h.hasSlot('sufix') && <slot name="sufix"></slot>}
			</Host>
		)
	}

	private onFocusHandler(e: FocusEvent) {
		this.focused = true
		this.govFocus.emit({
			component: FormSelectClass.root,
			originalEvent: e,
			value: this.value,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		this.focused = false
		this.govBlur.emit({
			component: FormSelectClass.root,
			originalEvent: e,
			value: this.value,
		})
	}

	private onChangeHandler(e: Event) {
		this.value = (e.target as HTMLSelectElement).value
		e.stopPropagation()
		this.govChange.emit({
			component: FormSelectClass.root,
			originalEvent: e,
			value: this.value,
		})
	}

	/**
	 * Returns the current state of the component
	 */
	@Method()
	async setFocus(options?: FocusOptions): Promise<void> {
		return this.selectRef.focus(options)
	}

	/**
	 * Sets the ordered value of the element
	 */
	@Method()
	async setValue(value: string): Promise<void> {
		this.value = value
	}

	/**
	 * Returns an instance of the native html select element
	 */
	@Method()
	async getRef(): Promise<HTMLSelectElement> {
		return this.selectRef
	}

	/**
	 * Sets the selection options
	 */
	@Method()
	async setOptions(options: FormSelectOption[]): Promise<void> {
		if (Array.isArray(options)) {
			this.options = options
		}
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagRef(this.wcagActiveDescendant, 'wcag-active-descendant', FormSelectClass.root)
		validateWcagRef(this.wcagControls, 'wcag-controls', FormSelectClass.root)
		validateWcagRef(this.wcagDescribedBy, 'wcag-described-by', FormSelectClass.root)
		validateWcagRef(this.wcagOwns, 'wcag-owns', FormSelectClass.root)
		validateWcagLabelFor(this.identifier || this.selectId, this.wcagLabelledBy, FormSelectClass.root)
	}
}
