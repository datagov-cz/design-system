import { Component, Element, h, Prop, State, Watch, Host, Method, Event, EventEmitter } from '@stencil/core'
import { govErrorLog } from '../../helpers/Log/gov.log'
import { validateProp } from '../../helpers/Validate/props'
import { StepperSizesType, StepperItemClass, StepperVariantType, StepperVariants } from './constants'
import { createID } from '../../utils/string.utils'
import { govHost, prepareClasses } from '../../helpers/Dom/template'
import { GovStepperItemChangeEvent } from './gov-stepper-item.d'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-stepper-item',
	styleUrl: 'gov-stepper-item.scss',
})
export class GovStepperItem {
	private h: GovHost
	private readonly triggerId: string
	private readonly contentId: string

	constructor() {
		this.h = govHost(this.host)
		this.triggerId = createID('GovStepperItem')
		this.contentId = createID('GovStepperContent')
	}

	@Element() readonly host: HTMLGovStepperItemElement
	@State() isExpandedState: boolean

	/**
	 * Style variation of the button.
	 */
	@Prop() readonly variant?: StepperVariantType = 'primary'
	/**
	 * Size of stepper
	 */
	@Prop() readonly size?: StepperSizesType = 'm'
	/**
	 * Custom stepper item identifier. Otherwise, it will be generated
	 */
	@Prop() readonly identifier: string
	/**
	 * Item name of the stepper
	 */
	@Prop() readonly label: string
	/**
	 * Item annotation of the stepper
	 */
	@Prop() readonly annotation: string
	/**
	 * Used to change the HMTL tag in the stepper trigger for correct semantic structure
	 */
	@Prop({ attribute: 'trigger-tag' }) readonly triggerTag: string = 'h3'
	/**
	 * Called when the accordion state changes
	 */
	@Event({ eventName: 'gov-change' }) govChange: EventEmitter<GovStepperItemChangeEvent>

	@Watch('label')
	validateLabel(newValue: string): void {
		if (!newValue) {
			govErrorLog(`[${StepperItemClass.root}]: Parameter label is required.`)
		}
	}

	@Watch('triggerTag')
	validateTriggerTag(newValue: string): void {
		const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']
		if (newValue) {
			if (!validTags.includes(newValue)) {
				govErrorLog(`[${StepperItemClass.root}]: Tag ${newValue} is not allowed.`)
			}
		}
	}

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(StepperVariants, newValue, StepperItemClass.root)
	}

	componentWillLoad(): void {
		this.validateLabel(this.label)
		this.validateVariant(this.variant)
		this.validateTriggerTag(this.triggerTag)
	}

	render() {
		const triggerId = this.identifier || this.triggerId
		const contentId = this.contentId
		const { label } = this
		const TriggerTag = this.triggerTag

		return (
			<Host class={prepareClasses([StepperItemClass.root, this.annotation && StepperItemClass.rootWithAnnot])} variant={this.variant}>
				<div id={triggerId} class={StepperItemClass.header} role="listitem">
					<TriggerTag class={StepperItemClass.title}>
						{this.h.hasSlot('prefix') && (
							<span class={StepperItemClass.prefix}>
								<slot name="prefix" />
							</span>
						)}
						<span class={StepperItemClass.name}>
							<span class={StepperItemClass.label}>{label}</span>
							{this.annotation && <span class={StepperItemClass.annot}>{this.annotation}</span>}
						</span>
					</TriggerTag>
				</div>

				{this.h.hasSlot('content') && (
					<div class={StepperItemClass.content} id={contentId} aria-labelledby={triggerId} role="tabpanel">
						<slot name="content" />
					</div>
				)}
			</Host>
		)
	}

	/**
	 * Returns the current state of the component
	 */
	@Method()
	async currentState(): Promise<boolean> {
		return this.isExpandedState
	}
}
