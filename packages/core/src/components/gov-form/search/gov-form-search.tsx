import { Component, Element, h, Host, Prop } from '@stencil/core'
import { FormSearchClass, FormSearchVariantType } from './constants'
@Component({
	tag: 'gov-form-search',
	styleUrl: 'gov-form-search.scss',
})
export class GovFormSearch {
	@Element() host: HTMLGovFormSearchElement
	/**
	 * Style variation of the form input.
	 */
	@Prop({reflect: true}) readonly variant: FormSearchVariantType = 'secondary'

	render() {
		return (
			<Host class={FormSearchClass.root}>
				<span class={FormSearchClass.input}>
					<slot name="input" />
				</span>
				<span class={FormSearchClass.button}>
					<slot name="button" />
				</span>
			</Host>
		)
	}
}
