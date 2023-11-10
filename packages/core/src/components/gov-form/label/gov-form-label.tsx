import { Component, Event, EventEmitter, h, Prop, Host } from '@stencil/core'
import { FormLabelClass, FormLabelSizesTypes } from './constants'

@Component({
	tag: 'gov-form-label',
	styleUrl: 'gov-form-label.scss',
})
export class GovFormLabel {
	/**
	 * Identifier for label.
	 */
	@Prop({ attribute: 'identifier' }) readonly identifier: string
	/**
	 * Label's size.
	 */
	@Prop() readonly size?: FormLabelSizesTypes = 'm'
	/**
	 * Set whether the input is required or not.
	 */
	@Prop() readonly required: boolean = false
	/**
	 * Use label as a legend for better accessibility.
	 * Note: Don't forget to set the fieldset attribute of the gov-form-control component
	 */
	@Prop() readonly legend: boolean = false
	/**
	 * Emitted when the label click.
	 */
	@Event({ eventName: 'gov-click' }) govClick: EventEmitter<PointerEvent>

	render() {
		const Tag = this.legend ? 'legend' : 'label'
		return (
			<Host class={FormLabelClass.root} size={this.size}>
				<Tag class={FormLabelClass.label} htmlFor={this.identifier} onClick={() => this.govClick.emit()}>
					<slot></slot>
					{this.required ? <span class="gov-color--error-500">&nbsp;*</span> : null}
				</Tag>
			</Host>
		)
	}
}
