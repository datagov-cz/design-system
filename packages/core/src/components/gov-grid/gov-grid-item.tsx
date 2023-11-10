import { Component, Element, h, Host, Prop } from '@stencil/core'
import { GridItemClass } from './constants'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-grid-item',
	styleUrl: 'gov-grid-item.scss',
})
export class GovGridItem {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovGridItemElement
	/**
	 * Cell size as a fraction of 1/12 of the grid size
	 */
	@Prop() readonly size: string = '12/12'
	/**
	 * Cell size for SM media query and up as a fraction of 12 of the grid size
	 */
	@Prop({ attribute: 'size-sm' }) readonly sizeSm: string
	/**
	 * Cell size for MD media query and up as a fraction of 12 of the grid size
	 */
	@Prop({ attribute: 'size-md' }) readonly sizeMd: string
	/**
	 * Cell size for LG media query and up as a fraction of 12 of the grid size
	 */
	@Prop({ attribute: 'size-lg' }) readonly sizeLg: string
	/**
	 * Cell size for XL media query and up as a fraction of 12 of the grid size
	 */
	@Prop({ attribute: 'size-xl' }) readonly sizeXl: string

	render() {
		return (
			<Host
				class={this.h.classes(GridItemClass.root)}
				role="listitem"
				size={this.size}
				size-sm={this.sizeSm}
				size-md={this.sizeMd}
				size-lg={this.sizeLg}
				size-xl={this.sizeXl}
			>
				<slot />
			</Host>
		)
	}
}
