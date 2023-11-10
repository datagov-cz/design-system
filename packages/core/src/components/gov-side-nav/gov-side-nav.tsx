import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core'
import { SideNavClass, SideNavItemClass } from './constants'
import { GovSideNavItemCustomEvent } from '../../components'
import { GovSideNavItemChangeEvent } from './gov-side-nav-item.d'
import { validateWcagLabel } from '../../helpers/Validate/wcag'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'
import { booleanString } from '../../helpers/Dom/template'

@Component({
	tag: 'gov-side-nav',
	styleUrl: 'gov-side-nav.scss',
})
export class GovSideNav {
	@Element() readonly host: HTMLGovSideNavElement

	/**
	 * Determide if component should have inversed colors to be used on dark background.
	 */
	@Prop() readonly inverse: boolean = false
	/**
	 * Determide if component should have compact styles.
	 */
	@Prop() readonly compact: boolean = false
	/**
	 * Adds accessible label for the sidenav that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-label' }) readonly wcagLabel: string
	/**
	 * String of id's that indicate alternative labels elements
	 */
	@Prop({ attribute: 'wcag-labelled-by' }) readonly wcagLabelledBy: string
	/**
	 * Called when the sidenav state changes
	 */
	@Event({ eventName: 'gov-change' }) govChange: EventEmitter<GovSideNavItemChangeEvent>

	componentDidLoad() {
		this.host.querySelectorAll(SideNavItemClass.root).forEach((child: HTMLGovSideNavItemElement) => {
			child.setAttribute('inverse', booleanString(this.inverse))
			child.setAttribute('compact', booleanString(this.compact))
			child.addEventListener('gov-change', (e: GovSideNavItemCustomEvent<GovSideNavItemChangeEvent>) => {
				e.stopPropagation()
				this.govChange.emit(e.detail)
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
			<Host class={SideNavClass.root} compact={this.compact} inverse={this.inverse} arial-label={this.wcagLabel} arial-labelledby={this.wcagLabelledBy}>
				<aside class={SideNavClass.aside} role={'list'}>
					<slot />
				</aside>
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, SideNavClass.root)
	}
}
