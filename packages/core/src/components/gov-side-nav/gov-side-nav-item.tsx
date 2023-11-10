import { Component, Element, h, Prop, State, Watch, Host, Method, Event, EventEmitter } from '@stencil/core'
import { govErrorLog } from '../../helpers/Log/gov.log'
import { SideNavItemClass } from './constants'
import { booleanString, prepareClasses } from '../../helpers/Dom/template'
import { GovSideNavItemChangeEvent } from './gov-side-nav-item.d'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-side-nav-item',
	styleUrl: 'gov-side-nav-item.scss',
})
export class GovSideNavItem {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovSideNavItemElement
	@State() isExpandedState: boolean

	/**
	 * Determide if component should have inversed colors to be used on dark background
	 */
	@Prop() readonly inverse: boolean = false
	/**
	 * Determide if component should have compact styles.
	 */
	@Prop() readonly compact: boolean = false
	/**
	 * Custom sidenav item identifier. Otherwise, it will be generated
	 */
	@Prop() readonly identifier: string
	/**
	 * Defined the count of nested items
	 */
	@Prop() readonly count: boolean = false
	/**
	 * Item name of the sidenav
	 */
	@Prop() readonly label: string
	/**
	 * Makes the button component disabled.
	 * This prevents users from being able to interact with the button, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href
	 */
	@Prop() readonly href: string
	/**
	 * Defines whether the sidenav is open or closed by button
	 */
	@Prop({ attribute: 'is-expanded' }) readonly isExpanded: boolean = false
	/**
	 * Called when the sidenav state changes
	 */
	@Event({ eventName: 'gov-change' }) govChange: EventEmitter<GovSideNavItemChangeEvent>

	@Watch('label')
	validateLabel(newValue: string): void {
		if (!newValue) {
			govErrorLog(`[${SideNavItemClass.root}]: Parameter label is required.`)
		}
	}

	private emmitChange(): void {
		this.govChange.emit({ open: this.isExpandedState, element: this.host })
	}

	componentWillLoad(): void {
		this.isExpandedState = this.isExpanded
		this.validateLabel(this.label)
	}

	get classNames(): string {
		const { h } = this

		return prepareClasses([SideNavItemClass.root, h.hasSlot('icon') && SideNavItemClass.rootWithIcon])
	}

	render() {
		const { isExpandedState, label } = this
		// TODO: správný počet zanořených childů
		const hasChilds = this.host.children.length > 1

		return (
			<Host class={this.classNames} role="listitem" inverse={this.inverse} aria-expanded={booleanString(isExpandedState)}>
				{this.href ? (
					<div class={SideNavItemClass.header}>
						<a class={SideNavItemClass.name} href={this.href}>
							{this.h.hasSlot('icon') && (
								<span class={SideNavItemClass.icon}>
									<slot name="icon" />
								</span>
							)}
							<span class={SideNavItemClass.label}>{label}</span>

							{this.count && (
								<span class={SideNavItemClass.chip}>
									<gov-chip variant="secondary" size="s" inverse={this.inverse}>
										{/* // TODO: správný počet zanořených childů */}3
									</gov-chip>
								</span>
							)}
						</a>

						{hasChilds && (
							<button type="button" class={SideNavItemClass.arrow} onClick={() => this.toggle()}>
								<gov-icon name="chevron-down"></gov-icon>
							</button>
						)}
					</div>
				) : (
					<div class={SideNavItemClass.header}>
						<button class={SideNavItemClass.name} type="button" onClick={() => this.toggle()}>
							{this.h.hasSlot('icon') && (
								<span class={SideNavItemClass.icon}>
									<slot name="icon" />
								</span>
							)}
							<span class={SideNavItemClass.label}>{label}</span>

							{hasChilds && (
								<span class={SideNavItemClass.arrow}>
									<gov-icon name="chevron-down"></gov-icon>
								</span>
							)}
						</button>
					</div>
				)}

				{hasChilds && (
					<div class={SideNavItemClass.content}>
						<slot />
					</div>
				)}
			</Host>
		)
	}

	/**
	 * Opening the sidenav
	 */
	@Method()
	async open(): Promise<void> {
		this.isExpandedState = true
		this.emmitChange()
	}

	/**
	 * Closing the sidenav
	 */
	@Method()
	async close(): Promise<void> {
		this.isExpandedState = false
		this.emmitChange()
	}

	/**
	 * sidenav switch
	 */
	@Method()
	async toggle(): Promise<void> {
		this.isExpandedState = !this.isExpandedState
		this.emmitChange()
	}

	/**
	 * Returns the current state of the component
	 */
	@Method()
	async currentState(): Promise<boolean> {
		return this.isExpandedState
	}
}
