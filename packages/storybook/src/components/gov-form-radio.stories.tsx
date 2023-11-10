import { FormInputSizes } from "../../../core/src/components/gov-form/input/constants"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { createIcon } from "../helpers/icons"
import { FormRadioSizes } from "../../../core/src/components/gov-form/radio/constants"

const meta = story(
	({ enums, string, bool }) => [
		enums("size", undefined, FormRadioSizes, FormRadioSizes._M),
		string("value", undefined),
		string("label", undefined, "This is label of input"),
		bool("invalid", undefined, false),
		bool("disabled", undefined, false),
		string("name", undefined, "list-radio"),
	],
	{
		readme: null,
		actions: ["gov-focus", "gov-blur", "gov-change"],
	},
)

export default { title: "Components/Form Radio", ...meta }

const PROPS_CONTROL = ["success", "disabled"]
const PROPS = ["value", "size", "disabled", "invalid", "no-label", "name"]

const Template = (args: any) => {
	const el = document.createElement("gov-form-radio")

	if (args["label"]) {
		const label = document.createElement("gov-form-label")
		label.setAttribute("size", args.size)
		label.setAttribute("slot", "label")
		label.innerHTML = args["label"]

		el.appendChild(label)
	}

	bindProps(el, PROPS, args)

	return el
}

const TemplateControl = (args: any) => {
	const control = document.createElement("gov-form-control")
	let el = null

	if (args["list"] && Array.isArray(args["list"])) {
		const group = document.createElement("gov-form-group")
		group.setAttribute("gap", args.size)
		args["list"].map((item) => {
			const el = Template({ ...args, label: item })
			group.appendChild(el)
		})
		el = group
	} else {
		el = Template(args)
	}


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

	bindProps(control, PROPS_CONTROL, args)

	return control
}

const OPTIONS = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola"]

export const Playground = renderStory(Template)
export const Control = renderStory(TemplateControl)

export const Invalid = renderStory(TemplateControl, {
	invalid: true,
	message: "This field is required!",
})

export const Success = renderStory(TemplateControl, {
	success: true,
})

export const Size = renderStory(TemplateControl, {
	label: "Small size of input",
	size: FormInputSizes._S,
})

export const Disabled = renderStory(TemplateControl, {
	disabled: true,
})

export const Message = renderStory(TemplateControl, {
	message: "Here you can put your name",
})

export const NoLabel = renderStory(TemplateControl, {
	label: undefined,
	"no-label": true,
})

export const List = renderStory(TemplateControl, {
	list: OPTIONS,
	message: "Here you can put your name",
})
