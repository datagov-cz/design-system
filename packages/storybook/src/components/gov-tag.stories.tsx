import {ButtonSizes, ButtonVariants,} from "../../../core/src/components/gov-button/button/constants"
import {createIcon, basicIcons} from "../helpers/icons"
import {bindProps} from "../helpers/binding"
import {renderStory, story} from "../helpers/storybook"

const meta = story(
  ({array, string, bool, enums}) => [
    string("copy", undefined, "Tag"),
    enums("variant", undefined, ButtonVariants, ButtonVariants.PRIMARY),
    enums("size", undefined, ButtonSizes, ButtonSizes._XS),
    array("left-icon", undefined, basicIcons),
    array("right-icon", undefined, basicIcons),
    bool("inverse", undefined, false),
  ],
  {
    readme: null,
    actions: [],
  },
)

export default {title: "Components/Tag", ...meta}

const PROPS = [
  "variant",
  "size",
  "inverse",
]

const Template = (args: any) => {
  const el = document.createElement("gov-tag")
  el.innerHTML = args.copy

  createIcon(args["left-icon"], "left-icon", null, el)
  createIcon(args["right-icon"], "right-icon", null, el)

  bindProps(el, PROPS, args)
  return el
}

export const Primary = renderStory(Template, {
  variant: ButtonVariants.PRIMARY,
})
export const Secondary = renderStory(Template, {
  variant: ButtonVariants.SECONDARY,
})
export const Success = renderStory(Template, {
  variant: ButtonVariants.SUCCESS,
})
export const Warning = renderStory(Template, {
  variant: ButtonVariants.WARNING,
})
export const Error = renderStory(Template, {
  variant: ButtonVariants.ERROR,
})
export const Size = renderStory(Template, {
  size: ButtonSizes._M,
})
export const Inverse = renderStory(Template, {
  inverse: true,
})
