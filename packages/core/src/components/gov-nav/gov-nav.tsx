import { Component, Element, h, Host, Method, Prop } from '@stencil/core'
import { NavClass } from './constants'
import { validateWcagLabel } from '../../helpers/Validate/wcag'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'

@Component({
	tag: 'gov-nav',
	styleUrl: 'gov-nav.scss',
})
export class GovNav {
	@Element() readonly host: HTMLGovNavElement

	/**
	 * Adds accessible label for the accordion that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-label' }) readonly wcagLabel: string
	/**
	 * String of id's that indicate alternative labels elements
	 */
	@Prop({ attribute: 'wcag-labelled-by' }) readonly wcagLabelledBy: string

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		return (
			<Host class={NavClass.root}>
				<nav class={NavClass.nav} role={'list'} arial-label={this.wcagLabel} arial-labelledby={this.wcagLabelledBy}>
					<slot />
				</nav>
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, NavClass.root)
	}
}
