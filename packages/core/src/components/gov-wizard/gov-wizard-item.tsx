import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core"
import { govErrorLog } from "../../helpers/Log/gov.log"
import { validateProp } from "../../helpers/Validate/props"
import { WizardSizesType, WizardVariants, WizardVariantsType, WizardItemClass } from "./constants"
import { createID } from "../../utils/string.utils"
import { booleanString, govHost, toBoolAttrIfDefined } from "../../helpers/Dom/template"
import { GovHost } from "../../helpers/Dom/template.types"
import { WizardItemEvent } from "./gov-wizard-item.types"
import Fragment from "../../helpers/Fragment"

enum Tags {
	DIV = "div",
	BUTTON = "button",
}

@Component({
	tag: "gov-wizard-item",
	styleUrl: "gov-wizard-item.scss",
})
export class GovWizardItem {
	private h: GovHost
	private readonly triggerId: string
	private readonly contentId: string

	constructor() {
		this.h = govHost(this.host)
		this.triggerId = createID("GovWizardItem")
		this.contentId = createID("GovWizardContent")
	}

	@Element() readonly host: HTMLGovWizardItemElement
	/**
	 * Style variation of the button.
	 */
	@Prop() readonly variant?: WizardVariantsType = "primary"
	/**
	 * Size of wizard
	 */
	@Prop() readonly size?: WizardSizesType = "m"
	/**
	 * Custom wizard item identifier. Otherwise, it will be generated
	 */
	@Prop() readonly identifier: string
	/**
	 * Defines weather the wizard item can be collapsible
	 */
	@Prop() readonly collapsible: boolean = false
	/**
	 * Item annotation of the wizard
	 */
	@Prop() readonly annotation: string
	/**
	 * Item label of the wizard
	 */
	@Prop() readonly label: string
	/**
	 * Makes the wizard component disabled.
	 */
	@Prop() readonly disabled: boolean = false
	/**
	 * Defines whether the accordion is open or closed by button
	 */
	@Prop({ attribute: "is-expanded", mutable: true }) isExpanded = false
	/**
	 * Used to change the HTML tag in the accordion trigger for correct semantic structure
	 */
	@Prop({ attribute: "label-tag" }) readonly labelTag: string = "h3"
	/**
	 * Called when the accordion state changes
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<WizardItemEvent>

	@Watch("label")
	private validateLabel(newValue: string): void {
		if (!newValue) {
			govErrorLog(`[${WizardItemClass.root}]: Parameter label is required.`)
		}
	}

	@Watch("labelTag")
	private validateTriggerTag(newValue: string): void {
		const validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "span"]
		if (newValue) {
			if (!validTags.includes(newValue)) {
				govErrorLog(`[${WizardItemClass.root}]: Tag ${newValue} is not allowed.`)
			}
		}
	}

	@Watch("variant")
	private validateVariant(newValue: string): void {
		validateProp(WizardVariants, newValue, WizardItemClass.root)
	}

	private emmitChange(): void {
		this.govChange.emit({ expanded: this.isExpanded, component: WizardItemClass.root })
	}

	componentWillLoad(): void {
		this.validateLabel(this.label)
		this.validateVariant(this.variant)
		this.validateTriggerTag(this.labelTag)
	}

	render() {
		const triggerId = this.identifier || this.triggerId
		const LabelTag = this.labelTag
		const Tag = this.collapsible ? Tags.BUTTON : Tags.DIV
		const prefixSlot = this.h.hasSlot("prefix") && (<span class={WizardItemClass.prefix}><slot name="prefix" /></span>)

		const label = (
			<LabelTag class={WizardItemClass.title}>
				<span class={WizardItemClass.name}>
					<span class={WizardItemClass.label}>
						<span>{this.label}</span>
						{this.collapsible && <gov-icon class={WizardItemClass.arrow} name="chevron-down"></gov-icon>}
					</span>

					{this.annotation && <span class={WizardItemClass.annot}>{this.annotation}</span>}
				</span>
			</LabelTag>
		)

		return (
			<Host class={this.h.classes(WizardItemClass.root)} is-expanded={this.isExpanded} variant={this.variant} size={this.size} role="listitem" collapsible={this.collapsible}>
				{this.collapsible ? (
					<Fragment>
						{prefixSlot}
						<Tag
							id={triggerId}
							class={WizardItemClass.header}
							aria-expanded={booleanString(this.isExpanded)}
							aria-controls={this.contentId}
							disabled={this.disabled}
							aria-disabled={toBoolAttrIfDefined(this.disabled)}
							onClick={(e) => {
								e.preventDefault()
								e.stopPropagation()
								this.collapsible ? this.toggle() : false
							}}
						>
							{label}
						</Tag>
					</Fragment>
				) : (
					<Fragment>
						{prefixSlot}
						<div class={WizardItemClass.header}>{label}</div>
					</Fragment>
				)}
				{this.collapsible ? (
					<div
						class={WizardItemClass.content}
						id={this.contentId}
						aria-hidden={booleanString(!this.isExpanded)}
						hidden={!this.isExpanded}
						aria-labelledby={triggerId}
					>
						<slot />
					</div>
				) : (
					<div class={WizardItemClass.content} aria-hidden={booleanString(!this.isExpanded)} hidden={!this.isExpanded}>
						<slot />
					</div>
				)}
			</Host>
		)
	}

	/**
	 * Opening the Wizard
	 */
	@Method()
	async open(): Promise<void> {
		this.isExpanded = true
		this.emmitChange()
	}

	/**
	 * Closing the Wizard
	 */
	@Method()
	public async close(): Promise<void> {
		this.isExpanded = false
		this.emmitChange()
	}

	/**
	 * Wizard switch
	 */
	@Method()
	public async toggle(): Promise<void> {
		this.isExpanded = !this.isExpanded
		this.emmitChange()
	}

	/**
	 * Returns the current state of the component
	 */
	@Method()
	public async currentState(): Promise<boolean> {
		return this.isExpanded
	}
}
