import {
	ButtonSizes,
	ButtonTarget,
	ButtonVariants,
	NativeType,
	Type,
} from "../../../core/src/components/gov-button/button/constants"
import { createIcon, icons } from "../helpers/icons"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ array, string, bool, enums }) => [
		string("copy", undefined, "Button"),
		string("wcag-label", undefined, "What exactly happens when you click?"),
		enums("variant", undefined, ButtonVariants, ButtonVariants.PRIMARY),
		enums("type", undefined, Type, Type.SOLID),
		enums("size", undefined, ButtonSizes, ButtonSizes._M),
		array("left-icon", undefined, icons),
		array("right-icon", undefined, icons),
		bool("expanded", undefined, false),
		bool("inverse", undefined, false),
		bool("disabled", undefined, false),
		enums("native-type", undefined, NativeType),
		string("href", undefined),
		enums("target", undefined, ButtonTarget),
		array("loading", undefined, ["true", "false"], undefined),
		string("identifier", undefined),
	],
	{
		readme: null,
		actions: ["gov-click", "gov-focus", "gov-blur"],
	},
)

export default { title: "Components/Button", ...meta }

const PROPS = [
	"variant",
	"size",
	"type",
	"wcag-label",
	"href",
	"target",
	"disabled",
	"expanded",
	"native-type",
	"loading",
	"inverse",
	"identifier",
]

const Template = (args: any) => {
	const el = document.createElement("gov-button")
	el.innerHTML = args.copy

	createIcon(args["left-icon"], "left-icon", null, el)
	createIcon(args["right-icon"], "right-icon", null, el)

	bindProps(el, PROPS, args)
	return el
}

export const Primary = renderStory(Template, {
	variant: ButtonVariants.PRIMARY,
})
export const Secondary = renderStory(Template, {
	variant: ButtonVariants.SECONDARY,
})
export const Success = renderStory(Template, {
	variant: ButtonVariants.SUCCESS,
})
export const Warning = renderStory(Template, {
	variant: ButtonVariants.WARNING,
})
export const Error = renderStory(Template, {
	variant: ButtonVariants.ERROR,
})
export const Inverse = renderStory(Template, {
	inverse: true,
})
export const Link = renderStory(Template, {
	href: "https://gov.cz/",
	target: "_blank",
})
export const ButtonLink = renderStory(Template, {
	type: Type.LINK,
})
