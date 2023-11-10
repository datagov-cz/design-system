import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { createIcon } from "../helpers/icons"
import { FormSelectSizes } from "../../../core/src/components/gov-form/select/constants"

const meta = story(
	({ enums, bool }) => [
		enums("size", undefined, FormSelectSizes, FormSelectSizes._M),
		bool("invalid", undefined, false),
		bool("disabled", undefined, false),
	],
	{
		readme: null,
		actions: ["gov-focus", "gov-blur", "gov-select"],
	},
)

export default { title: "Components/Form Multi Select", ...meta }

const PROPS_CONTROL = ["success", "disabled"]
const PROPS = ["size", "disabled", "invalid"]

const OPTIONS = ["Afghanistan", "Bahamas", "Czechia", "Denmark", "Estonia", "Finland", "Georgia", "Hungary", "Israel"]

const Template = (args: any) => {
	const el = document.createElement("gov-form-multi-select")

	OPTIONS.map((option) => {
		const item = document.createElement("option")
		item.setAttribute("value", option)
		item.innerHTML = option

		el.appendChild(item)
	})

	bindProps(el, PROPS, args)

	return el
}

const TemplateControl = (args: any) => {
	const control = document.createElement("gov-form-control")
	const label = document.createElement("gov-form-label")
	const el = Template(args)

	label.innerHTML = args.label
	label.setAttribute("slot", "top")
	label.setAttribute("size", args.size)

	if (args.message) {
		const message = document.createElement("gov-form-message")
		message.innerHTML = args.message
		message.setAttribute("slot", "bottom")

		if (args.message) {
			message.setAttribute("variant", "secondary")
			control.appendChild(message)
		}

		if (args.invalid) {
			message.setAttribute("variant", "error")
			createIcon("basic/exclamation-triangle-fill", "icon", undefined, message)
			control.appendChild(message)
		}
	}

	control.appendChild(el)
	control.appendChild(label)

	bindProps(control, PROPS_CONTROL, args)

	return control
}

export const Playground = renderStory(Template, {
	label: "This is label of select",
})
export const Control = renderStory(TemplateControl, {
	label: "This is label of select",
})

export const Invalid = renderStory(TemplateControl, {
	invalid: true,
	label: "This is label of select",
	message: "This field is required!",
})

export const Success = renderStory(TemplateControl, {
	label: "This is label of select",
	success: true,
})

export const Size = renderStory(TemplateControl, {
	label: "This is label of select",
	size: FormSelectSizes._L,
})

export const Disabled = renderStory(TemplateControl, {
	label: "This is label of select",
	disabled: true,
})

export const Message = renderStory(TemplateControl, {
	label: "This is label of select",
	message: "Here you can put your name",
})
