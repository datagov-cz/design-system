import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ string }) => [
		string("message", undefined, "Loading..."),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Loading", ...meta }

const Template = (args) => {
	const container = document.createElement("div")
	container.style.height = "600px"
	const el = document.createElement("gov-loading")

	if (args["message"]) {
		el.innerHTML = args["message"]
	}

	container.appendChild(el)

	return container
}

export const Playground = renderStory(Template)
