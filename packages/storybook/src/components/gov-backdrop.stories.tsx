import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ string, bool }) => [
		string("wcag-label", undefined, "What exactly happens when you click?"),
		string("wcag-labelled-by", undefined),
		bool("inverse", undefined, false),
	],
	{
		readme: null,
		actions: ["gov-click"],
	},
)

export default { title: "Components/Backdrop", ...meta }

const PROPS = [
	"wcag-label",
	"wcag-labelled-by",
	"inverse",
]

const Template = (args: any) => {
	const container = document.createElement('div')
	container.style.minHeight = '400px'
	container.style.display = 'block'

	const el = document.createElement("gov-backdrop")
	bindProps(el, PROPS, args)

	container.appendChild(el)
	return container
}

export const Playground = renderStory(Template)
