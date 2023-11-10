import { Component, Element, h, Prop, State, Host, Watch } from '@stencil/core'
import { govErrorLog } from '../../helpers/Log/gov.log'
import { NavItemClass } from './constants'

@Component({
	tag: 'gov-nav-item',
	styleUrl: 'gov-nav-item.scss',
})
export class GovNavItem {
	@Element() readonly host: HTMLGovNavItemElement
	@State() isExpandedState: boolean

	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href
	 */
	@Prop() readonly href: string

	@Watch('href')
	validateHref(newValue: string): void {
		if (!newValue) {
			govErrorLog(`[${NavItemClass.root}]: Parameter href is required.`)
		}
	}

	componentWillLoad(): void {
		this.validateHref(this.href)
	}

	render() {
		return (
			<Host class={NavItemClass.root} role="listitem">
				<a href={this.href} class={NavItemClass.link}>
					<slot />
				</a>
			</Host>
		)
	}
}
