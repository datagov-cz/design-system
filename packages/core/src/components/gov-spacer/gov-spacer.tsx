import { Component, Element, h, Host, Prop, Watch } from '@stencil/core'
import { validateProp } from '../../helpers/Validate/props'
import { SpacerBreakpoints, SpacerBreakpointsType, SpacerClass, SpacerSize, SpacerSizeType } from './constants'
import { GovHost } from '../../helpers/Dom/template.types'
import { govHost } from '../../helpers/Dom/template'

@Component({
	tag: 'gov-spacer',
	styleUrl: 'gov-spacer.scss',
})
export class GovSpacer {
	private h: GovHost
	constructor() {
		this.h = govHost(this.host)
	}
	@Element() host: HTMLGovSpacerElement
	/**
	 * Spacer’s size
	 */
	@Prop() readonly size?: SpacerSizeType
	/**
	 * Breakpoint
	 */
	@Prop() readonly breakpoint?: SpacerBreakpointsType = undefined

	@Watch('size')
	validateSize(newValue: string): void {
		validateProp(SpacerSize, newValue, SpacerClass.root)
	}

	@Watch('breakpoint')
	validateBreakpoint(newValue: string): void {
		validateProp(SpacerBreakpoints, newValue, SpacerClass.root)
	}

	componentWillLoad(): void {
		this.validateSize(this.size)
		this.validateBreakpoint(this.breakpoint)
	}

	render() {
		return <Host class={this.h.classes(SpacerClass.root)} size={this.size} breakpoint={this.breakpoint}></Host>
	}
}
