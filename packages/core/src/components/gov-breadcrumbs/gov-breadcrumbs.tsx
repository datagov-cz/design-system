import { Component, Element, h, Host, Method, Prop, Event, EventEmitter } from '@stencil/core'
import { BreadcrumbsClass } from './constants'
import { validateWcagLabel } from '../../helpers/Validate/wcag'
import { canValidateWcagOnRender } from '../../helpers/Dom/win'
import { delay } from '../../utils/utils'
import { GovBreadcrumbsChangeEvent } from './gov-breadcrumbs.d'
import { govHost } from '../../helpers/Dom/template'
import { GovHost } from '../../helpers/Dom/template.types'

@Component({
	tag: 'gov-breadcrumbs',
	styleUrl: 'gov-breadcrumbs.scss',
})
export class GovBreadcrumbs {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovBreadcrumbsElement
	/**
	 * Defines whether the components can be collapsible when element doesn't fit in one row.
	 */
	@Prop() readonly collapsible: boolean = false
	/**
	 * Defines whether the breadcrumbs are open or closed by button
	 */
	@Prop({ attribute: 'is-expanded' }) readonly isExpanded: boolean = false
	/**
	 * Adds accessible label for the pagination that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-label' }) readonly wcagLabel: string
	/**
	 * Indicates the id of a component that labels the pagination.
	 */
	@Prop({ attribute: 'wcag-labeled-by' }) readonly wcagLabelledBy: string

	/**
	 * Called when the Breadcrumbs state changes
	 */
	@Event({ eventName: 'gov-change' }) govChange: EventEmitter<GovBreadcrumbsChangeEvent>

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		return (
			<Host class={this.h.classes(BreadcrumbsClass.root)}>
				<nav aria-label={this.wcagLabel} aria-labelledby={this.wcagLabelledBy}>
					<slot/>
				</nav>
			</Host>
		)
	}


	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, BreadcrumbsClass.root)
	}
}
