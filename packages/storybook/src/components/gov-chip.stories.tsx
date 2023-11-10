import {
	ButtonSizes,
	ButtonTarget,
	ButtonVariants,
	NativeType,
} from "../../../core/src/components/gov-button/button/constants"
import { createIcon, icons } from "../helpers/icons"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ array, string, bool, enums }) => [
		string("copy", undefined, "Chip"),
		string("wcag-label", undefined, "What exactly happens when you click?"),
		enums("variant", undefined, ButtonVariants, ButtonVariants.PRIMARY),
		enums("size", undefined, ButtonSizes, ButtonSizes._M),
		array("tag", undefined, ["span", "a", "button"], "span"),
		array("left-icon", undefined, icons),
		array("right-icon", undefined, icons),
		bool("inverse", undefined, false),
		bool("disabled", undefined, false, { arg: "tag", eq: "button" }),
		enums("native-type", undefined, NativeType, undefined, { arg: "tag", eq: "button" }),
		string("href", undefined, undefined, { arg: "tag", eq: "a" }),
		enums("target", undefined, ButtonTarget, undefined, { arg: "tag", eq: "a" }),
		string("identifier", undefined),
	],
	{
		readme: null,
		actions: ["gov-click"],
	},
)

export default { title: "Components/Chip", ...meta }

const PROPS = [
	"variant",
	"size",
	"wcag-label",
	"href",
	"target",
	"disabled",
	"native-type",
	"inverse",
	"identifier",
	"tag",
]

const Template = (args: any) => {
	const el = document.createElement("gov-chip")
	el.innerHTML = args.copy

	createIcon(args["left-icon"], "left-icon", null, el)

	if (args["closable"]) {
		const button = document.createElement("gov-button")
		const icon = document.createElement("gov-icon")
		button.setAttribute("slot", "right")
		button.setAttribute("variant", args.variant)
		button.setAttribute("size", args.size)
		button.setAttribute("type", args.inverse ? "base" : "solid")
		button.setAttribute("wcag-label", "Remove label")

		icon.setAttribute("slot", "right-icon")
		icon.setAttribute("name", "x-lg")

		button.appendChild(icon)
		el.appendChild(button)
	} else {
		createIcon(args["right-icon"], "right-icon", null, el)
	}

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
	tag: "a",
	href: "https://gov.cz/",
	target: "_blank",
})
export const Closable = renderStory(Template, {
	closable: true,
})
