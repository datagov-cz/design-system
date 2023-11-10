import { Component, Element, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core'
import { validateProp } from '../../helpers/Validate/props'
import { StepperClass, StepperItemClass, StepperSizes, StepperSizesType } from './constants'
import { GovStepperItemCustomEvent } from '../../components'
import { GovStepperItemChangeEvent } from './gov-stepper-item.d'
import { GovHost } from '../../helpers/Dom/template.types'
import { govHost } from '../../helpers/Dom/template'

@Component({
	tag: 'gov-stepper',
	styleUrl: 'gov-stepper.scss',
})
export class GovStepper {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() readonly host: HTMLGovStepperElement
	/**
	 * Size of stepper
	 */
	@Prop() readonly size?: StepperSizesType = 'm'
	/**
	 * Called when the Stepper state changes
	 */
	@Event({ eventName: 'gov-change' }) govChange: EventEmitter<GovStepperItemChangeEvent>

	@Watch('size')
	validateSize(newValue: string): void {
		validateProp(StepperSizes, newValue, StepperClass.root)
	}

	componentWillLoad(): void {
		this.validateSize(this.size)
	}

	componentDidLoad() {
		this.host.querySelectorAll(StepperItemClass.root).forEach((child: HTMLGovStepperItemElement) => {
			child.setAttribute('size', this.size)
			child.addEventListener('gov-change', (e: GovStepperItemCustomEvent<GovStepperItemChangeEvent>) => {
				e.stopPropagation()
				this.govChange.emit(e.detail)
			})
		})
	}

	render() {
		return (
			<Host class={this.h.classes(StepperClass.root)} role="list" size={this.size}>
				<slot />
			</Host>
		)
	}
}
