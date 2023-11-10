import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import { createIcon } from "../helpers/icons"

const meta = story(
	({ string }) => [
		string("wcag-label", undefined, "You are in the following level"),
		string("wcag-label-by", undefined),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Breadcrumbs", ...meta }

const PROPS = ["wcag-label", "wcag-labeled-by"]

const items = ["Home", "Where to go next", "Czech eGovernment", "Czech POINT"]

const Template = (args: any) => {
	const el = document.createElement("gov-breadcrumbs")
	const ul = document.createElement("ul")

	items.map((item, i) => {
		const icon = createIcon("basic/chevron-right")
		const li = document.createElement("li")
		let label = document.createElement("strong")
		if (items.length - 1 !== i) {
			label = document.createElement("a")
			label.setAttribute("href", "#")
		}

		label.innerHTML = item

		li.appendChild(icon)
		li.appendChild(label)

		ul.appendChild(li)
	})

	el.appendChild(ul)

	bindProps(el, PROPS, args)
	return el
}

export const Playground = renderStory(Template)
