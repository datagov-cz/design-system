import { Component, Element, h, Host } from '@stencil/core'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { CookiebarClass } from './constants'

@Component({
	tag: 'gov-cookiebar',
	styleUrl: 'gov-cookiebar.scss',
})
export class GovCookiebar {
	h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovCookiebarElement

	render() {
		return (
			<Host class={this.h.classes(CookiebarClass.root)}>
				<div class={CookiebarClass.holder}>
					<div class={CookiebarClass.content}>
						<slot />
					</div>

					{(this.h.hasSlot('actions-primary') || this.h.hasSlot('actions-secondary')) && (
						<div class={CookiebarClass.actions}>
							{this.h.hasSlot('actions-primary') && (
								<div class={CookiebarClass.actionsPrimary}>
									<slot name="actions-primary" />
								</div>
							)}

							{this.h.hasSlot('actions-secondary') && (
								<div class={CookiebarClass.actionsSecondary}>
									<slot name="actions-secondary" />
								</div>
							)}
						</div>
					)}
				</div>
			</Host>
		)
	}
}
