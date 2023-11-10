import {Component, h, Host, Prop} from '@stencil/core'
import {FormPasswordPowerClass} from './constants'

@Component({
	tag: 'gov-form-password-power',
	styleUrl: 'gov-form-password-power.scss',
})
export class GovFormPasswordPower {
	/**
	 * Password power: 0 - none, 1 - weak, 2 - medium, 3 - strong
	 */
	@Prop({reflect: true}) readonly power: number

	render() {
		return (
			<Host class={FormPasswordPowerClass.root}>
					<span class={FormPasswordPowerClass.bar}>
							<span></span>
							<span></span>
							<span></span>
					</span>
					<span class={FormPasswordPowerClass.text}>
							<slot/>
					</span>
			</Host>
		)
	}
}
