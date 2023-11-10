import { Component, Element, h, Host } from '@stencil/core'
import { ErrorCodeClass } from './constants'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-error-code',
	styleUrl: 'gov-error-code.scss',
})
export class GovErrorCode {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovErrorCodeElement

	render() {
		return (
			<Host class={this.h.classes(ErrorCodeClass.root)}>
				<div class={ErrorCodeClass.holder}>
					{this.h.hasSlot('icon') && (
						<div class={ErrorCodeClass.icon}>
							<slot name="icon" />
						</div>
					)}
					<div class={ErrorCodeClass.content}>
						<slot />
					</div>
				</div>
			</Host>
		)
	}
}
