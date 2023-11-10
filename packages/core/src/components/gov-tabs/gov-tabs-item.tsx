import { Component, Element, h, Prop, Method, State, Host } from '@stencil/core'
import { createID } from '../../utils/string.utils'
import { govHost, toBoolAttrIfDefined } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'
import { TabsItemClass } from './constants'

@Component({
	tag: 'gov-tabs-item',
	styleUrl: 'gov-tabs-item.scss',
})
export class GovTabsItem {
	private h: GovHost
	private readonly contentId: string
	private readonly triggerId: string

	constructor() {
		this.h = govHost(this.host)
		this.contentId = createID('GovTabContent')
		this.triggerId = createID('GovTabTrigger')
	}

	@Element() host: HTMLGovTabsItemElement
	/**
	 * Custom tab item identifier. Otherwise, it will be generated
	 */
	@Prop() readonly identifier: string
	/**
	 * Custom tab trigger item identifier. Otherwise, it will be generated
	 */
	@Prop() readonly triggerIdentifier: string
	/**
	 * Item name of the tab
	 */
	@Prop({reflect: true}) readonly label: string
	/**
	 * Default selected tab
	 */
	@Prop() readonly default: boolean = false
	@State() isActive = false

	render() {
		return (
			<Host class={this.h.classes(TabsItemClass.root)} default={this.default}>
				<div
					class={TabsItemClass.inner}
					role="tabpanel"
					id={this.identifier || this.contentId}
					hidden={!this.isActive}
					aria-labelledby={this.triggerIdentifier || this.triggerId}
					aria-hidden={toBoolAttrIfDefined(!this.isActive)}
				>
					<slot></slot>
				</div>
			</Host>
		)
	}

	/**
	 * Returns a unique tab content identifier
	 */
	@Method()
	async getIdentifier(): Promise<string> {
		return this.identifier || this.contentId
	}

	/**
	 * Returns a unique tab trigger identifier
	 */
	@Method()
	async getTriggerIdentifier(): Promise<string> {
		return this.triggerIdentifier || this.triggerId
	}

	/**
	 * Set status of tab-item
	 */
	@Method()
	async setActiveStatus(status: boolean): Promise<void> {
		this.isActive = status
	}
}
