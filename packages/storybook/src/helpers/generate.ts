import { createIcon } from "./icons"


export const createButton = ({
	                             variant = "primary",
	                             size = "m",
	                             type = "solid",
	                             wcagLabel = undefined,
															 disabled = undefined,
	                             value = undefined,
	                             leftIcon = undefined,
	                             rightIcon = undefined,
	                             slot = undefined,
                             }) => {
	const button = document.createElement("gov-button")
	variant && button.setAttribute("variant", variant)
	size && button.setAttribute("size", size)
	type && button.setAttribute("type", type)
	slot && button.setAttribute("slot", slot)
	disabled && button.setAttribute("disabled", disabled)
	wcagLabel && button.setAttribute("wcag-label", wcagLabel)

	value ? button.innerHTML = value : null

	leftIcon && createIcon(leftIcon, "left-icon", undefined, button)
	rightIcon && createIcon(rightIcon, "right-icon", undefined, button)

	return button
}

const selectDefaultOptions = [
	{ name: "Czech Republic", value: "czech-republic" },
	{ name: "Australia", value: "australia" },
	{ name: "England", value: "england" },
	{ name: "France", value: "france" },
	{ name: "Germany", value: "germany" },
]

export const createSelect = ({ size = "m", variant = "secondary" }) => {
	const select = document.createElement("gov-form-select")
	size && select.setAttribute("size", size)
	variant && select.setAttribute("variant", variant)

	selectDefaultOptions.map((item) => {
		const option = document.createElement("option")
		option.setAttribute("value", option.value)
		option.innerHTML = item.name

		select.appendChild(option)
	})

	return select
}

export const createInput = ({
	                            type = "text",
	                            name = undefined,
	                            placeholder = undefined,
	                            size = "m",
	                            variant = "secondary",
	                            value = undefined,
                            }) => {
	const input = document.createElement("gov-form-input")
	type && input.setAttribute("type", type)
	name && input.setAttribute("name", name)
	placeholder && input.setAttribute("placeholder", placeholder)
	size && input.setAttribute("size", size)
	variant && input.setAttribute("variant", variant)

	if (value) {
		input.value = value
	}

	return input
}

export const createToast = ({
	                            variant = "success",
	                            type = "classic",
	                            message,
	                            icon = undefined,
	                            gravity = "bottom",
	                            position = "center",
	                            time = 0,
                            }, render = false) => {
	const toast = document.createElement("gov-toast")
	variant && toast.setAttribute("variant", variant)
	type && toast.setAttribute("type", type)
	position && toast.setAttribute("position", position)
	gravity && toast.setAttribute("gravity", gravity)
	time && toast.setAttribute("time", time.toString())

	if (message) {
		toast.innerHTML = "<p>" + message + "</p>"
	}

	icon && createIcon(icon, "icon", undefined, toast)

	if (render) {
		document.body.appendChild(toast)
	}

	return toast
}
