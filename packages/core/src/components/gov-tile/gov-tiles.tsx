import { Component, Element, h, Host, Prop } from '@stencil/core'
import { TilesClass } from './constants'
import { prepareClasses } from '../../helpers/Dom/template'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-tiles',
	styleUrl: 'gov-tiles.scss',
})
export class GovTiles {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}
	/**
	 * Number of columns between 1-4
	 */
	@Prop() readonly columns: number = 3
	/**
	 * Tiles border
	 */
	@Prop({ attribute: 'no-border' }) readonly noBorder: boolean = false

	@Element() host: HTMLGovTilesElement

	get classNames(): string {
		return prepareClasses([TilesClass.root, this.columns && TilesClass.root + '--x' + this.columns])
	}

	render() {
		return (
			<Host class={this.h.classes(this.classNames)}>
				<slot />
			</Host>
		)
	}
}
