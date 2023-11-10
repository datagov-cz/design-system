import {bindProps} from "../helpers/binding"
import {renderStory, story} from "../helpers/storybook"
import {createIcon} from "../helpers/icons"
import {createButton} from "../helpers/generate";

const meta = story(
  ({string, bool, number}) => [
    string("value", undefined),
    string("label", undefined, "This is label of file"),
    string("message", undefined),
    number("max-file-size", undefined, 616448),
    string("accept", undefined, ".pdf,.jpg,.png,.jpeg"),
    bool("multiple", undefined, false),
    bool("invalid", undefined, false),
    bool("expanded", undefined, true),
    bool("disabled", undefined, false),
  ],
  {
    readme: null,
    actions: ["gov-focus", "gov-blur", "gov-file", "gov-keyup"],
  },
)

export default {title: "Components/Form File", ...meta}

const PROPS_CONTROL = ["success", "disabled"]
const PROPS = ["value", "disabled", "multiline", "invalid", "expanded", "multiple", "max-file-size", "accept"]

const Template = (args: any) => {
  const el = document.createElement("gov-form-file")
  const p = document.createElement('p')
  const spacer = document.createElement('gov-spacer')
  const cta = createButton({value: 'Nahrát soubor ze zařízení', variant: 'primary', type: 'outlined', disabled: args.disabled})

  spacer.setAttribute('size', 'm')

  const support = document.createElement('p')
  support.classList.add('gov-text--s')
  support.innerHTML = 'Podporované formáty XML, PDF, DOC'

  p.appendChild(cta)

  el.appendChild(p)
  el.appendChild(spacer)
  el.appendChild(support)

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

export const NotExpanded = renderStory(TemplateControl, {
  expanded: false,
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
