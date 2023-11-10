import { renderStory, story } from "../helpers/storybook"
import { ControlGroupVariants } from "../../../core/src/components/gov-control-group/constants"
import { createButton, createInput, createSelect } from "../helpers/generate"
import { bindProps } from "../helpers/binding"

const meta = story(
	({ enums, bool }) => [
		bool("no-border", undefined, false),
		enums("variant", undefined, ControlGroupVariants, ControlGroupVariants.PRIMARY),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Control Group", ...meta }

const PROPS = ["no-border", "variant"]

const Template = (args: any) => {
	const el = document.createElement("gov-control-group")
	el.appendChild(createSelect({ variant: args["variant"] }))
	el.appendChild(createInput({ variant: args["variant"], placeholder: 'Enter city' }))
	el.appendChild(createButton({ value: "Verify", variant: args["variant"] }))
	el.appendChild(createButton({ rightIcon: "basic/info-circle", variant: args["variant"] }))

	bindProps(el, PROPS, args)
	return el
}

export const Playground = renderStory(Template)
