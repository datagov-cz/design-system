import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { FormInputSizes, FormInputVariants } from "../../../core/src/components/gov-form/input/constants"
import { createButton } from "../helpers/generate"

const meta = story(
	({ enums, string }) => [
		enums("size", undefined, FormInputSizes, FormInputSizes._M),
		enums("variant", undefined, FormInputVariants, FormInputVariants.PRIMARY),
		string("placeholder", undefined),
	],
	{
		readme: null,
		actions: ["gov-focus", "gov-blur", "gov-input", "gov-keyup"],
	},
)

export default { title: "Components/Form Search", ...meta }

const PROPS_SEARCH = ["variant"]
const PROPS_INPUT = ["size"]


const Template = (args: any) => {
	const control = document.createElement("gov-form-control")
	const search = document.createElement("gov-form-search")
	const input = document.createElement("gov-form-input")
	const group = document.createElement("gov-form-group")
	const cta = createButton({ variant: args.variant, "size": args.size, value: "Search", type: "solid", slot: "button" })

	input.setAttribute("slot", "input")
	input.setAttribute("placeholder", args.placeholder)

	search.appendChild(input)
	group.appendChild(search)
	search.appendChild(cta)
	control.appendChild(group)

	bindProps(search, PROPS_SEARCH, args)
	bindProps(input, PROPS_INPUT, args)

	return control
}

export const Playground = renderStory(Template)

export const Variant = renderStory(Template, {
	variant: FormInputVariants.SECONDARY,
})

export const Size = renderStory(Template, {
	label: "Small size of search",
	size: FormInputSizes._XL,
})

export const Placeholder = renderStory(Template, {
	placeholder: "This is placeholder of input",
})
