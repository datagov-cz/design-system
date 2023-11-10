import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"
import {
	PaginationSizes,
	PaginationTypes,
	PaginationVariants,
} from "../../../core/src/components/gov-pagination/constants"

const meta = story(
	({ string, number, enums }) => [
		enums("variant", undefined, PaginationVariants, PaginationVariants.PRIMARY),
		enums("size", undefined, PaginationSizes, PaginationSizes._M),
		enums("type", undefined, PaginationTypes, PaginationTypes.BUTTON),
		number("current", undefined, 1),
		number("total", undefined, 48),
		number("page-size", undefined, 10),
		number("max-pages", undefined, 4),
		string("link", undefined),
		string("wcag-label", undefined, "Main paging"),
		string("wcag-label-by", undefined),
		string("wcag-select-label", undefined, "Select page"),
		string("wcag-page-label", undefined, "Page"),
	],
	{
		readme: null,
		actions: ["gov-page"],
	},
)

export default { title: "Components/Pagination", ...meta }

const PROPS = [
	"variant",
	"size",
	"type",
	"current",
	"total",
	"page-size",
	"max-pages",
	"link",
	"wcag-label",
	"wcag-label-by",
	"wcag-page-label",
	"wcag-page-label",
]

const Template = (args) => {
	const el = document.createElement("gov-pagination")

	bindProps(el, PROPS, args)
	return el
}

export const Playground = renderStory(Template)

export const Select = renderStory(Template, {
	size: PaginationSizes._M,
	type: PaginationTypes.SELECT,
})

export const Size = renderStory(Template, {
	size: PaginationSizes._S,
	type: PaginationTypes.BUTTON,
})
export const Link = renderStory(Template, {
	type: PaginationTypes.BUTTON,
	size: PaginationSizes._M,
	link: "https://gov.cz/strana/{PAGE}",
})

