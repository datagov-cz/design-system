import { SpacerBreakpoints, SpacerSize } from "../../../core/src/components/gov-spacer/constants"
import { renderStory, story } from "../helpers/storybook"
import { bindProps } from "../helpers/binding"

const meta = story(
	({ enums }) => [
		enums("size", undefined, SpacerSize, SpacerSize._M),
		enums("breakpoint", undefined, SpacerBreakpoints, undefined),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Spacer", ...meta }

const PROPS = ["size", "breakpoint"]

const Template = (args) => {
	const el = document.createElement("gov-spacer")

	el.style.background = '#f5f5f5'

	bindProps(el, PROPS, args)
	return el
}

export const Playground = renderStory(Template)
