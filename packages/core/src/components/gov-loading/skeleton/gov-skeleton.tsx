import { Component, Element, h, Host, Method, Prop, Watch } from "@stencil/core"
import {
	SkeletonAnimation,
	SkeletonAnimationType,
	SkeletonClass, SkeletonShapes,
	SkeletonShapesType, SkeletonVariants,
	SkeletonVariantsType,
} from "./constants"
import { GovHost } from "../../../helpers/Dom/template.types"
import { govHost } from "../../../helpers/Dom/template"
import { validateProp } from "../../../helpers/Validate/props"
import { canValidateWcagOnRender } from "../../../helpers/Dom/win"
import { delay } from "../../../utils/utils"
import { validateWcagLabel } from "../../../helpers/Validate/wcag"

@Component({
	tag: "gov-skeleton",
	styleUrl: "gov-skeleton.scss",
})
export class GovSkeleton {
	h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovSkeletonElement
	/**
	 * Style variation of the skeleton.
	 */
	@Prop() readonly variant?: SkeletonVariantsType = "secondary"
	/**
	 * Number of rows of current skeleton type
	 */
	@Prop() count = 1
	/**
	 * Shape of the skeleton
	 */
	@Prop() shape?: SkeletonShapesType = "text"
	/**
	 * Width of the skeleton ex. 100px, 100%, auto etc.
	 */
	@Prop() width: string = null
	/**
	 * Height of the skeleton ex. 100px, 100%, auto etc.
	 */
	@Prop() height: string = null
	/**
	 * Animation type
	 */
	@Prop() animation?: SkeletonAnimationType = "progress"
	/**
	 * Adds accessible label for the skeleton that is only shown for screen readers.
	 */
	@Prop({ attribute: 'wcag-label' }) readonly wcagLabel: string

	items: number[] = []

	@Watch('variant')
	validateVariant(newValue: string): void {
		validateProp(SkeletonVariants, newValue, SkeletonClass.root)
	}

	@Watch('shape')
	validateShape(newValue: string): void {
		validateProp(SkeletonShapes, newValue, SkeletonClass.root)
	}

	@Watch('animation')
	validateAnimation(newValue: string): void {
		validateProp(SkeletonAnimation, newValue, SkeletonClass.root)
	}

	componentWillLoad() {
		this.validateVariant(this.variant)
		this.validateShape(this.shape)
		this.validateAnimation(this.animation)
		this.init()
	}

	componentWillUpdate() {
		this.init()
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	init() {
		this.items.length = this.count
		this.items.fill(1)
	}

	get style() {
		const dimenssionsStyles: {
			width?: string,
			height?: string,
		} = {
			width: null,
			height: null,
		}
		if (this.width) {
			dimenssionsStyles.width = this.width
		}

		if (this.height) {
			dimenssionsStyles.height = this.height
		}

		return { ...dimenssionsStyles }
	}

	render() {
		return (
			<Host class={this.h.classes(SkeletonClass.root)} variant={this.variant}>
				{this.items.map((_, index) => {
					return (
						<span
							key={index}
							class={{
								circle: this.shape === "circle",
								rect: this.shape === "rect",
								progress: this.animation === "progress",
								pulse: this.animation === "pulse",
								[SkeletonClass.loader]: true,
							}
							}
							aria-busy="true"
							aria-valuemin="0"
							aria-valuemax="100"
							aria-valuetext={this.wcagLabel}
							role="progressbar"
							tabindex="0"
							style={this.style}
						></span>
					)
				})}
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagLabel, undefined, SkeletonClass.root)
	}
}
