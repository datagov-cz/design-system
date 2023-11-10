import { Component, Event, EventEmitter, h, Method, Prop, Host, Element } from '@stencil/core'
import { validateWcagLabel } from '../../helpers/Validate/wcag'
import { BackdropClass } from './constants'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-backdrop',
	styleUrl: 'gov-backdrop.scss',
})
export class GovBackdrop {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovBackdropElement
	/**
	 * Determine if component should have inverse colors to be used on dark background.
	 */
	@Prop() readonly inverse: boolean = false
	/**
	 * Adds accessible label for the backdrop that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-label' }) readonly wcagLabel: string
	/**
	 * String of id's that indicate alternative labels elements
	 */
	@Prop({ attribute: 'wcag-labelled-by' }) readonly wcagLabelledBy: string
	/**
	 * Emitted when button clicks.
	 */
	@Event({ eventName: 'gov-click' }) govClick: EventEmitter<MouseEvent>

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		return (
			<Host class={this.h.classes(BackdropClass.root)}>
				<div
					role={'button'}
					aria-label={this.wcagLabel}
					aria-labelledby={this.wcagLabelledBy}
					onClick={e => this.govClick.emit(e)}
					class={BackdropClass.bg}
				></div>
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, BackdropClass.root)
	}
}
