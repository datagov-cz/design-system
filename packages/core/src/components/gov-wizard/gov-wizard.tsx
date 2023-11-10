import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core"
import { validateProp } from "../../helpers/Validate/props"
import { WizardSizes, WizardSizesType, WizardClass, WizardItemClass } from "./constants"
import { GovWizardItemChangeEvent } from "./gov-wizard-item.d"
import { govHost } from "../../helpers/Dom/template"
import { GovHost } from "../../helpers/Dom/template.types"
import { validateWcagLabel } from "../../helpers/Validate/wcag"
import { canValidateWcagOnRender } from "../../helpers/Dom/win"
import { delay } from "../../utils/utils"

@Component({
	tag: "gov-wizard",
	styleUrl: "gov-wizard.scss",
})
export class GovWizard {
	private h: GovHost

	@Element() readonly host: HTMLGovWizardElement

	constructor() {
		this.h = govHost(this.host)
	}

	/**
	 * Size of wizard
	 */
	@Prop() readonly size?: WizardSizesType = "m"
	/**
	 * Adds accessible label for the wizard that is only shown for screen readers.
	 */
	@Prop({ attribute: "wcag-label" }) readonly wcagLabel: string
	/**
	 * String of id's that indicate alternative labels elements
	 */
	@Prop({ attribute: "wcag-labelled-by" }) readonly wcagLabelledBy: string
	/**
	 * Called when the wizard children state changes
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<GovWizardItemChangeEvent>

	@Watch("size")
	private validateSize(newValue: string): void {
		validateProp(WizardSizes, newValue, WizardClass.root)
	}

	componentWillLoad(): void {
		this.validateSize(this.size)
	}

	componentDidLoad() {
		this.host.querySelectorAll(WizardItemClass.root).forEach((child: HTMLGovWizardItemElement) => {
			child.setAttribute("size", this.size)
			/*
			child.addEventListener('gov-change', (e: GovWizardItemCustomEvent<GovWizardItemChangeEvent>) => {
				e.stopPropagation()
				this.govChange.emit(e.detail)
			})
			*/
		})
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	render() {
		return (
			<Host class={this.h.classes(WizardClass.root)} role="list" size={this.size}>
				<slot />
			</Host>
		)
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	public async validateWcag(): Promise<void> {
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, WizardClass.root)
	}
}
