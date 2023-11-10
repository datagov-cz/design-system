import { Component, Element, h, Host, Prop } from "@stencil/core"
import { govForm } from "../../../helpers/Dom/form"
import { GovForm } from "../../../helpers/Dom/form.types"
import { govHost } from "../../../helpers/Dom/template"
import { GovHost } from "../../../helpers/Dom/template.types"
import { createID, splitByWhitespace } from "../../../utils/string.utils"
import { FormControlClass, FormControlSizesType } from "./constants"

@Component({
	tag: "gov-form-control",
	styleUrl: "gov-form-control.scss",
})
export class GovFormControl {
	private readonly h: GovHost
	private f: GovForm
	private readonly controlId: string
	private observer: MutationObserver

	constructor() {
		this.h = govHost(this.host)
		this.f = govForm(this.h)
		this.controlId = createID("GovFormControl")
	}

	@Element() host: HTMLGovFormControlElement
	/**
	 * Defines the space between nested components.
	 */
	@Prop() readonly gap?: FormControlSizesType
	/**
	 * Form element identifier
	 */
	@Prop({ attribute: "identifier" }) readonly identifier: string
	/**
	 * Indicates the entered value of child form element does not conform to the format expected by the application.
	 */
	@Prop() readonly invalid: boolean = false
	/**
	/**
	 * Indicates the form element is disabled
	 */
	@Prop() readonly disabled: boolean = false
	/**
	/**
	 * Indicates the entered value of child form element does conform to the format expected by the application.
	 */
	@Prop() readonly success: boolean = false
	/**
	 * Use control as a fieldset for better accessibility.
	 * Note: Don't forget to set the legend attribute of the gov-form-label component
	 */
	@Prop() readonly fieldset: boolean = false
	/**
	 * Form element size.
	 */
	@Prop() readonly size?: FormControlSizesType = "m"

	componentDidRender() {
		this.passChildAttrs()
		this.invalidChildAttrs()
		this.syncControlMessages()
		this.formElementDescriptionControl()
	}

	disconnectedCallback(): void {
		this.observer?.disconnect()
	}

	private passChildAttrs() {
		const formElements = [
			"gov-form-select",
			"gov-form-input",
			"gov-form-switch",
			"gov-form-checkbox",
			"gov-form-radio",
			"gov-form-multi-select",
			"gov-form-file",
			"gov-form-search",
		]
		this.h.passChildAttr(formElements, "success", this.success)

		if (this.f.hasGroupChildren === false) {
			this.h.passChildAttr([...formElements, "gov-form-label"], "identifier", this.identifier || this.controlId)
		}
	}

	private invalidChildAttrs() {
		const formElements = [
			"gov-form-select",
			"gov-form-input",
			"gov-form-switch",
			"gov-form-checkbox",
			"gov-form-radio",
			"gov-form-multi-select",
			"gov-form-file",
			"gov-form-search",
		]
		this.h.passChildAttr(formElements, "invalid", this.invalid)

		if (this.f.hasGroupChildren === false) {
			this.h.passChildAttr([...formElements, "gov-form-label"], "identifier", this.identifier || this.controlId)
		}
	}

	private formElementDescriptionControl() {
		const bottomSlot = this.host.querySelector("." + FormControlClass.bottom)
		if (!bottomSlot) return
		this.observer = new MutationObserver(
			function() {
				this.syncControlMessages()
			}.bind(this),
		)

		this.observer.observe(bottomSlot, { childList: true })
	}

	private syncControlMessages() {
		Promise.all(this.f.messageElements.map((message: HTMLGovFormMessageElement) => message.identifier())).then((ids: string[]) => {
			this.f.mainElementsInControl.forEach((element: Element) => {
				const currentValue = splitByWhitespace(element.getAttribute("wcag-described-by"))
				element.removeAttribute("wcag-described-by")
				if (Array.isArray(currentValue)) {
					currentValue.forEach(id => (id.indexOf("GovFormMessage") === -1 ? ids.push(id) : null))
				}
				if (ids.length) {
					element.setAttribute("wcag-described-by", ids.join(" "))
				}
			})
		})
	}

	render() {
		const Tag = this.fieldset ? "fieldset" : "div"
		return (
			<Host size={this.size} class={this.h.classes(FormControlClass.root)}>
				<Tag class={FormControlClass.holder}>
					{this.h.hasSlot("top") && <slot name="top"></slot>}
					<slot></slot>
					{this.h.hasSlot("bottom") && (
						<div class={FormControlClass.bottom}>
							<slot name="bottom" />
						</div>
					)}
				</Tag>
			</Host>
		)
	}
}
