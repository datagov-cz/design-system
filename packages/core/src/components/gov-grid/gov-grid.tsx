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

	/**
	 * Size of horizontal gutter in the grid.
	 */
	@Prop({ attribute: 'gutter-x' }) readonly gutterX: string = "0"

	/**
	 * Size of the vertical gutter in the grid.
	 */
	@Prop({ attribute: 'gutter-y' }) readonly gutterY: string = "0"

	render() {
		const styles = {};
		if (this.gutterX !== "0") {
			styles["--gov-gutter-x"] = this.gutterX;
		}
		if (this.gutterY !== "0") {
			styles["--gov-gutter-y"] = this.gutterY;
		}

		return (
			<Host class={this.h.classes(GridClass.root)} align-x={this.alignX} align-y={this.alignY} role="list" style={styles}>
				<slot></slot>
			</Host>
		)
	}
}
