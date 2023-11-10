import {
	SkeletonAnimation,
	SkeletonShapes,
	SkeletonVariants,
} from "../../../core/src/components/gov-loading/skeleton/constants"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ enums, number, string }) => [
		string("wcag-label", undefined, "Loading content of page"),
		enums("variant", undefined, SkeletonVariants, SkeletonVariants.SECONDARY),
		enums("shape", undefined, SkeletonShapes, SkeletonShapes.TEXT),
		enums("animation", undefined, SkeletonAnimation, SkeletonAnimation.PROGRESS),
		number("count", undefined, 1),
		string("width", undefined, "60%", { arg: "shape", eq: SkeletonShapes.TEXT }),
		string("height", undefined, "30px", { arg: "shape", eq: SkeletonShapes.TEXT }),
	],
	{
		readme: null,
	},
)

export default { title: "Components/Skeleton", ...meta }

const PROPS = ["variant", "shape", "animation", "count", "width", "height", "wcag-label"]

const Template = (args) => {
	const el = document.createElement("gov-skeleton")

	bindProps(el, PROPS, args)
	return el
}

export const Playground = renderStory(Template)

export const Variant = renderStory(Template, {
	variant: SkeletonVariants.PRIMARY,
})

export const Shape = renderStory(Template, {
	shape: SkeletonShapes.CIRCLE,
})

export const Count = renderStory(Template, {
	count: 3,
	shape: SkeletonShapes.TEXT,
})

export const Pulse = renderStory(Template, {
	count: 3,
	shape: SkeletonShapes.TEXT,
	animation: SkeletonAnimation.PULSE,
})
