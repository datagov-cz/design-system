import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core'
import { govHost, toBoolAttr } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import Fragment from '../../helpers/Fragment'
import { validateProp } from '../../helpers/Validate/props'
import { validateWcagProp } from '../../helpers/Validate/wcag'
import { delay } from '../../utils/utils'
import { ButtonEvent } from '../gov-button/button/gov-button.types'
import { InfobarClass, InfobarVariants, VariantType } from './constants'
import { InfobarEvent } from './gov-infobar.types'

@Component({
	tag: 'gov-infobar',
	styleUrl: 'gov-infobar.scss',
})
export class GovInfobar {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovInfobarElement

	/**
	 * Style variation of the button.
	 */
	@Prop() readonly headline: string
	/**
	 * Style variation of the button.
	 */
	@Prop() readonly variant: VariantType = 'primary'
	/**
	 * Determine if component should have inverse colors to be used on dark background
	 */
	@Prop() readonly inverse: boolean = false
	/**
	 * Aria label for the closing button. It is mandatory if the infobar is closable
	 */
	@Prop({ attribute: 'wcag-close-label' }) readonly wcagCloseLabel: string = 'Zavřít informační lištu'
	/**
	 * Aria label for the toggle button. It is mandatory if the infobar has headline
	 */
	@Prop({ attribute: 'wcag-toggle-label' }) readonly wcagToggleLabel: string = 'Zobrazit více informací'
	/**
	 * Called when the close button is clicked
	 */
	@Event({ eventName: 'gov-close' }) govClose: EventEmitter<InfobarEvent>
	/**
	 * Displays the option to close the infobar
	 */
	@Prop() readonly closable?: boolean = false

	@State() toggleContent = false

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(InfobarVariants, newValue, InfobarClass.root)
	}

	componentWillLoad(): void {
		this.validateVariant(this.variant)
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		let inverse = !this.inverse
		let variant = this.inverse ? 'secondary' : this.variant

		if (this.variant == 'warning') {
			inverse = false
			variant = 'secondary'
		}

		const closeButton = (
			<div class={InfobarClass.close}>
				<gov-button size="s" wcagLabel={this.wcagCloseLabel} type="base" variant={variant} inverse={inverse} on-gov-click={this.onCloseHandler.bind(this)}>
					<gov-icon name="x-lg"></gov-icon>
				</gov-button>
			</div>
		)

		return (
			<Host class={this.h.classes(InfobarClass.root)} variant={this.variant}>
				<section class={InfobarClass.section} role="infobar">
					{this.h.hasSlot('icon') && (
						<div class={InfobarClass.icon}>
							<slot name="icon" />
						</div>
					)}
					<div class={InfobarClass.content + (this.closable ? ' ' + InfobarClass.closable : '')}>
						{this.headline ? (
							<Fragment>
								<div class={InfobarClass.headline}>
									<p>{this.headline}</p>
									<gov-button
										size="s"
										wcagLabel={this.wcagToggleLabel}
										type="base"
										variant={variant}
										inverse={inverse}
										on-gov-click={() => (this.toggleContent = !this.toggleContent)}
									>
										<gov-icon name={this.toggleContent ? 'chevron-up' : 'chevron-down'}></gov-icon>
									</gov-button>
								</div>
								<div hidden={!this.toggleContent} aria-hidden={toBoolAttr(this.toggleContent)}>
									<slot />
								</div>
							</Fragment>
						) : (
							<slot />
						)}
					</div>
				</section>
				{this.closable && closeButton}
			</Host>
		)
	}

	onCloseHandler(e: CustomEvent<ButtonEvent>) {
		this.govClose.emit({
			component: InfobarClass.root,
			ref: this.host,
			originalEvent: e,
		})
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		if (this.closable) {
			validateWcagProp(this.wcagCloseLabel, 'wcag-close-label', InfobarClass.root)
		}
		if (this.headline) {
			validateWcagProp(this.wcagToggleLabel, 'wcag-toggle-label', InfobarClass.root)
		}
	}
}
