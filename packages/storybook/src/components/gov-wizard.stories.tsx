import { bindProps } from "../helpers/binding"
import { createIcon, icons } from "../helpers/icons"
import { getCopy } from "../helpers/copy"
import { renderStory, secondaryBackground, story } from "../helpers/storybook"
import { WizardSizes, WizardVariants } from "../../../core/src/components/gov-wizard/constants"

const meta = story(
	({ array, bool, enums, string }) => [
		string("label", undefined, "Details of the application"),
		enums("variant", undefined, WizardVariants, WizardVariants.PRIMARY),
		enums("size", undefined, WizardSizes, WizardSizes._M),
		array("label-tag", undefined, ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"], "h3"),
		string("content", undefined),
		string("annotation", undefined, "Reason for application: expiry of licence"),
		string("prefix", undefined, "1"),
		array("icon", undefined, icons),
		bool("disabled", undefined, false),
		bool("collapsible", undefined, false),
		bool("is-expanded", undefined, false),
		string("wcag-label", undefined, "Aid application procedure"),
	],
	{
		readme: null,
		actions: ["gov-change"],
	},
)

export default { title: "Components/Wizard", ...meta }

const PROPS = ["size", "wcag-label"]
const PROPS_ITEM = [
	"variant",
	"annotation",
	"disabled",
	"label",
	"collapsible",
	"prefix",
	"is-expanded",
	"label-tag",
	"content",
]

const Template = (args: any, withParent = false) => {
	const item = document.createElement("gov-wizard-item")
	item.innerHTML = args.content || getCopy()

	if (args.icon) {
		createIcon(args.icon, "prefix", undefined, item)
	} else if (args.prefix) {
		const prefix = document.createElement("span")
		prefix.setAttribute("slot", "prefix")
		prefix.innerHTML = args.prefix
		item.appendChild(prefix)
	}

	bindProps(item, PROPS_ITEM, args)

	if (withParent) {
		const container = document.createElement("gov-wizard")
		bindProps(container, PROPS, args)

		container.appendChild(item)
		return container
	}

	return item
}

const TemplateList = (args: any) => {
	const el = document.createElement("gov-wizard")

	if (Array.isArray(args.items)) {
		args.items.map((item: any) => el.appendChild(Template(item)))
	}

	bindProps(el, PROPS, args)
	return el
}

const items = (annotation = false, icon = false, disabled = false, collapsible = false, variant = false) => {
	return [
		{
			variant: variant ? "primary" : undefined,
			label: "Legislation",
			icon: icon ? "complex/packet" : undefined,
			disabled: disabled ? true : undefined,
			prefix: 1,
			collapsible
		},
		{
			variant: variant ? "error" : undefined,
			label: "Appeal options",
			icon: icon ? "complex/pills" : undefined,
			annotation: annotation ? "In some cases, it is necessary to describe the problem in detail to better guide the user." : undefined,
			prefix: 2,
			collapsible
		},
		{
			variant: variant ? "success" : undefined,
			label: "Negotiating language",
			icon: icon ? "complex/holiday" : undefined,
			prefix: 3,
			collapsible
		},
		{
			variant: variant ? "warning" : undefined,
			label: "Options for processing your application at a nearby office",
			icon: icon ? "complex/illness" : undefined,
			disabled: disabled ? true : undefined,
			annotation: annotation ? "In some cases, it is necessary to describe the problem in detail to better guide the user." : undefined,
			prefix: 4,
			collapsible
		},
	]
}


export const Playground = renderStory(Template, {}, secondaryBackground)

export const Collapsible = renderStory(TemplateList, {
	items: items(false, false, false, true),
}, secondaryBackground)

export const Sizes = renderStory(TemplateList, {
	size: WizardSizes._XS,
	items: items(false, false, false, true),
}, secondaryBackground)

export const Variants = renderStory(TemplateList, {
	items: items(false, false, false, true, true),
}, secondaryBackground)

export const Icons = renderStory(TemplateList, {
	items: items(false, true, false, false, false),
}, secondaryBackground)

export const Annotation = renderStory(TemplateList, {
	items: items(true, true, false, false, false),
}, secondaryBackground)

export const Disabled = renderStory(TemplateList, {
	items: items(false, false, true, true, false),
}, secondaryBackground)

