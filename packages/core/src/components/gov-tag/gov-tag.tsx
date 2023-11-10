import {Component, Element, h, Host, Prop, Watch} from '@stencil/core'
import {govHost} from '../../helpers/Dom/template'
import {GovHost} from '../../helpers/Dom/template.types'
import {validateProp} from '../../helpers/Validate/props'
import {ButtonSizes, ButtonSizesType, ButtonVariants, ButtonVariantType} from '../gov-button/button/constants'
import {TagClass} from './constants'
import {prepareIconFormat} from "../gov-icon/helpers";

@Component({
	tag: 'gov-tag',
	styleUrl: 'gov-tag.scss',
})
export class GovTag {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovTagElement

	/**
	 * Determine if component should have inverse colors to be used on dark background
	 */
	@Prop() readonly inverse: boolean = false
	/**
	 * Definition of the button icon on the left. The icon must be defined in the form "type/name".
	 */
	@Prop({attribute: "icon-left"}) readonly iconLeft?: string
	/**
	 * Definition of the button icon on the left. The icon must be defined in the form "type/name".
	 */
	@Prop({attribute: "icon-right"}) readonly iconRight?: string
	/**
	 * Tag’s size.
	 */
	@Prop({reflect: true}) readonly size: ButtonSizesType = ButtonSizes._S
	/**
	 * Style variation of the tag.
	 */
	@Prop({reflect: true}) readonly variant: ButtonVariantType = ButtonVariants.PRIMARY

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(ButtonVariants, newValue, TagClass.root)
	}

	@Watch('size')
	validateSize(newValue: string): void {
		validateProp(ButtonSizes, newValue, TagClass.root)
	}

	componentWillLoad(): void {
		this.validateVariant(this.variant)
		this.validateSize(this.size)
	}

	render() {
		const iconLeft = prepareIconFormat(this.iconLeft)
		const iconRight = prepareIconFormat(this.iconRight)
		return (
			<Host class={this.h.classes(TagClass.root)}
						variant={this.variant}
						type={this.inverse ? undefined : 'solid'}
						size={this.size} inverse={this.inverse}>
				<span class="element">
					{this.h.hasSlot('left-icon') && <slot name="left-icon"></slot>}
					{iconLeft && 	<gov-icon type={iconLeft.type} name={iconLeft.name}></gov-icon>}
					<slot/>
					{iconRight && 	<gov-icon type={iconRight.type} name={iconRight.name}></gov-icon>}
					{this.h.hasSlot('right-icon') && <slot name="right-icon"></slot>}
				</span>
			</Host>
		)
	}
}
