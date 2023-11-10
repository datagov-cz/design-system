import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core'
import { toBoolAttr } from '../../../helpers/Dom/template'
import { validateProp } from '../../../helpers/Validate/props'
import { Nullable } from '../../../types/interfaces'
import { createID } from '../../../utils/string.utils'
import { delay, has, throttle } from '../../../utils/utils'
import { FormInputEvent } from '../input/gov-form-input.types'
import { FormAutocompleteClass, FormAutocompleteSizes, FormAutocompleteVariants, SizesType, VariantType } from './constants'
import { FormAutocompleteEvent, GovFormAutocompleteItem } from './gov-form-autocomplete.types'

@Component({
	tag: 'gov-form-autocomplete',
	styleUrl: 'gov-form-autocomplete.scss',
})
export class GovFormAutocomplete {
	private inputRef?: HTMLGovFormInputElement
	private listRef?: HTMLUListElement
	private readonly listBoxId: string
	private searchCallback: (value: string) => Promise<GovFormAutocompleteItem[]>
	private templateResolver: (item: GovFormAutocompleteItem, selected: boolean) => string = item => item[this.nameKey]

	constructor() {
		this.listBoxId = createID('GovListBox')
	}

	@Element() host: HTMLGovFormInputElement
	/**
	 * Value of input
	 */
	@Prop({ reflect: true, mutable: true }) value = ''
	/**
	 * Custom input identifier.
	 */
	@Prop({ attribute: 'identifier' }) readonly identifier: string
	/**
	 * Style variation of the form input.
	 */
	@Prop() readonly variant?: VariantType
	/**
	 * Indicates the entered value of child form element does conform to the format expected by the application.
	 */
	@Prop() readonly success: boolean
	/**
	 * Input’s size.
	 */
	@Prop() readonly size?: SizesType = 'm'
	/**
	 * Main key name in the object
	 */
	@Prop() readonly nameKey: string = 'name'
	/**
	 * Name of the input.
	 */
	@Prop() readonly name: string
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
	 * Indicates the entered value does not conform to the format expected by the application.
	 */
	@Prop() readonly invalid: boolean
	/**
	 * Minimum length (number of characters) of value
	 */
	@Prop() readonly minlength: number = 3
	/**
	 * Maximum length (number of characters) of value
	 */
	@Prop() readonly maxlength: number
	/**
	 * Custom message for when there is a blank sheet
	 */
	@Prop({ attribute: 'message-empty' }) readonly messageEmpty: string = 'Nebyly nalezeny žádné výsledky'
	/**
	 * Custom message for when data is loaded
	 */
	@Prop({ attribute: 'message-loading' }) readonly messageLoading: string = 'Načítám...'
	/**
	 * Indicates the id of a component that describes the input.
	 */
	@Prop({ attribute: 'wcag-described-by' }) readonly wcagDescribedBy: string
	/**
	 * Indicates the id of a component that labels the input.
	 */
	@Prop({ attribute: 'wcag-labelled-by' }) readonly wcagLabelledBy: string
	/**
	 * Same as original parameter
	 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns
	 */
	@Prop({ attribute: 'wcag-owns' }) readonly wcagOwns: string
	/**
	 * Emitted when the input has focus.
	 */
	@Event({ eventName: 'gov-focus' }) govFocus: EventEmitter<FormAutocompleteEvent>
	/**
	 * Emitted when the input loses focus.
	 */
	@Event({ eventName: 'gov-blur' }) govBlur: EventEmitter<FormAutocompleteEvent>
	/**
	 * Emitted when the input change value.
	 */
	@Event({ eventName: 'gov-input' }) govInput: EventEmitter<FormAutocompleteEvent>
	/**
	 * Emitted when the input change value.
	 */
	@Event({ eventName: 'gov-select' }) govSelect: EventEmitter<FormAutocompleteEvent>
	@State() focused: boolean
	@State() processing = false
	@State() arrowCounter = -1
	@State() list: GovFormAutocompleteItem[] = []

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(FormAutocompleteVariants, newValue, FormAutocompleteClass.root)
	}

	@Watch('size')
	validateSize(newValue: string): void {
		validateProp(FormAutocompleteSizes, newValue, FormAutocompleteClass.root)
	}

	private onArrowUp() {
		if (this.arrowCounter > 0) {
			this.arrowCounter = this.arrowCounter - 1
			this.moveToView().finally()
		}
	}

	private onArrowDown() {
		if (this.arrowCounter < this.list.length - 1) {
			this.arrowCounter = this.arrowCounter + 1
			this.moveToView().finally()
		}
	}

	private async moveToView() {
		await delay(200)
		const heightOfList = this.listRef.offsetHeight
		const selected = this.listRef.querySelector('li[aria-selected="true"]') as HTMLUListElement
		if (selected && heightOfList) {
			const offsetTop = selected.offsetTop
			this.listRef.scrollTo({ top: offsetTop, behavior: 'smooth' })
		}
	}

	private doSearch() {
		if (Number.isInteger(this.minlength) && this.isValueAccepted === false && this.minlength) {
			this.list = []
			this.arrowCounter = -1
			this.processing = false
			return
		}
		if (this.searchCallback) {
			this.processing = true
			this.searchCallback(this.value)
				.then(response => (this.list = response))
				.catch(() => (this.list = []))
				.finally(() => {
					this.arrowCounter = -1
					this.processing = false
				})
		}
	}

	get isValueAccepted() {
		if (typeof this.value === 'string') {
			return this.value.length >= this.minlength
		} else {
			return false
		}
	}

	componentWillLoad() {
		this.validateVariant(this.variant)
		this.validateSize(this.size)
	}

	render() {
		return (
			<Host class={FormAutocompleteClass.root} size={this.size} variant={this.variant}>
				<gov-form-input
					placeholder={this.placeholder}
					name={this.name}
					disabled={this.disabled}
					readonly={this.readonly}
					autocomplete={false}
					size={this.size}
					variant={this.variant}
					required={this.required}
					invalid={this.invalid}
					success={this.success}
					role={'searchbox'}
					value={this.value}
					minlength={this.minlength}
					maxlength={this.maxlength}
					on-gov-input={throttle(this.onInputHandler.bind(this), 200)}
					on-gov-keyup={this.onKeyUpHandler.bind(this)}
					on-gov-keydown={this.onKeyDownHandler.bind(this)}
					on-gov-focus={this.onFocusHandler.bind(this)}
					on-gov-blur={this.onBlurHandler.bind(this)}
					wcagAutocomplete={'list'}
					wcagDescribedBy={this.wcagDescribedBy}
					wcagLabelledBy={this.wcagLabelledBy}
					wcagOwns={[this.listBoxId, this.wcagOwns].join(' ')}
					wcagExpanded={this.list.length && this.focused}
					ref={el => (this.inputRef = el as HTMLGovFormInputElement)}
				>
					<slot slot="right-icon" name="right-icon" />
				</gov-form-input>
				<ul class={FormAutocompleteClass.list} role={'listbox'} id={this.listBoxId} ref={el => (this.listRef = el as HTMLUListElement)}>
					{this.focused && this.list.length === 0 && this.processing === false && this.isValueAccepted && this.messageEmpty ? (
						<li class={FormAutocompleteClass.empty}>{this.messageEmpty}</li>
					) : null}
					{this.focused && this.processing === true && this.isValueAccepted ? (
						<li class={FormAutocompleteClass.loading}>
							<gov-icon name="loader" class="gov-spin-animation"></gov-icon>
							&nbsp;{this.messageLoading}
						</li>
					) : null}
					{this.list.map((item, index) => {
						const isSelected = this.arrowCounter === index
						return (
							<li
								class={FormAutocompleteClass.item}
								innerHTML={this.templateResolver(item, isSelected)}
								role={'option'}
								aria-posinset={index}
								tabindex={isSelected ? 0 : -1}
								aria-setsize={this.list.length}
								onClick={(e: PointerEvent) => this.onSelectHandler(e, index)}
								aria-selected={toBoolAttr(isSelected)}
							/>
						)
					})}
				</ul>
			</Host>
		)
	}

	private onFocusHandler(e: FocusEvent) {
		this.focused = true
		this.arrowCounter = -1
		if ((this.value || this.minlength === 0) && this.searchCallback) {
			this.doSearch()
		}
		e.stopPropagation()
		this.govFocus.emit({
			originalEvent: e,
			component: FormAutocompleteClass.root,
			value: this.value,
			selected: null,
		})
	}

	private onBlurHandler(e: FocusEvent) {
		this.focused = false
		setTimeout(() => (this.list = []), 200)
		this.arrowCounter = -1
		e.stopPropagation()
		this.govBlur.emit({
			originalEvent: e,
			component: FormAutocompleteClass.root,
			value: this.value,
			selected: null,
		})
	}

	private onInputHandler(e: InputEvent) {
		this.value = (e.target as HTMLGovFormInputElement).value
		e.stopPropagation()
		this.govInput.emit({
			originalEvent: e,
			component: FormAutocompleteClass.root,
			value: this.value,
			selected: null,
		})
		this.doSearch()
	}

	private onSelectHandler(e: PointerEvent | CustomEvent, index = -1) {
		let selected: Nullable<GovFormAutocompleteItem> = null
		if (index > -1) {
			selected = this.list[index]
		} else if (has(this.arrowCounter, this.list)) {
			selected = this.list[this.arrowCounter]
		}
		if (selected) {
			this.govSelect.emit({
				component: FormAutocompleteClass.root,
				value: this.value,
				selected: selected,
				originalEvent: e,
			})
			this.list = []
			if (has(this.nameKey, selected) && typeof selected[this.nameKey] === 'string') {
				this.value = selected[this.nameKey]
			}
		}
	}

	private onKeyUpHandler(e: CustomEvent) {
		const event = (e.detail as FormInputEvent).originalEvent as KeyboardEvent
		e.stopPropagation()
		event.stopPropagation()
		if (event.keyCode === 38) this.onArrowUp()
		else if (event.keyCode === 40) this.onArrowDown()
		else if (event.keyCode === 13) {
			e.preventDefault()
			event.preventDefault()
			this.onSelectHandler(e)
		}
	}

	private onKeyDownHandler(e: CustomEvent) {
		const event = (e.detail as FormInputEvent).originalEvent as KeyboardEvent
		e.stopPropagation()
		event.stopPropagation()
		if (event.keyCode === 13) {
			e.preventDefault()
			event.preventDefault()
		}
	}

	/**
	 * Returns the current state of the component
	 */
	@Method()
	async setFocus(options?: FocusOptions): Promise<void> {
		return this.inputRef.focus(options)
	}

	/**
	 * Set options for list
	 */
	@Method()
	async setOptions(options: GovFormAutocompleteItem[]): Promise<void> {
		this.list = Array.isArray(options) ? options : []
		this.arrowCounter = -1
	}

	/**
	 * Clears whisperer value
	 */
	@Method()
	async clearValue(): Promise<void> {
		this.value = ''
		this.inputRef.value = ''

		await this.inputRef.clearValue()
	}

	/**
	 * Clears whisperer value
	 */
	@Method()
	async setProcessing(status: boolean): Promise<void> {
		this.processing = status
	}

	/**
	 * Set a custom asynchronous function for the whisperer
	 */
	@Method()
	async setSearchCallback(callback: (value: string) => Promise<any>) {
		this.searchCallback = callback
	}

	/**
	 * Setting a custom whisper result template
	 * @param callback
	 */
	@Method()
	async setTemplateResolver(callback: (item: GovFormAutocompleteItem) => string) {
		this.templateResolver = callback
	}
}
