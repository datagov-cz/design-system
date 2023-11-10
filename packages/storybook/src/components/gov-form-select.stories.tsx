import { FormInputSizes, FormInputVariants } from "../../../core/src/components/gov-form/input/constants"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { createIcon } from "../helpers/icons"

const meta = story(
	({ enums, string, bool }) => [
		enums("size", undefined, FormInputSizes, FormInputSizes._M),
		enums("variant", undefined, FormInputVariants, FormInputVariants.SECONDARY),
		string("label", undefined, "This is label of select"),
		string("prefix", undefined),
		string("sufix", undefined),
		string("message", undefined),
		bool("invalid", undefined, false),
		bool("success", undefined, false),
		bool("disabled", undefined, false),
	],
	{
		readme: null,
		actions: ["gov-focus", "gov-blur", "gov-select"],
	},
)

export default { title: "Components/Form Select", ...meta }

const PROPS_CONTROL = ["success", "disabled"]
const PROPS = ["variant", "size", "disabled", "invalid"]

const OPTIONS = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola"]

const Template = (args: any) => {
	const el = document.createElement("gov-form-select")

	OPTIONS.map((option) => {
		const item = document.createElement("option")
		item.setAttribute("value", option)
		item.innerHTML = option

		el.appendChild(item)
	})

	if (args["prefix"]) {
		const prefix = document.createElement("p")
		prefix.setAttribute("class", "gov-text--s")
		prefix.setAttribute("slot", "prefix")
		prefix.innerHTML = args["prefix"]

		el.appendChild(prefix)
	}
	if (args["sufix"]) {
		const sufix = document.createElement("p")
		sufix.setAttribute("class", "gov-text--s")
		sufix.setAttribute("slot", "sufix")
		sufix.innerHTML = args["sufix"]

		el.appendChild(sufix)
	}

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
	label: "This is label of select"
})
export const Control = renderStory(TemplateControl, {
	label: "This is label of select"
})

export const Invalid = renderStory(TemplateControl, {
	label: "This is label of select",
	invalid: true,
	message: "This field is required!",
})

export const Success = renderStory(TemplateControl, {
	label: "This is label of select",
	success: true,
})

export const Size = renderStory(TemplateControl, {
	label: "This is label of select",
	size: FormInputSizes._S,
})

export const Disabled = renderStory(TemplateControl, {
	label: "This is label of select",
	disabled: true,
})

export const Message = renderStory(TemplateControl, {
	label: "This is label of select",
	message: "Here you can put your name",
})

export const PrefixSufix = renderStory(TemplateControl, {
	label: "This is label of select",
	prefix: "Name",
	sufix: "Kč",
})

