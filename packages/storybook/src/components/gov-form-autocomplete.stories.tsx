import {bindProps} from "../helpers/binding"
import {renderStory, story} from "../helpers/storybook"
import {createIcon, icons} from "../helpers/icons"
import {FormSelectSizes, FormSelectVariants} from "../../../core/src/components/gov-form/select/constants"

const meta = story(
  ({enums, string, bool, number, array}) => [
    enums("size", undefined, FormSelectSizes, FormSelectSizes._M),
    enums("variant", undefined, FormSelectVariants, FormSelectVariants.SECONDARY),
    string("value", undefined),
    array("right-icon", undefined, icons, "basic/search"),
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

export default {title: "Components/Form Autocomplete", ...meta}

const removeDiacritics = (string?: string) => {
  if (!string) return string
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const data = () => [
  {name: 'Pepa'},
  {name: 'Katak'},
  {name: 'Tomáš'},
  {name: 'Ludvík'},
  {name: 'Anežda'},
  {name: 'Xaviér'},
  {name: 'Ondřej'},
  {name: 'Mirek'},
  {name: 'Zdeněk'},
  {name: 'Monika'},
  {name: 'Jirka'},
  {name: 'Abrahám'},
  {name: 'Lucie'},
  {name: 'Emily'},
  {name: 'Pavel'},
  {name: 'Gustav'},
  {name: 'Amálie'},
]

const PROPS_CONTROL = ["success", "disabled"]
const PROPS = ["value", "variant", "size", "disabled", "multiline", "rows", "placeholder", "invalid"]

const Template = (args: any, withContainer = true) => {
  const container = document.createElement("div")
  const el = document.createElement("gov-form-autocomplete")

  container.style.height = '400px'

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

  el.setSearchCallback(val => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          data().filter(({name}) => {
            if (!name) return false
            return removeDiacritics(name).toLowerCase().indexOf(removeDiacritics(val).toLowerCase()) > -1
          })
        )
      }, randomNumber(100, 1000))
    })
  })

  bindProps(el, PROPS, args)

  if (withContainer) {
    container.appendChild(el)
    return container
  }

  return el
}

const TemplateControl = (args: any) => {
  const container = document.createElement("div")
  const control = document.createElement("gov-form-control")
  const label = document.createElement("gov-form-label")
  const group = document.createElement("gov-form-group")
  const el = Template(args, false)

  container.style.height = '400px'

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

  container.appendChild(control)

  return container
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
  size: FormSelectSizes._XL,
})

export const Message = renderStory(TemplateControl, {
  message: "Here you can put your name",
})

export const Placeholder = renderStory(TemplateControl, {
  placeholder: "This is placeholder of input",
})

