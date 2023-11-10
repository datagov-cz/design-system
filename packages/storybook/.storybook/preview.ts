import "../../styles/lib/styles.css"
import "../../styles/lib/critical.css"
import "./preview.scss"
import { defineCustomElements } from "../../../dist/packages/core/loader"
import { styled } from "@storybook/theming"

defineCustomElements()

const preview = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	parameters: {
		backgrounds: {
			default: "white",
			values: [
				{
					name: "secondary-200",
					value: "var(--gov-color-secondary-200)",
				},
				{
					name: "white",
					value: "#FFFF",
				},
			],
		},
	},
	docs: {
/*		transformSource: input =>
			prettier.format(input, {
				parser: "babel",
				plugins: [prettierBabel],
			}),*/
		source: {
			state: "open",
		},
		components: {
			div: styled.div(),
			span: styled.span(),
			input: styled.input(),
			select: styled.select(),
			textarea: styled.textarea(),
			hr: styled.hr(),
			strong: styled.strong(),
			p: styled.p(),
			ul: styled.ul(),
			ol: styled.ol(),
			li: styled.li(),
			h1: styled.h1(),
			h2: styled.h2(),
			h3: styled.h3(),
			h4: styled.h4(),
			h5: styled.h5(),
			h6: styled.h6(),
			pre: styled.pre(),
			code: styled.code(),
			a: styled.a(),
		},
	},
}

export default preview
