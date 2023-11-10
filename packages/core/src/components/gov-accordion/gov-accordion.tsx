import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core'
import { validateProp } from '../../helpers/Validate/props'
import { AccordionClass, AccordionSizes, AccordionSizeType, AccordionItemClass, AccordionVariantType } from './constants'
import { Variants } from '../../core/constants/variants'
import { validateWcagLabel } from '../../helpers/Validate/wcag'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { AccordionEvent, AccordionItemEvent } from "./gov-accordion.types"

@Component({
	tag: 'gov-accordion',
	styleUrl: 'gov-accordion.scss',
})
export class GovAccordion {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovAccordionElement
	/**
	 * Accordion’s size.
	 */
	@Prop() readonly size?: AccordionSizeType = 'm'
	/**
	 * Style variation of the button.
	 */
	@Prop() readonly variant?: AccordionVariantType = 'primary'
	/**
	 * Accordion item underline
	 */
	@Prop({ attribute: 'no-border' }) readonly noBorder: boolean = false
	/**
	 * Adds accessible label for the accordion that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-label' }) readonly wcagLabel: string
	/**
	 * String of id's that indicate alternative labels elements
	 */
	@Prop({ attribute: 'wcag-labelled-by' }) readonly wcagLabelledBy: string
	/**
	 * Called when the accordion state changes
	 */
	@Event({ eventName: 'gov-change' }) govChange: EventEmitter<AccordionEvent>

	@Watch('size')
	validateSize(newValue: string): void {
		validateProp(AccordionSizes, newValue, AccordionClass.root)
	}

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(Variants, newValue, AccordionClass.root)
	}

	componentWillLoad(): void {
		this.validateSize(this.size)
		this.validateVariant(this.variant)
	}

	componentDidLoad() {
		this.host.querySelectorAll(AccordionItemClass.root).forEach((child: HTMLGovAccordionItemElement) => {
			child.addEventListener('gov-change', (e: CustomEvent<AccordionItemEvent>) => {
				e.stopPropagation()
				this.govChange.emit({
					component: AccordionClass.root,
					open: e.detail.open,
					ref: e.detail.ref
				})
			})
		})
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		return (
			<Host
				class={this.h.classes(AccordionClass.root)}
				size={this.size}
				variant={this.variant}
				role={'list'}
				arial-label={this.wcagLabel}
				arial-labelledby={this.wcagLabelledBy}>
				<slot />
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, AccordionClass.root)
	}
}
