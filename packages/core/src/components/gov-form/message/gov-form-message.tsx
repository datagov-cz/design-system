import { Component, Element, h, Host, Method, Prop, Watch } from '@stencil/core'
import { FormMessageClass, FormMessageVariants, FormMessageVariantType } from './constants'
import { govHost } from '../../../helpers/Dom/template'
import { GovHost } from '../../../helpers/Dom/template.types'
import { validateProp } from '../../../helpers/Validate/props'
import { createID } from '../../../utils/string.utils'

@Component({
	tag: 'gov-form-message',
	styleUrl: 'gov-form-message.scss',
})
export class GovFormMessage {
	h: GovHost
	private readonly messageId: string

	constructor() {
		this.h = govHost(this.host)
		this.messageId = createID('GovFormMessage')
	}

	@Element() host: HTMLGovFormMessageElement
	/**
	 * Style variation of the message.
	 */
	@Prop({ attribute: 'variant' }) readonly variant?: FormMessageVariantType = 'secondary'

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(FormMessageVariants, newValue, FormMessageClass.root)
	}

	componentWillLoad(): void {
		this.validateVariant(this.variant)
	}

	render() {
		return (
			<Host class={this.h.classes(FormMessageClass.root)} variant={this.variant}>
				{this.h.hasSlot('icon') && (
					<span class={FormMessageClass.icon}>
						<slot name="icon" />
					</span>
				)}
				<span id={this.messageId} class={FormMessageClass.content}>
					<slot />
				</span>
			</Host>
		)
	}

	/**
	 * Returns unique identfiier of message
	 */
	@Method()
	async identifier(): Promise<string> {
		return this.messageId
	}
}
