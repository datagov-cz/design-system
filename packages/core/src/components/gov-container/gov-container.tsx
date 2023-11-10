import { Component, Element, h, Host, Method } from '@stencil/core'
import { govHost, slottedChildren } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { ContainerClass } from './constants'

@Component({
	tag: 'gov-container',
	styleUrl: 'gov-container.scss',
})
export class GovContainer {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovContainerElement

	render() {
		return (
			<Host class={this.h.classes(ContainerClass.root)}>
				<slot />
			</Host>
		)
	}

	/**
	 * Returns slotted children
	 *
	 * @return {Promise<Node[]>}
	 */
	@Method()
	async slottedChildren(): Promise<Node[]> {
		return Promise.resolve(slottedChildren(this.host))
	}
}
