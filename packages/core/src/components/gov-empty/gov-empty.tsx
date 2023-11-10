import { Component, Element, Host, h } from '@stencil/core'
import { EmptyClass } from './constants'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-empty',
	styleUrl: 'gov-empty.scss',
})
export class GovEmpty {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovEmptyElement

	render() {
		return (
			<Host class={this.h.classes(EmptyClass.root)}>
				{this.h.hasSlot('icon') && (
					<div class={EmptyClass.icon}>
						<slot name="icon" />
					</div>
				)}
				<div class={EmptyClass.content}>
					<slot />
				</div>
			</Host>
		)
	}
}
