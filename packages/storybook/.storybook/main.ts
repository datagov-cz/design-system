import {dirname, join} from "path";
import type {StorybookConfig} from '@storybook/html-webpack5'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: [
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-interactions"),
		getAbsolutePath("@storybook/addon-a11y"),
		{
			name: '@storybook/addon-docs',
			options: {
				transcludeMarkdown: true,
			},
		},
	],

	framework: {
		name: getAbsolutePath("@storybook/html-webpack5"),
		options: {},
	},

	webpackFinal: async (config, { configType }) => {
		config.module.rules = [
			...(config.module?.rules || []),
			{
				test: /\.(s(a|c)ss)$/,
				use: [require.resolve("style-loader"),require.resolve("css-loader"), require.resolve("sass-loader")]
			},
			{
				test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
				loader: "url-loader",
			}
		];

		if (configType === "PRODUCTION") {
			return { ...config, output: { ...config.output, publicPath: ""} }
		}
		return config;
	},

	staticDirs: [
		{from: '../../icons/lib', to: '/icon-lib'},
		{from: '../../fonts/lib', to: '/font-lib'},
		{from: '../../styles/lib', to: '/styles-lib'},
	],

	docs: {
		autodocs: true
	}
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
