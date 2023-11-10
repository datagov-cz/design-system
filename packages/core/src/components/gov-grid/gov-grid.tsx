import { Component, Element, h, Host, Prop } from '@stencil/core'
import { GridClass } from './constants'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-grid',
	styleUrl: 'gov-grid.scss',
})
export class GovGrid {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovGridElement
	/**
	 * Horizontal align of cells
	 */
	@Prop({ attribute: 'align-x' }) readonly alignX: string

	/**
	 * Vertical align of cells
	 */
	@Prop({ attribute: 'align-y' }) readonly alignY: string

	// vertical / horizontal align

	render() {
		return (
			<Host class={this.h.classes(GridClass.root)} align-x={this.alignX} align-y={this.alignY} role="list">
				<slot></slot>
			</Host>
		)
	}
}
