import { AccordionSizes, AccordionVariants } from "../../../core/src/components/gov-accordion/constants"
import { bindProps } from "../helpers/binding"
import { createIcon, icons } from "../helpers/icons"
import { getCopy } from "../helpers/copy"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ string, array, bool, enums }) => [
		string("label", undefined, "Gov.cz design system"),
		string("annotation", undefined, undefined),
		enums("variant", undefined, AccordionVariants, AccordionVariants.PRIMARY),
		enums("size", undefined, AccordionSizes, AccordionSizes._M),
		array("icon", undefined, icons),
		bool("disabled", undefined, false),
		bool("is-expanded", undefined, false),
		array("trigger-tag", undefined, ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"], "h2"),
		string("identifier", undefined, undefined),
	],
	{
		readme: null,
		actions: ["gov-change"],
	},
)

export default { title: "Components/Accordion", ...meta }

const PROPS = ["variant", "size", "wcag-label", "no-border"]
const PROPS_ITEM = ["disabled", "is-expanded", "identifier", "size", "variant"]

const Template = (args: any) => {
	const el = document.createElement("gov-accordion-item")
	el.innerHTML = getCopy()
	args.icon && createIcon(args.icon, "icon", null, el)
	bindProps(el, PROPS_ITEM, args)

	if (args["trigger-tag"]) {
		const tag = document.createElement(args["trigger-tag"] ?? "h3")
		tag.setAttribute("slot", "label")
		tag.innerHTML = args.label

		el.appendChild(tag)
	}

	if (args["annotation"]) {
		const annotation = document.createElement("p")
		annotation.setAttribute("slot", "annotation")
		annotation.innerHTML = args["annotation"]

		el.appendChild(annotation)
	}

	if (args["badge"]) {
		const badge = document.createElement("gov-badge")
		badge.setAttribute("variant", "primary")
		badge.setAttribute("inverse", "true")
		badge.setAttribute("size", "s")
		badge.setAttribute("slot", "suffix")

		badge.innerHTML = "Top"

		el.appendChild(badge)
	}

	return el
}


const TemplateList = (args: any) => {
	const el = document.createElement("gov-accordion")

	if (Array.isArray(args?.items)) {
		args?.items.map((childArgs: any) => {
			delete childArgs["size"]
			delete childArgs["variant"]
			const item = Template(childArgs)
			el.appendChild(item)
		})
	}

	bindProps(el, PROPS, args)
	return el
}

const items = (annotation = false, icon = false, badge = false, disabled = false) => {
	return [
		{
			label: "Legislation",
			"trigger-tag": "h3",
			icon: icon ? "complex/packet" : undefined,
			badge: badge ? true : undefined,
			disabled: disabled ? true : undefined,
		},
		{
			label: "Appeal options",
			"trigger-tag": "h3",
			icon: icon ? "complex/pills" : undefined,
			annotation: annotation ? "In some cases, it is necessary to describe the problem in detail to better guide the user." : undefined,
		},
		{
			label: "Negotiating language",
			"trigger-tag": "h3",
			icon: icon ? "complex/holiday" : undefined,
			badge: badge ? true : undefined,
		},
		{
			label: "Options for processing your application at a nearby office",
			"trigger-tag": "h3",
			icon: icon ? "complex/illness" : undefined,
			disabled: disabled ? true : undefined,
		},
	]
}

export const Playground = renderStory(Template, {})

export const Variant = renderStory(TemplateList, {
	size: AccordionSizes._M,
	variant: AccordionVariants.SECONDARY,
	"wcag-label": "Basic information about the gov.cz design system",
	items: items(),
})

export const Size = renderStory(TemplateList, {
	size: AccordionSizes._XS,
	variant: AccordionVariants.PRIMARY,
	"wcag-label": "Basic information about the gov.cz design system",
	items: items(),
})


export const Annotation = renderStory(TemplateList, {
	size: AccordionSizes._S,
	variant: AccordionVariants.PRIMARY,
	"wcag-label": "Basic information about the gov.cz design system",
	items: items(true),
})

export const Icon = renderStory(TemplateList, {
	size: AccordionSizes._M,
	variant: AccordionVariants.PRIMARY,
	"wcag-label": "Basic information about the gov.cz design system",
	items: items(false, true),
})

export const Badge = renderStory(TemplateList, {
	size: AccordionSizes._S,
	variant: AccordionVariants.PRIMARY,
	"wcag-label": "Basic information about the gov.cz design system",
	items: items(false, false, true),
})

export const Disabled = renderStory(TemplateList, {
	size: AccordionSizes._S,
	variant: AccordionVariants.PRIMARY,
	"wcag-label": "Basic information about the gov.cz design system",
	items: items(false, false, false, true),
})

export const NoBorder = renderStory(TemplateList, {
	size: AccordionSizes._M,
	variant: AccordionVariants.PRIMARY,
	"wcag-label": "Basic information about the gov.cz design system",
	"no-border": true,
	items: items(),
})
