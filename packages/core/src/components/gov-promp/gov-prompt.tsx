import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core'
import { govHost, toBoolAttr } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { govErrorLog } from '../../helpers/Log/gov.log'
import { validateWcagRef } from '../../helpers/Validate/wcag'
import { Nullable } from '../../types/interfaces'
import { createID } from '../../utils/string.utils'
import { delay } from '../../utils/utils'
import { ModalClass } from '../gov-modal/constants'

@Component({
	tag: 'gov-prompt',
	styleUrl: 'gov-prompt.scss',
})
export class GovPrompt {
	private h: GovHost
	private readonly labelId: string
	private readonly contentId: string

	constructor() {
		this.h = govHost(this.host)
		this.labelId = createID('GovPromptLabel')
		this.contentId = createID('GovPromptContent')
	}

	@Element() host: HTMLGovPromptElement
	/**
	 * Attribute for modal window display
	 */
	@Prop({ mutable: true }) open = false
	/**
	 * Title of modal window
	 */
	@Prop() label: string
	/**
	 * Role of modal
	 */
	@Prop({ attribute: 'role' }) role: Nullable<string> = 'dialog'
	/**
	 * Used to change the HTML tag in the modal label for correct semantic structure
	 */
	@Prop({ attribute: 'label-tag' }) readonly labelTag: string = 'h2'
	/**
	 * String of id's that indicate alternative labels elements
	 */
	@Prop({ attribute: 'wcag-labelled-by' }) wcagLabelledBy: string
	/**
	 * Indicates the id of a component that describes the modal.
	 */
	@Prop({ attribute: 'wcag-described-by' }) wcagDescribedBy: string
	/**
	 * Adds accessible label for the modal close button that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-close-label' }) readonly wcagCloseLabel: string = 'Zavřít okno'
	/**
	 * A string of identifiers that indicate alternative label elements for closing the modal window
	 */
	@Prop({ attribute: 'wcag-close-labelled-by' }) wcagCloseLabelledBy: string
	/**
	 * Emitted when modal window closes.
	 */
	@Event({ eventName: 'gov-close' }) govClose: EventEmitter<PointerEvent>

	@Watch('labelTag')
	validateLabelTag(newValue: string): void {
		const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
		if (newValue) {
			if (!validTags.includes(newValue)) {
				govErrorLog(`[${ModalClass.root}]: Tag ${newValue} is not allowed.`)
			}
		}
	}

	@Watch('open')
	watchOpen(newValue: boolean): void {
		this.open = newValue
	}

	private showModal() {
		this.open = true
		document.body.classList.add(ModalClass.bodyFix)
	}

	private hideModal() {
		this.open = false
		document.body.classList.remove(ModalClass.bodyFix)
	}

	async componentWillRender() {
		if (this.open) {
			this.showModal()
		} else {
			this.hideModal()
		}
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		const LabelTag = this.labelTag
		return (
			<Host class={this.h.classes(ModalClass.rootPrompt)} open={this.open}>
				<dialog
					class={ModalClass.dialog}
					hidden={!this.open}
					tabindex="-1"
					open={this.open}
					aria-modal="true"
					aria-hidden={toBoolAttr(!this.open)}
					aria-labelledby={this.wcagLabelledBy || this.labelId}
					aria-describedby={this.wcagDescribedBy || this.contentId}
					role={this.role}
				>
					<div class={ModalClass.inner}>
						<div class={ModalClass.header}>
							{this.h.hasSlot('icon') && (
								<div class={ModalClass.icon}>
									<slot name="icon" />
								</div>
							)}
							{this.label && (
								<LabelTag class={ModalClass.title} id={this.labelId}>
									{this.label}
								</LabelTag>
							)}
							<gov-button
								class={ModalClass.close}
								variant="primary"
								wcagLabel={this.wcagCloseLabel}
								wcagLabelledBy={this.wcagCloseLabelledBy}
								type="base"
								on-gov-click={this.onCloseHandler.bind(this)}
							>
								<gov-icon name="x-lg" />
							</gov-button>
						</div>
						<div class={ModalClass.content} id={this.contentId}>
							<slot />
						</div>
						<div class={ModalClass.actions}>
							<slot name="actions" />
						</div>
					</div>
				</dialog>

				{this.open ? (
					<gov-backdrop wcag-label={this.wcagCloseLabel} wcag-labelled-by={this.wcagCloseLabelledBy} on-gov-click={this.onCloseHandler.bind(this)} />
				) : null}
			</Host>
		)
	}

	private onCloseHandler(e: PointerEvent) {
		e.stopPropagation()
		this.hideModal()
		this.govClose.emit(e)
	}

	/**
	 * Showing the modal
	 */
	@Method()
	async show(): Promise<void> {
		this.showModal()
	}

	/**
	 * Hiding the modal
	 */
	@Method()
	async hide(): Promise<void> {
		this.hideModal()
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagRef(this.wcagLabelledBy, 'wcag-labelled-by', ModalClass.root)
		validateWcagRef(this.wcagDescribedBy, 'wcag-described-by', ModalClass.root)
	}
}
