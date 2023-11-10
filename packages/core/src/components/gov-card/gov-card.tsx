import { Component, Element, h, Host, Prop, Watch, State, Method, Event, EventEmitter } from '@stencil/core'
import { CardClass } from './constants'
import { govHost, booleanString } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { createID } from '../../utils/string.utils'
import { govErrorLog } from '../../helpers/Log/gov.log'
import { validateWcagLabel } from '../../helpers/Validate/wcag'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'
import { GovCardChangeEvent } from './interfaces'

@Component({
	tag: 'gov-card',
	styleUrl: 'gov-card.scss',
})
export class GovCard {
	private h: GovHost
	private readonly headlineId: string
	private readonly contentId: string

	constructor() {
		this.h = govHost(this.host)
		this.headlineId = createID('GovCardHeadline')
		this.contentId = createID('GovCardContent')
	}

	@Element() host: HTMLGovCardElement

	/**
	 * Style variation of the card.
	 */
	@Prop() readonly promotion: boolean = false
	/**
	 * Item label of the card
	 */
	@Prop() readonly label: string
	/**
	 * Defines wether the card can be collapsible
	 */
	@Prop() readonly collapsible: boolean = false
	/**
	 * Defines whether the card is open or closed by button
	 */
	@Prop() readonly expanded: boolean = false
	/**
	 * Used to change the HMTL tag in the card headline for correct semantic structure
	 */
	@Prop({ attribute: 'headline-tag' }) readonly headlineTag: string = 'h3'
	/**
	 * Adds accessible label for the collapsible button that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-trigger-label' }) wcagTriggerLabel: string
	/**
	 * A string of identifiers that indicate alternative label elements for collapsible card
	 */
	@Prop({ attribute: 'wcag-trigger-labelled-by' }) wcagTriggerLabelledBy: string
	/**
	 * Called when the card toggle state changes
	 */
	@Event({ eventName: 'gov-toggle' }) govToggle: EventEmitter<GovCardChangeEvent>
	@State() isExpanded: boolean

	@Watch('headlineTag')
	validateHeadlineTag(newValue: string): void {
		const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']
		if (newValue) {
			if (!validTags.includes(newValue)) {
				govErrorLog(`[${CardClass.root}]: Tag ${newValue} is not allowed.`)
			}
		}
	}

	componentWillLoad(): void {
		this.isExpanded = this.label ? this.expanded : true
		this.validateHeadlineTag(this.headlineTag)
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	private emmitChange(): void {
		this.govToggle.emit({ open: this.isExpanded, element: this.host })
	}

	render() {
		const HeadlineTag = this.headlineTag

		return (
			<Host class={this.h.classes(CardClass.root)} is-expanded={this.isExpanded} collapsible={booleanString(this.collapsible)} promotion={this.promotion}>
				{this.label && this.collapsible ? (
					<button
						id={this.headlineId}
						class={CardClass.header}
						aria-label={this.wcagTriggerLabel}
						aria-labelledby={this.wcagTriggerLabelledBy}
						aria-expanded={booleanString(this.isExpanded)}
						aria-controls={this.contentId}
						onClick={this.onClickHandler.bind(this)}
					>
						<HeadlineTag class={CardClass.title}>{this.label}</HeadlineTag>
						<gov-icon class={CardClass.arrow} name="chevron-down"></gov-icon>
					</button>
				) : null}

				{this.label && !this.collapsible ? (
					<div class={CardClass.header}>
						<HeadlineTag class={CardClass.title}>{this.label}</HeadlineTag>
					</div>
				) : null}

				<div
					class={CardClass.inner}
					id={this.contentId}
					aria-hidden={this.collapsible ? booleanString(!this.isExpanded) : undefined}
					hidden={this.collapsible ? !this.isExpanded : undefined}
					aria-labelledby={this.collapsible ? this.headlineId : undefined}
				>
					{this.h.hasSlot('img') && (
						<p class={CardClass.img}>
							<slot name="img" />
						</p>
					)}

					<div class={CardClass.main}>
						{this.h.hasSlot('icon') && this.promotion && (
							<div class={CardClass.icon}>
								<slot name="icon" />
							</div>
						)}

						<div class={CardClass.content}>
							<slot />
						</div>

						{this.h.hasSlot('btn') && this.promotion && (
							<div class={CardClass.btns}>
								<slot name="btn" />
							</div>
						)}
					</div>

					{this.h.hasSlot('footer') && (
						<div class={CardClass.footer}>
							<slot name="footer" />
						</div>
					)}
				</div>
			</Host>
		)
	}

	private onClickHandler(e) {
		e.stopPropagation()
		if (this.collapsible) {
			this.isExpanded = !this.isExpanded
			this.emmitChange()
		}
	}

	/**
	 * Open the card if it is collapsible
	 */
	@Method()
	async open(): Promise<void> {
		if (this.collapsible) {
			this.isExpanded = true
			this.emmitChange()
		}
	}

	/**
	 * Close the card if it is collapsible
	 */
	@Method()
	async close(): Promise<void> {
		if (this.collapsible) {
			this.isExpanded = false
			this.emmitChange()
		}
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		if (this.collapsible) {
			validateWcagLabel(this.wcagTriggerLabel, this.wcagTriggerLabelledBy, CardClass.root)
		}
	}
}
