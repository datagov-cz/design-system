import {bindProps} from "../helpers/binding"
import {renderStory, story} from "../helpers/storybook"
import {createIcon, icons} from "../helpers/icons"
import {FormInputSizes, FormInputVariants, InputTypes} from "../../../core/src/components/gov-form/input/constants"

const meta = story(
  ({enums, string, bool, number, array}) => [
    enums("size", undefined, FormInputSizes, FormInputSizes._M),
    enums("variant", undefined, FormInputVariants, FormInputVariants.SECONDARY),
    enums("input-type", undefined, InputTypes, InputTypes.TEXT),
    string("value", undefined),
    array("left-icon", undefined, icons),
    array("right-icon", undefined, icons),
    string("label", undefined, "This is label of input"),
    string("prefix", undefined),
    string("sufix", undefined),
    string("placeholder", undefined),
    string("message", undefined),
    bool("invalid", undefined, false),
    bool("success", undefined, false),
    bool("disabled", undefined, false),
    bool("multiline", undefined, false),
    number("rows", undefined, 0, {arg: "multiline", truthy: true}),
  ],
  {
    readme: null,
    actions: ["gov-focus", "gov-blur", "gov-input", "gov-keyup"],
  },
)

export default {title: "Components/Form Input", ...meta}

const PROPS_CONTROL = ["success", "disabled"]
const PROPS = ["value", "variant", "size", "disabled", "multiline", "rows", "placeholder", "invalid", "input-type"]

const Template = (args: any) => {
  const el = document.createElement("gov-form-input")

  args["left-icon"] && createIcon(args["left-icon"], "left-icon", undefined, el)
  args["right-icon"] && createIcon(args["right-icon"], "right-icon", undefined, el)

  if (args["prefix"]) {
    const prefix = document.createElement("p")
    prefix.setAttribute("class", "gov-text--s")
    prefix.setAttribute("slot", "prefix")
    prefix.innerHTML = args["prefix"]

    el.appendChild(prefix)
  }
  if (args["sufix"]) {
    const sufix = document.createElement("p")
    sufix.setAttribute("class", "gov-text--s")
    sufix.setAttribute("slot", "sufix")
    sufix.innerHTML = args["sufix"]

    el.appendChild(sufix)
  }

  bindProps(el, PROPS, args)

  return el
}

const TemplateControl = (args: any) => {
  const control = document.createElement("gov-form-control")
  const label = document.createElement("gov-form-label")
  const group = document.createElement("gov-form-group")
  const el = Template(args)

  label.innerHTML = args.label
  label.setAttribute("slot", "top")
  label.setAttribute("size", args.size)

  if (args.message) {
    const message = document.createElement("gov-form-message")
    message.innerHTML = args.message
    message.setAttribute("slot", "bottom")

    if (args.message) {
      message.setAttribute("variant", "secondary")
      control.appendChild(message)
    }

    if (args.invalid) {
      message.setAttribute("variant", "error")
      createIcon("basic/exclamation-triangle-fill", "icon", undefined, message)
      control.appendChild(message)
    }
  }

  group.appendChild(el)
  control.appendChild(group)
  control.appendChild(label)

  bindProps(control, PROPS_CONTROL, args)

  return control
}

export const Playground = renderStory(Template)
export const Control = renderStory(TemplateControl)

export const Invalid = renderStory(TemplateControl, {
  invalid: true,
  message: "This field is required!",
})

export const Success = renderStory(TemplateControl, {
  success: true,
})

export const Size = renderStory(TemplateControl, {
  label: "Small size of input",
  size: FormInputSizes._M,
})

export const Disabled = renderStory(TemplateControl, {
  disabled: true,
})
export const Icons = renderStory(TemplateControl, {
  "left-icon": "basic/camera",
  "right-icon": "basic/cash",
})

export const Message = renderStory(TemplateControl, {
  message: "Here you can put your name",
})

export const Date = renderStory(TemplateControl, {
  "input-type": InputTypes.DATE
})

export const Time = renderStory(TemplateControl, {
  "input-type": InputTypes.TIME
})

export const Placeholder = renderStory(TemplateControl, {
  placeholder: "This is placeholder of input",
})

export const PrefixSufix = renderStory(TemplateControl, {
  prefix: "Name",
  sufix: "Kč",
})

export const Multiline = renderStory(TemplateControl, {
  multiline: true,
  rows: 6,
})
