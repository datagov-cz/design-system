import { Component, Element, h, Host, Method, Prop } from '@stencil/core'
import { AttachmentsClass } from './constants'
import { validateWcagProp } from '../../helpers/Validate/wcag'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-attachments',
	styleUrl: 'gov-attachments.scss',
})
export class GovAttachments {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovAttachmentsElement
	/**
	 * Label of attachments section
	 */
	@Prop() readonly label: string
	/**
	 * Adds accessible label for the attachment section that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-label' }) readonly wcagLabel: string

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		return (
			<Host class={this.h.classes(AttachmentsClass.root)}>
				{this.label ? <p class={AttachmentsClass.label}>{this.label}</p> : null}
				<div class={AttachmentsClass.list} role="list" aria-label={this.wcagLabel}>
					<slot />
				</div>
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagProp(this.wcagLabel, 'wcag-label', AttachmentsClass.root)
	}
}
