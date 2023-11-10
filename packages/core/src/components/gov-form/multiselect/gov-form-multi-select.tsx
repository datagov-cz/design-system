import {Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch} from '@stencil/core'
import {govForm} from '../../../helpers/Dom/form'
import {GovForm} from '../../../helpers/Dom/form.types'
import {govHost, toBoolAttr, toBoolAttrIfDefined} from '../../../helpers/Dom/template'
import {GovHost} from '../../../helpers/Dom/template.types'
import {canValidateWcagOnRender} from '../../../helpers/Dom/win'
import {validateProp} from '../../../helpers/Validate/props'
import {validateWcagLabelFor, validateWcagRef} from '../../../helpers/Validate/wcag'
import {Nullable} from '../../../types/interfaces'
import {createID, removeDiacritics} from '../../../utils/string.utils'
import {delay} from '../../../utils/utils'
import {FormAutocompleteEvent} from '../autocomplete/gov-form-autocomplete.types'
import {
	FormMultiSelectClass,
	FormMultiselectSizes,
	FormMultiselectSizesType,
	FormMultiselectVariants,
	FormMultiselectVariantType
} from './constants'
import {FormMultiselectEvent, GovFormMultiSelectItem} from './gov-form-multi-select.types'
import {hasOwnProperty} from "../../../utils/helpers.types";

@Component({
	tag: 'gov-form-multi-select',
	styleUrl: 'gov-form-multi-select.scss',
})
export class GovFormMultiSelect {
	private f: GovForm
	private readonly h: GovHost

	private selectRef?: HTMLSelectElement
	private autocompleteRef?: HTMLGovFormAutocompleteElement

	private readonly selectId: string
	private readonly listId: string

	constructor() {
		this.selectId = createID('GovSelect')
		this.listId = createID('GovMultiList')

		this.h = govHost(this.host)
		this.f = govForm(this.h)
	}

	@Element() host: HTMLGovFormSelectElement
	/**
	 * Custom select identifier.
	 */
	@Prop({attribute: 'identifier'}) readonly identifier: string
	/**
	 * Custom select placeholder.
	 */
	@Prop({attribute: 'placeholder'}) readonly placeholder: string
	/**
	 * Style variation of the form select.
	 */
	@Prop() readonly variant?: FormMultiselectVariantType
	/**
	 * Select’s size.
	 */
	@Prop() readonly size?: FormMultiselectSizesType = 'm'
	/**
	 * Name of the select.
	 */
	@Prop() readonly name: string
	/**
	 * Option to hide the list of selected items
	 */
	@Prop({attribute: 'hide-selected-list'}) readonly hideSelectedList: boolean = false
	/**
	 * Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them.
	 * When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors.
	 */
	@Prop() readonly required: boolean = false
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
	 * Indicates the entered value of child form element does conform to the format expected by the application.
	 */
	@Prop() readonly success: boolean
	/**
	 * Custom message for when there is a blank sheet
	 */
	@Prop({attribute: 'message-empty'}) readonly messageEmpty: string = 'Nebyly nalezeny žádné výsledky'
	/**
	 * Custom message for when data is loaded
	 */
	@Prop({attribute: 'message-loading'}) readonly messageLoading: string = 'Načítám...'
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
	@Event({eventName: 'gov-focus'}) govFocus: EventEmitter<FormMultiselectEvent>
	/**
	 * Emitted when the select loses focus.
	 */
	@Event({eventName: 'gov-blur'}) govBlur: EventEmitter<FormMultiselectEvent>
	/**
	 * Emitted when the select change value.
	 */
	@Event({eventName: 'gov-change'}) govChange: EventEmitter<FormMultiselectEvent>
	/**
	 * Emitted when an item is selected
	 */
	@Event({eventName: 'gov-select'}) govSelect: EventEmitter<FormMultiselectEvent>
	/**
	 * Emitted when an item is removed
	 */
	@Event({eventName: 'gov-remove'}) govRemove: EventEmitter<FormMultiselectEvent>

