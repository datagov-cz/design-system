import {TabTypes, TabVariants} from "../../../core/src/components/gov-tabs/constants"
import {bindProps} from "../helpers/binding"
import {getCopy} from "../helpers/copy"
import {renderStory, story} from "../helpers/storybook"

const meta = story(
  ({string, enums}) => [
    enums("type", undefined, TabTypes, TabTypes.TEXT),
    enums("variant", undefined, TabVariants, TabVariants.PRIMARY, {arg: 'type', eq: TabTypes.CHIP}),
    string("wcag-label", undefined, "Gov.cz design system"),
  ],
  {
    readme: null,
    actions: ["gov-change"],
  },
)

export default {title: "Components/Tabs", ...meta}

const PROPS = ["variant", "type", "wcag-label"]
const PROPS_ITEM = ["label"]

const Template = (args: any) => {
  const el = document.createElement("gov-tabs-item")
  el.innerHTML = getCopy()
  bindProps(el, PROPS_ITEM, args)

  return el
}


const TemplateList = (args: any) => {
  const el = document.createElement("gov-tabs")

  if (Array.isArray(args?.items)) {
    args?.items.map((childArgs: any) => {
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

export const Playground = renderStory(TemplateList, {
  "wcag-label": "Basic information about the gov.cz design system",
  items: items(),
})

export const Chip = renderStory(TemplateList, {
  type: TabTypes.CHIP,
  variant: TabVariants.SUCCESS,
  "wcag-label": "Basic information about the gov.cz design system",
  items: items(),
})

export const Variant = renderStory(TemplateList, {
  type: TabTypes.CHIP,
  variant: TabVariants.PRIMARY,
  "wcag-label": "Basic information about the gov.cz design system",
  items: items(),
})
