import { TooltipPosition, TooltipSize, TooltipVariant } from "../../../core/src/components/gov-tooltip/constants"
import { renderStory, story } from "../helpers/storybook"
import { bindProps } from "../helpers/binding"
import { createIcon, basicIcons } from "../helpers/icons"

const meta = story(
	({ enums, bool, array, string }) => [
		enums("variant", undefined, TooltipVariant, TooltipVariant.PRIMARY),
		enums("size", undefined, TooltipSize, TooltipSize._M),
		enums("position", undefined, TooltipPosition, TooltipPosition.TOP),
		string("message", undefined, "Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus."),
		bool("as-icon", undefined, false),
		array("icon", undefined, basicIcons, undefined, { arg: "as-icon", truthy: true }),
		bool("inverse", undefined),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Tooltip", ...meta }

const PROPS_ITEM = [
	"variant",
	"size",
	"position",
	"inverse",
	"message",
]

const Template = (args) => {
	const container = document.createElement("div")
	container.style.minHeight = "300px"
	container.style.display = "flex"
	container.style.justifyContent = "center"
	container.style.alignItems = "center"

	const tooltip = document.createElement("gov-tooltip")

	if (args["as-icon"]) {
		tooltip.setAttribute("icon", "true")
		createIcon(args.icon, "prefix", undefined, tooltip)
	} else {
		tooltip.innerText = "Tooltip"
	}

	bindProps(tooltip, PROPS_ITEM, args)

	container.appendChild(tooltip)
	return container
}

export const Playground = renderStory(Template)

export const Icon = renderStory(Template, {
	"as-icon": true,
	icon: "basic/info-circle",
})

export const Size = renderStory(Template, {
	size: TooltipSize._S,
})

export const Variant = renderStory(Template, {
	variant: TooltipVariant.SECONDARY,
})

export const Inverse = renderStory(Template, {
	variant: TooltipVariant.SECONDARY,
	inverse: true,
})
