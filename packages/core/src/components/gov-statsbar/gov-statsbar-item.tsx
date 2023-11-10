import { Component, Element, h, Host, Prop, Watch } from '@stencil/core'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { validateProp } from '../../helpers/Validate/props'
import { StatsBarItemClass, StatsBarIconPosition, StatsBarIconPositionType } from './constants'

@Component({
	tag: 'gov-statsbar-item',
	styleUrl: 'gov-statsbar-item.scss',
})
export class GovStatsbarItem {
	h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovStatsbarItemElement

	/**
	 * Icon’s position
	 */
	@Prop() readonly iconPosition?: StatsBarIconPositionType = undefined

	@Watch('iconPosition')
	validateIconPosition(newValue: string): void {
		validateProp(StatsBarIconPosition, newValue, StatsBarItemClass.root)
	}

	componentWillLoad(): void {
		this.validateIconPosition(this.iconPosition)
	}

	render() {
		return (
			<Host class={this.h.classes(StatsBarItemClass.root)}>
				<article>
					{this.h.hasSlot('icon') && (
						<span class={StatsBarItemClass.icon}>
							<slot name="icon" />
						</span>
					)}

					<p class={StatsBarItemClass.number}>
						<slot />
					</p>

					{this.h.hasSlot('text') && (
						<div class={StatsBarItemClass.text}>
							<slot name="text" />
						</div>
					)}
				</article>
			</Host>
		)
	}
}
