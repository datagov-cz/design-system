import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { icons } from "../../../core/src/components/gov-icon/list"
import { createIcon } from "../helpers/icons"
import { ButtonTarget } from "../../../core/src/components/gov-button/button/constants"

const meta = story(
	({ bool, string, array, enums }) => [
		string("title", undefined, "Diseases"),
		string("content", undefined, "Finding yourself unable to work is not a pleasant experience. Find out how the state can help you."),
		array("icon", undefined, icons, "complex/illness"),
		string("href", undefined),
		enums("target", undefined, ButtonTarget),
		array("columns", undefined, [undefined, "1", "2", "3", "4"], undefined),
		bool("no-border", undefined, false),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Tile", ...meta }

const PROPS = ["no-border", "columns"]
const PROPS_ITEM = ["href", "target"]

const Template = (args: any) => {
	const el = document.createElement("gov-tile")


	if (args["content"]) {
		const p = document.createElement("p")
		p.innerHTML = args["content"]

		el.appendChild(p)
	}

	if (args["title"]) {
		const title = document.createElement("h3")
		title.setAttribute("slot", "title")
		title.innerHTML = args["title"]

		el.appendChild(title)
	}

	args.icon && createIcon(args.icon, "icon", undefined, el)

	bindProps(el, PROPS_ITEM, args)
	return el
}

const TemplateList = (args: any) => {
	const el = document.createElement("gov-tiles")

	if (Array.isArray(args.items)) {
		args.items.map((item: any) => el.appendChild(Template(item)))
	}

	bindProps(el, PROPS, args)
	return el
}

const items = (title = true, icon = false, link = false, content = true) => {
	return [
		{
			title: title ? "Diseases" : undefined,
			content: content ? "Finding yourself unable to work is not a pleasant experience. Find out how the state can help you." : undefined,
			icon: icon ? "complex/packet" : undefined,
			href: link ? "https://gov.cz/" : undefined,
		},
		{
			title: title ? "Covid portal" : undefined,
			content: content ? "Current government measures elaborated in a comprehensible way into common life situations." : undefined,
			icon: icon ? "complex/pills" : undefined,
			href: link ? "https://gov.cz/" : undefined,
		},
		{
			title: title ? "Birth of a child" : undefined,
			content: content ? "See what you need and can deal with when you are expecting a baby." : undefined,
			icon: icon ? "complex/holiday" : undefined,
			href: link ? "https://gov.cz/" : undefined,
		},
		{
			title: title ? "Change of permanent residence" : undefined,
			content: content ? "Options for processing your application at a nearby office." : undefined,
			icon: icon ? "complex/illness" : undefined,
			href: link ? "https://gov.cz/" : undefined,
		},
	]
}

export const Playground = renderStory(Template)
export const List = renderStory(TemplateList, {
	items: items(true, true),
})

export const Links = renderStory(TemplateList, {
	items: items(true, true, true),
})

export const NoBorder = renderStory(TemplateList, {
	"no-border": true,
	items: items(false, true, true),
})

export const NoContent = renderStory(TemplateList, {
	"no-border": false,
	items: items(true, true, true, false),
})
export const Columns = renderStory(TemplateList, {
	columns: 2,
	items: items(true, true, true, false),
})
