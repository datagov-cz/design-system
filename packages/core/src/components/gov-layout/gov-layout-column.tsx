import { Component, Element, h, Host } from '@stencil/core'
import { LayoutColumnClass } from './constants'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-layout-column',
	styleUrl: 'gov-layout-column.scss',
})
export class GovLayoutColumn {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovLayoutColumnElement

	render() {
		return (
			<Host class={this.h.classes(LayoutColumnClass.root)}>
				<slot />
			</Host>
		)
	}
}
