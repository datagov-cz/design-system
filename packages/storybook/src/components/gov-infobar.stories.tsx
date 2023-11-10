import { InfobarVariants } from "../../../core/src/components/gov-infobar/constants"
import { createIcon, icons } from "../helpers/icons"
import { bindProps } from "../helpers/binding"
import { renderStory, story } from "../helpers/storybook"

const meta = story(
	({ enums, string, bool, array }) => [
		enums("variant", undefined, InfobarVariants, InfobarVariants.PRIMARY),
		bool("closable", undefined, false),
		string("wcag-close-label", undefined, "Close system downtime info", { arg: "closable", truthy: true }),
		string("headline", undefined, undefined),
		bool("inverse", undefined, false),
		string(
			"copy",
			"",
			"<p>From 8 May 2020 at 14:00 until 20 9 May 2020 at 15:00, there will be a planned server outage. During this period, logging in to the Citizen's Portal via data box will be unavailable. More information <a href='https://gov.cz/' target='_blank'>here</a>.</p>",
		),
		array("icon", undefined, icons),
	],
	{
		readme: null,
		actions: ["gov-click", "gov-close"],
	},
)

export default { title: "Components/Infobar", ...meta }

const PROPS = ["variant", "wcag-close-label", "closable", "inverse", "headline"]

const Template = (args: any) => {
	const el = document.createElement("gov-infobar")

	el.innerHTML = args.copy

	args.icon && createIcon(args.icon, "icon", null, el)

	bindProps(el, PROPS, args)
	return el
}


export const Primary = renderStory(Template, { variant: InfobarVariants.PRIMARY })
export const Secondary = renderStory(Template, { variant: InfobarVariants.SECONDARY })
export const Success = renderStory(Template, { variant: InfobarVariants.SUCCESS })
export const Warning = renderStory(Template, { variant: InfobarVariants.WARNING })
export const Error = renderStory(Template, { variant: InfobarVariants.ERROR })
export const Headline = renderStory(Template, { headline: "Important notice for citizen" })
export const Closable = renderStory(Template, { closable: true })
export const Inverse = renderStory(Template, { inverse: true })
export const Icon = renderStory(Template, { icon: 'basic/info-circle' })