	@State() focused: boolean
	@State() value: string
	@State() selectedOptions: GovFormMultiSelectItem[] = []
	@State() options: GovFormMultiSelectItem[] = []

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(FormMultiselectVariants, newValue, FormMultiSelectClass.root)
	}

	@Watch('size')
	validateSize(newValue: string): void {
		validateProp(FormMultiselectSizes, newValue, FormMultiSelectClass.root)
	}

	@Watch('disabled')
	@Watch('invalid')
	@Watch('success')
	@Watch('size')
	watchDisabled(): void {
		this.passControlAttrs()
	}

	private passControlAttrs() {
		this.f.passAttrToControl('size', this.size)
		this.f.passAttrToControl('disabled', toBoolAttr(this.disabled))
		this.f.passAttrToControl('invalid', toBoolAttr(this.invalid))
		this.f.passAttrToControl('success', toBoolAttr(this.success))
	}

	componentWillLoad() {
		this.validateVariant(this.variant)
		this.validateSize(this.size)
		this.watchDisabled()
	}

	private getAvailableOptions(): GovFormMultiSelectItem[] {
		if (Array.isArray(this.options) && this.options.length) {
			return this.options.filter((option) => {
				const isSelected = this.selectedOptions.findIndex((selected) => selected.value === option.value)
				return (isSelected !== -1 || option?.disabled) ? false : true
			})
		}
		return Array.from(this.selectRef.querySelectorAll('option'))
			.filter((option: HTMLOptionElement) => !(option.disabled || option.selected))
			.map((option: HTMLOptionElement) => ({name: option.textContent, value: option.value}))
	}

	private initAutocomplete() {
		this.autocompleteRef.addEventListener('gov-select', this.onSelectHandler.bind(this))
		this.autocompleteRef.addEventListener('gov-input', this.onInputHandler.bind(this))
		this.autocompleteRef.addEventListener('gov-focus', this.onFocusHandler.bind(this))
		this.autocompleteRef.addEventListener('gov-blur', this.onBlurHandler.bind(this))
		this.autocompleteRef
			.setSearchCallback(value => {
				return new Promise(resolve => {
					const data = this.getAvailableOptions()
					if (String(value).length === 0) {
						return resolve(data)
					}
					resolve(
						data.filter(({name}) => {
							if (!name) return false
							return removeDiacritics(name).toLowerCase().indexOf(removeDiacritics(value).toLowerCase()) > -1
						})
					)
				})
			})
			.then()
	}

	private getOptionIndex(value: GovFormMultiSelectItem): number {
		return this.selectedOptions.findIndex(option => option.value === value.value && option.name === value.name)
	}

	private getOptionElement(value: GovFormMultiSelectItem): Nullable<HTMLOptionElement> {
		return this.selectRef.querySelector('option[value="' + value.value + '"]') as HTMLOptionElement
	}

	private selectOption(newOption: GovFormMultiSelectItem, notify = true) {
		const index = this.getOptionIndex(newOption)
		if (index === -1) {
			this.selectedOptions = [...this.selectedOptions, newOption]
			if (notify) {
				this.govChange.emit({
					component: FormMultiSelectClass.root,
					value: this.selectedOptions,
				})
				this.govSelect.emit({
					component: FormMultiSelectClass.root,
					value: this.selectedOptions,
				})
			}
			const option = this.getOptionElement(newOption)
			if (option) {
				option.selected = true
			}
		}
	}

	private removeOption(removeOption: GovFormMultiSelectItem, notify = true) {
		const index = this.getOptionIndex(removeOption)
		if (index !== -1) {
			this.selectedOptions.splice(index, 1)
			this.selectedOptions = [...this.selectedOptions]
			if(notify) {
				this.govChange.emit({
					component: FormMultiSelectClass.root,
					value: this.selectedOptions,
				})
				this.govRemove.emit({
					component: FormMultiSelectClass.root,
					value: this.selectedOptions,
				})
			}
			const option = this.getOptionElement(removeOption)
			if (option) {
				option.selected = false
			}
		}
	}

	async componentDidLoad() {
		this.initAutocomplete()
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	async componentDidRender() {
		this.selectRef.querySelectorAll('option').forEach((option: HTMLOptionElement) => {
			if (option.selected) {
				this.selectOption({
					name: option.textContent,
					value: option.value,
				}, false)
			}
		})
	}

	render() {
		return (
			<Host class={FormMultiSelectClass.root} size={this.size} variant={this.variant}>
				<div class={FormMultiSelectClass.wrap}>
					<div class="element">
						<gov-form-autocomplete
							value={this.value}
							disabled={this.disabled}
							identifier={this.identifier || this.selectId}
							required={false}
							size={this.size}
							variant={this.variant}
							placeholder={this.placeholder}
							message-empty={this.messageEmpty}
							message-loading={this.messageLoading}
							ref={el => (this.autocompleteRef = el as HTMLGovFormAutocompleteElement)}
							minlength={0}
							wcagDescribedBy={this.wcagDescribedBy}
							wcagLabelledBy={this.wcagLabelledBy}
							wcagOwns={this.listId}
						/>
						<gov-icon slot="right-icon" class="icon-arrow" name="chevron-down"></gov-icon>
						{this.h.hasSlot('right-icon') && !(this.success || this.invalid) && <slot name="right-icon"/>}
						{this.success && <gov-icon slot="right-icon" class="icon-validation" name="check-lg"></gov-icon>}
						{this.invalid && <gov-icon slot="right-icon" class="icon-validation" name="exclamation-lg"></gov-icon>}
						<select
							hidden
							aria-hidden={toBoolAttr(true)}
							multiple
							required={this.required}
							name={this.name}
							disabled={this.disabled}
							ref={el => (this.selectRef = el as HTMLSelectElement)}
							aria-disabled={toBoolAttrIfDefined(this.disabled)}
							aria-required={toBoolAttrIfDefined(this.required)}
							aria-invalid={toBoolAttrIfDefined(this.invalid)}
							aria-describedby={this.wcagDescribedBy}
							aria-labelledby={this.wcagLabelledBy}
							aria-owns={this.wcagOwns}
						>
							<slot></slot>
							{this.options.map((option) => {
								return (<option value={option.value} selected={option.value === this.value}
																disabled={option?.disabled}>{option.name}</option>)
							})}
						</select>
					</div>
				</div>
				{this.hideSelectedList === false ? (
					<ul role="listbox" id={this.listId} class={FormMultiSelectClass.list}>
						{this.selectedOptions.map(option => {
							return (
								<li class={FormMultiSelectClass.item} role="option">
									{option.name}
									<gov-button
										wcagLabel={'Odebrat vybranou položku ' + option.name}
										variant="primary"
										type="base"
										size="s"
										on-gov-click={() => this.onTagRemove(option)}
									>
										<gov-icon name="x-lg"></gov-icon>
									</gov-button>
								</li>
							)
						})}
					</ul>
				) : null}
			</Host>
		)
	}

	private onFocusHandler(e: FocusEvent) {
		e.stopPropagation()
		this.focused = true
		this.govFocus.emit({
			component: FormMultiSelectClass.root,
			originalEvent: e,
			value: this.selectedOptions,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		e.stopPropagation()
		e.stopPropagation()
		this.focused = false
		this.govBlur.emit({
			component: FormMultiSelectClass.root,
			originalEvent: e,
			value: this.selectedOptions,
		})
	}

	private onInputHandler(e: CustomEvent<FormAutocompleteEvent>) {
		this.value = e.detail.value
		e.stopPropagation()
	}

	private onSelectHandler(e: CustomEvent<FormAutocompleteEvent>) {
		e.stopPropagation()
		const value = e.detail.selected
		this.selectOption(value as GovFormMultiSelectItem)
		this.value = ''
		this.autocompleteRef.clearValue()
		this.autocompleteRef.focus()
	}

	private onTagRemove(removeOption: GovFormMultiSelectItem) {
		this.removeOption(removeOption)
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
	 * Returns a list of selected items
	 */
	@Method()
	async getSelectedOptions(): Promise<GovFormMultiSelectItem[]> {
		return this.selectedOptions
	}

	/**
	 * Setting a list of options to choose from
	 */
	@Method()
	async setOptions(options: GovFormMultiSelectItem[]): Promise<void> {
		if (Array.isArray(options)) {
			this.options = options
		}
	}

	/**
	 * Setting the list of selected options
	 */
	@Method()
	async setSelectedOptions(options: GovFormMultiSelectItem[]): Promise<void> {
		if (Array.isArray(options)) {
			this.selectedOptions = options
		}
	}

	/**
	 * To remove an option from the selected list
	 */
	@Method()
	async removeSelectedOption(option: GovFormMultiSelectItem, notify = false): Promise<void> {
		if (typeof option === 'object' && hasOwnProperty(option, 'name') && hasOwnProperty(option, 'value')) {
			this.removeOption(option, notify)
		}
	}

	/**
	 * Returns an instance of the native html select element
	 */
	@Method()
	async setSelectedOption(option: GovFormMultiSelectItem, notify = false): Promise<void> {
		if (typeof option === 'object' && hasOwnProperty(option, 'name') && hasOwnProperty(option, 'value')) {
			this.selectOption(option, notify)
		}
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagRef(this.wcagDescribedBy, 'wcag-described-by', FormMultiSelectClass.root)
		validateWcagRef(this.wcagLabelledBy, 'wcag-labelled-by', FormMultiSelectClass.root)
		validateWcagRef(this.wcagOwns, 'wcag-owns', FormMultiSelectClass.root)
		validateWcagLabelFor(this.identifier || this.selectId, this.wcagLabelledBy, FormMultiSelectClass.root)
	}
}
