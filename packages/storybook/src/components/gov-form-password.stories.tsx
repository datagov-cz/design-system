import {bindProps} from "../helpers/binding"
import {renderStory, story} from "../helpers/storybook"
import {createIcon} from "../helpers/icons"

const meta = story(
  ({string, bool, array}) => [
    array("power", undefined, ['0', '1', '2', '3'], '2'),
    string("value", undefined),
    string("label", undefined, "This is label of password"),
    string("placeholder", undefined),
    string("message", undefined),
    bool("invalid", undefined, false),
    bool("disabled", undefined, false),
  ],
  {
    readme: null,
    actions: ["gov-focus", "gov-blur", "gov-input", "gov-keyup"],
  },
)

export default {title: "Components/Form Password", ...meta}

const PROPS_CONTROL = ["success", "disabled"]
const PROPS_POWER = ["power"]
const PROPS = ["value", "variant", "disabled", "placeholder", "invalid"]

const Template = (args: any) => {
  const el = document.createElement("gov-form-input")

  bindProps(el, PROPS, args)

  return el
}

const TemplateControl = (args: any) => {
  const control = document.createElement("gov-form-control")
  const label = document.createElement("gov-form-label")
  const group = document.createElement("gov-form-group")
  const power = document.createElement("gov-form-password-power")
  const el = Template(args)

  const options = {
    0: '',
    1: 'weak',
    2: 'medium',
    3: 'strong'
  }

  power.innerHTML = options[args.power]
  power.style.width = '100%'

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
  group.appendChild(power)
  control.appendChild(label)
  control.appendChild(group)

  bindProps(control, PROPS_CONTROL, args)
  bindProps(power, PROPS_POWER, args)

  return control
}

export const Playground = renderStory(TemplateControl)
