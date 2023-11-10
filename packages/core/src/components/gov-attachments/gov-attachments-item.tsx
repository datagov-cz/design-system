import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core'
import { AttachmentsItemClass } from './constants'
import { validateWcagLabel } from '../../helpers/Validate/wcag'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-attachments-item',
	styleUrl: 'gov-attachments-item.scss',
})
export class GovAttachmentsItem {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovAttachmentsItemElement

	/**
	 * Adds accessible label for the remove button that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-remove-label' }) readonly wcagRemoveLabel: string
	/**
	 * Indicates the id of a component that labels the remove button.
	 */
	@Prop({ attribute: 'wcag-remove-labelled-by' }) readonly wcagRemoveLabelledBy: string
	/**
	 * Emitted when the file is removed
	 */
	@Event({ eventName: 'gov-remove' }) govRemove: EventEmitter<PointerEvent>

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		return (
			<Host class={this.h.classes(AttachmentsItemClass.root)} role="listitem">
				<div class={AttachmentsItemClass.file}>
					<p class={AttachmentsItemClass.name}>
						<slot />
						<slot name="info" />
					</p>
					<gov-button
						variant="primary"
						type="base"
						size="s"
						wcag-label={this.wcagRemoveLabel}
						wcag-labelled-by={this.wcagRemoveLabelledBy}
						on-gov-click={this.govRemove.emit}
					>
						<gov-icon slot="left-icon" name="x-lg"></gov-icon>
					</gov-button>
				</div>

				{this.h.hasSlot('message') && (
					<div class={AttachmentsItemClass.messages}>
						<slot name="message" />
					</div>
				)}
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagRemoveLabel, this.wcagRemoveLabelledBy, AttachmentsItemClass.root)
	}
}
