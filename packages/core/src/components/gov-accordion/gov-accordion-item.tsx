import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from "@stencil/core"
import { validateProp } from "../../helpers/Validate/props"
import {
	AccordionClass,
	AccordionItemClass,
	AccordionSizes,
	AccordionSizeType,
	AccordionVariants,
	AccordionVariantType,
} from "./constants"
import { createID } from "../../utils/string.utils"
import { booleanString, govHost, toBoolAttrIfDefined } from "../../helpers/Dom/template"
import { AccordionItemEvent } from "./gov-accordion.types"
import { GovHost } from "../../helpers/Dom/template.types"

@Component({
	tag: "gov-accordion-item",
	styleUrl: "gov-accordion-item.scss",
})
export class GovAccordionItem {
	private readonly triggerId: string
	private readonly contentId: string
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
		this.triggerId = createID("GovAccordionItem")
		this.contentId = createID("GovAccordionContent")
	}

	@Element() readonly host: HTMLGovAccordionItemElement
	@State() isExpandedState: boolean

	/**
	 * Style variation of the button.
	 */
	@Prop() variant?: AccordionVariantType
	/**
	 * Custom accordion item identifier. Otherwise, it will be generated
	 */
	@Prop() readonly identifier: string
	/**
	 * Accordion’s size.
	 */
	@Prop() size?: AccordionSizeType
	/**
	 * Makes the button component disabled.
	 * This prevents users from being able to interact with the button, and conveys its inactive state to assistive technologies.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Defines whether the accordion is open or closed by button
	 */
	@Prop({ attribute: "is-expanded", mutable: true }) isExpanded = false
	/**
	 * Called when the accordion state changes
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<AccordionItemEvent>


	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(AccordionSizes, newValue, AccordionItemClass.root)
	}

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(AccordionVariants, newValue, AccordionItemClass.root)
	}

	private emmitChange(): void {
		this.govChange.emit({
			open: this.isExpanded,
			component: AccordionItemClass.root,
			ref: this.host,
		})
	}

	componentWillLoad(): void {
		this.getPropsFromParents()
		this.validateSize(this.size)
		this.validateVariant(this.variant)

	}

	getPropsFromParents() {
		const accordion = this.h.getParent(AccordionClass.root)
		if (accordion) {
			this.size = accordion.getAttribute("size") as AccordionSizeType
			this.variant = accordion.getAttribute("variant") as AccordionVariantType
		}
	}

	render() {
		const triggerId = this.identifier || this.triggerId
		const contentId = this.contentId

		return (
			<Host class={this.h.classes(AccordionItemClass.root)} size={this.size} variant={this.variant} role="listitem">
				<button
					id={triggerId}
					class={AccordionItemClass.header}
					aria-expanded={booleanString(this.isExpanded)}
					aria-controls={contentId}
					disabled={this.disabled}
					type={"button"}
					aria-disabled={toBoolAttrIfDefined(this.disabled)}
					onClick={(e: Event) => {
						e.stopPropagation()
						this.toggle().finally()
					}}>

					{this.h.hasSlot("icon") && (
						<span class={AccordionItemClass.icon}>
							<slot name="icon" />
						</span>
					)}

					<span class={AccordionItemClass.title}>
						<span class={AccordionItemClass.label}>
							<slot name="label" />
						</span>
						{this.h.hasSlot("annotation") && (
							<span class={AccordionItemClass.annotation}>
								<slot name="annotation" />
							</span>
						)}
					</span>

					<span class={AccordionItemClass.right}>
						{this.h.hasSlot("suffix") && (
							<span class={AccordionItemClass.suffix}>
								<slot name="suffix" />
							</span>
						)}

						<span class={AccordionItemClass.arrow}>
							{this.h.hasSlot("toggle-icon") ? (
								<slot name="toggle-icon" />
							) : (
								<gov-icon name="chevron-down"></gov-icon>
							)}
						</span>
					</span>
				</button>
				<div
					class={AccordionItemClass.content}
					id={contentId}
					aria-hidden={booleanString(!this.isExpanded)}
					hidden={!this.isExpanded}
					aria-labelledby={triggerId}>
					<slot />
				</div>
			</Host>
		)
	}

	/**
	 * Opening the accordion
	 */
	@Method()
	async open(): Promise<void> {
		this.isExpanded = true
		this.emmitChange()
	}

	/**
	 * Closing the accordion
	 */
	@Method()
	async close(): Promise<void> {
		this.isExpanded = false
		this.emmitChange()
	}

	/**
	 * Accordion switch
	 */
	@Method()
	async toggle(): Promise<void> {
		this.isExpanded = !this.isExpanded
		this.emmitChange()
	}

	/**
	 * Returns the current state of the component
	 */
	@Method()
	async currentState(): Promise<boolean> {
		return this.isExpanded
	}
}
