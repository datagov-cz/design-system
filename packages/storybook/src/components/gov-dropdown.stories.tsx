import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { Position } from "../../../core/src/components/gov-button/dropdown/constants"
import { createButton } from "../helpers/generate"
import { ButtonSizes, ButtonVariants, Type } from "../../../core/src/components/gov-button/button/constants"
import { icons } from "../../../core/src/components/gov-icon/list"
import { createIcon } from "../helpers/icons"

const meta = story(
	({ enums, bool, string, array }) => [
		bool("open", undefined, false),
		enums("position", undefined, Position, Position.LEFT),

		string("copy", undefined, "More"),
		string("wcag-label", undefined, "What exactly happens when you click?"),
		enums("variant", undefined, ButtonVariants, ButtonVariants.PRIMARY),
		enums("type", undefined, Type, Type.SOLID),
		enums("size", undefined, ButtonSizes, ButtonSizes._M),
		array("left-icon", undefined, icons),
		array("right-icon", undefined, icons, "basic/chevron-down"),
	],
	{
		readme: null,
		actions: ["gov-change"],
	},
)

export default { title: "Components/Dropdown", ...meta }

const PROPS = ["open", "position"]
const PROPS_TRIGGER = ["wcag-label", "wcag-label", "variant", "type", "size", "left-icon", "right-icon"]

const Template = (args: any) => {
	const container = document.createElement("div")
	container.style.minHeight = "400px"
	const el = document.createElement("gov-dropdown")
	const ul = document.createElement("ul")
	ul.setAttribute("slot", "list")

	const button = createButton({ value: args.copy })
	args["right-icon"] && createIcon(args["right-icon"], "right-icon", undefined, button)
	args["left-icon"] && createIcon(args["left-icon"], "left-icon", undefined, button)
	bindProps(button, PROPS_TRIGGER, args)

	if (Array.isArray(args.items)) {
		args.items.map((item: any) => {
			const li = document.createElement("li")
			const button = createButton({
				wcagLabel: item.name,
				value: item.name,
				variant: item.variant,
				size: item.size,
				type: "base",
				rightIcon: "basic/chevron-right",
			})

			li.appendChild(button)
			ul.appendChild(li)
		})
	}

	el.appendChild(button)
	el.appendChild(ul)

	bindProps(el, PROPS, args)

	container.appendChild(el)
	return container
}

const items = (variant = false, size = false) => {
	return [
		{ name: "Home", variant: variant ? "secondary" : "secondary", size: size ? "s" : "m" },
		{ name: "Where to go next", variant: variant ? "success" : "secondary", size: size ? "m" : "m" },
		{ name: "Czech eGovernment", variant: variant ? "warning" : "secondary", size: size ? "l" : "m" },
		{ name: "Czech POINT", variant: variant ? "error" : "secondary", size: size ? "xl" : "m" },
	]
}

export const Playground = renderStory(Template, {
	items: items(),
})

export const Variants = renderStory(Template, {
	open: true,
	items: items(true),
})

export const Sizes = renderStory(Template, {
	open: true,
	items: items(false, true),
})
