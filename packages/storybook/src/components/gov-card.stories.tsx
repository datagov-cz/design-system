import { bindProps } from "../helpers/binding"
import { createIcon, icons } from "../helpers/icons"
import { getLabel } from "../helpers/copy"
import { renderStory, story } from "../helpers/storybook"
import { backgroundTokenClasses } from "../../../core/src/core/constants/tokens"

const meta = story(
	({ array, string, bool }) => [
		bool("promotion", undefined),
		bool("collapsible", undefined, false, { arg: "promotion", truthy: false }),
		string("label", undefined, "Design system CE", { arg: "promotion", truthy: false }),
		string("wcag-trigger-label", undefined, "View more details on the panel content", { arg: "collapsible", truthy: true }),
		bool("expanded", undefined, false, { arg: "collapsible", truthy: true }),
		string("image-url", undefined),
		string(
			"copy",
			undefined,
			"A design system is a scenario by which a Digital and Information Agency designs and develops websites and digital products. The Design System is intended to help other teams create digital products more quickly and consistently across government.",
		),
		string("footer", undefined),
		array("icon", undefined, icons, undefined, { arg: "promotion", truthy: true }),
		array("background-token", undefined, backgroundTokenClasses, undefined),
	],
	{
		readme: null,
		actions: ["gov-toggle"],
	},
)
export default { title: "Components/Card", ...meta }

const PROPS = ["label", "expanded", "collapsible", "wcag-trigger-label", "promotion"]

const Template = (args: any) => {
	const card = document.createElement("gov-card")

	card.innerHTML = args.copy

	if (args["background-token"]) {
		card.classList.add(args["background-token"])
	}

	args.icon && createIcon(args.icon, "icon", null, card)

	if (args.footer) {
		const paragraph = document.createElement("p")
		paragraph.setAttribute("slot", "footer")
		paragraph.innerHTML = args.footer

		card.appendChild(paragraph)
	}

	if (args["image-url"]) {
		const image = document.createElement("img")
		image.setAttribute("slot", "img")
		image.setAttribute("alt", "")
		image.setAttribute("src", args["image-url"])

		card.appendChild(image)
	}

	if (args.promotion) {
		const button = document.createElement("gov-button")
		button.setAttribute("variant", "primary")
		button.setAttribute("slot", "btn")
		button.setAttribute("type", "solid")
		button.setAttribute("size", "m")
		button.setAttribute("wcag-label", "View more information about the promo banner")
		button.innerHTML = "More information"

		card.appendChild(button)
	}

	bindProps(card, PROPS, args)
	return card
}

export const Clear = renderStory(Template, { label: "" })
export const DesignToken = renderStory(Template, { "background-token": "gov-bg--primary-200" })
export const Collapsible = renderStory(Template, { collapsible: true })
export const Footer = renderStory(Template, { footer: getLabel() })
export const Image = renderStory(Template, { "image-url": "https://picsum.photos/536/240" })
export const Promotion = renderStory(Template, {
	label: undefined,
	promotion: true,
	icon: "complex/car",
})
