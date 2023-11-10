import { StatsBarVariants } from "../../../core/src/components/gov-statsbar/constants"
import { bindProps } from "../helpers/binding"
import { createIcon, icons } from "../helpers/icons"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ array, enums, string }) => [
		enums("variant", undefined, StatsBarVariants, StatsBarVariants.PRIMARY),
		array("icon-position", undefined, ["left"], undefined),
		array("icon", undefined, icons, "complex/id-card"),
		string("value", undefined, "215 mil"),
		string("text", undefined, "data messages"),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Statsbar", ...meta }

const PROPS = ["variant", "icon-position"]

const Template = (args, useContainer = true) => {
	const container = document.createElement("gov-statsbar")
	const el = document.createElement("gov-statsbar-item")
	el.innerText = args.value
	args.icon && createIcon(args.icon, "icon", null, el)

	if (args.text) {
		const span = document.createElement("span")
		span.innerHTML = args.text
		span.setAttribute("slot", "text")
		el.appendChild(span)
	}

	if (useContainer) {
		container.appendChild(el)
		bindProps(container, PROPS, args)
		return container
	}

	return el
}

const TemplateList = (args) => {
	const el = document.createElement("gov-statsbar")

	if (Array.isArray(args.items)) {
		args.items.map((item) => {
			const statsBarItem = Template(item, false)
			el.appendChild(statsBarItem)
		})
	}

	bindProps(el, PROPS, args)

	return el
}

const items = (icon = false, text = true) => {
	return [
		{
			value: "210m",
			text: text ? "data messages" : undefined,
			icon: icon ? "complex/id-card" : undefined,
		},
		{
			value: "1m",
			text: text ? "data boxes" : undefined,
			icon: icon ? "complex/energy" : undefined,
		},
		{
			value: "967k",
			text: text ? "hours saved in queues" : undefined,
			icon: icon ? "complex/covid" : undefined,
		},
		{
			value: "12m",
			text: text ? "of saved crowns" : undefined,
			icon: icon ? "complex/doc-taxes" : undefined,
		},
	]
}

export const Playground = renderStory(Template)

export const List = renderStory(TemplateList, {
	items: items(),
})

export const Variants = renderStory(TemplateList, {
	variant: StatsBarVariants.SECONDARY,
	items: items(),
})

export const Icons = renderStory(TemplateList, {
	items: items(true),
})

export const IconsLeft = renderStory(TemplateList, {
	"icon-position": "left",
	items: items(true),
})

export const NoText = renderStory(TemplateList, {
	items: items(true, false),
})
