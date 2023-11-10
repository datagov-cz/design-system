import {createIcon, icons} from "../helpers/icons"
import {renderStory, story} from "../helpers/storybook"
import {createButton} from "../helpers/generate"

const meta = story(
  ({string, array}) => [
    array("icon", undefined, icons, "complex/card-404"),
    string("label", undefined, "<h2 class=\"gov-text--6xl\">Page not found</h2>"),
    string(
      "copy",
      undefined,
      "<p class=\"gov-text--l\">Sorry, the page you are looking for does not exist or has been moved.</p>",
    ),
  ],
  {
    readme: null,
  },
)

export default {title: "Components/Error Code", ...meta}

const Template = (args) => {
  const el = document.createElement("gov-error-code")
  const spacer = document.createElement("gov-spacer")
  const button = createButton({value: "Go to homepage", wcagLabel: "Go to homepage"})

  spacer.setAttribute("size", "l")

  el.innerHTML = args.label + args.copy
  el.appendChild(spacer)
  el.appendChild(button)

  args.icon && createIcon(args.icon, "icon", undefined, el)

  return el
}

export const Playground = renderStory(Template)
