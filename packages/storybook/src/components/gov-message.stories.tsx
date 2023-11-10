import { createIcon, icons } from "../helpers/icons"
import { MessageVariants } from "../../../core/src/components/gov-message/constants"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ array, enums, string, bool }) => [
		array("icon", undefined, icons),
		enums("variant", undefined, MessageVariants, MessageVariants.PRIMARY),
		string(
			"copy",
			undefined,
			"<p>A planned server outage will take place from December 20, 2020 at 2:00 p.m. until December 20, 2020 at 3:00 p.m. During this period, logging in to the Citizen Portal via data box will be unavailable. More information <a href=\"#\">here</a>.</p>",
		),
		bool("inverse", undefined),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Message", ...meta }

const PROPS = ["variant", "inverse"]

const Template = (args) => {
	const el = document.createElement("gov-message")

	el.innerHTML = args.copy
	args.icon && createIcon(args.icon, "icon", undefined, el)

	bindProps(el, PROPS, args)
	return el
}

export const Primary = renderStory(Template, {
	variant: MessageVariants.PRIMARY,
})
export const Secondary = renderStory(Template, {
	variant: MessageVariants.SECONDARY,
})
export const Success = renderStory(Template, {
	variant: MessageVariants.SUCCESS,
})
export const Warning = renderStory(Template, {
	variant: MessageVariants.WARNING,
})
export const Error = renderStory(Template, {
	variant: MessageVariants.ERROR,
})
export const Inverse = renderStory(Template, {
	inverse: true,
})
