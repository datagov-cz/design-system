import { Component, Element, h, Host, Prop } from '@stencil/core'
import { LayoutClass, LayoutType, LayoutVariantType } from './constants'
import { GovHost } from '../../helpers/Dom/template.types'
import { govHost } from '../../helpers/Dom/template'

@Component({
	tag: 'gov-layout',
	styleUrl: 'gov-layout.scss',
})
export class GovLayout {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovLayoutElement
	/**
	 * Layout type
	 */
	@Prop() readonly type?: LayoutType = 'stretch'
	/**
	 * Layout align
	 */
	@Prop() readonly variant?: LayoutVariantType
	/**
	 * Determine if component should have inverse column order
	 */
	@Prop() readonly inverse: boolean = false

	private typeClass(originalClass: string, type: string, variant: string, inverse: boolean) {
		const isType = type ? '-' + type : ''
		const isVariant = variant ? '-' + variant : ''
		const isInverse = inverse ? '-inverse' : ''
		return originalClass + ' ' + originalClass + isType + isVariant + isInverse
	}

	render() {
		return (
			<Host type={this.type} class={this.h.classes(LayoutClass.root)}>
				<section class={this.typeClass(LayoutClass.section, this.type, this.variant, this.inverse)}>
					<slot />
				</section>
			</Host>
		)
	}
}
