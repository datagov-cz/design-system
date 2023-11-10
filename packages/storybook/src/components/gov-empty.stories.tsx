import { createIcon, icons } from "../helpers/icons"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { createButton } from "../helpers/generate"

const meta = story(
	({ array, string }) => [
		array("icon", undefined, icons, "complex/confusion"),
		array("align", undefined, ["left", "center", "right"], "left"),
		string("label", undefined, "<p class=\"gov-text--2xl\">Sorry, no data available!</p>"),
		string(
			"copy", undefined,
			"<p class=\"gov-text--m gov-color--secondary-700\">There will be a scheduled server outage from December 20, 2020 at 2:00 p.m. to December 20, 2020 at 3:00 p.</p>",
		),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Empty", ...meta }

const PROPS = ["label", "align"]

const Template = (args) => {
	const el = document.createElement("gov-empty")
	const spacer = document.createElement("gov-spacer")
	const button = createButton({ value: "Refresh", wcagLabel: "Reload list of items" })

	spacer.setAttribute("size", "l")

	el.innerHTML = args.label + args.copy
	el.appendChild(spacer)
	el.appendChild(button)

	args.icon && createIcon(args.icon, "icon", undefined, el)

	bindProps(el, PROPS, args)
	return el
}

export const Playground = renderStory(Template)
