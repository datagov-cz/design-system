export const bindProps = (el, props, args) => {
	Object.keys(args)
		.filter((x) => props.includes(x))
		.forEach((x) => {
			if (typeof args[x] === "boolean") {
				return args[x] ? el.setAttribute(x, args[x]) : el.removeAttribute(x)
			}
			return args[x] === undefined || typeof args[x] === "undefined" || String(args[x]).length === 0
				? el.removeAttribute(x)
				: el.setAttribute(x, args[x])
		})
}
