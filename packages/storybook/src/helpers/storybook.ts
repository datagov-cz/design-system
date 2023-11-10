import { ValueOf } from "../../../core/src/types/interfaces"
import { Meta, StoryObj } from "@storybook/html"

type Story = StoryObj

interface Option<T> {
	name: string;
	argTypes: any;
	defaultValue: T;
	if?: Ifs
}

interface Ifs {
	arg: string;
	truthy?: boolean;
	exists?: boolean;
	eq?: string;
	neq?: string
}

const stringOption = (name: string, description: string, defaultValue = "", ifs?: Ifs): Option<string> => {
	return { name, defaultValue, argTypes: { type: "string", name, description }, if: ifs }
}

const numberOption = (name: string, description: string, defaultValue = 0, ifs?: Ifs): Option<number> => {
	return { name, defaultValue, argTypes: { type: "number", name, description }, if: ifs }
}

const boolOption = (name: string, description: string, defaultValue = false, ifs?: Ifs): Option<boolean> => {
	return { name, defaultValue, argTypes: { type: "boolean", description }, if: ifs }
}

const enumOption = <T extends Record<string, string>>(
	name: string,
	description: string,
	enumObject: T,
	defaultValue?: `${ValueOf<T>}`,
	ifs?: Ifs,
): Option<keyof T> => {
	const options = [...Object.values(enumObject)]
	if (!defaultValue) {
		options.push(undefined)
	}
	const argTypes: Option<T>["argTypes"] = {
		control: "select",
		options,
		description,
	}

	return { name, defaultValue, argTypes, if: ifs }
}

const arrayOption = <T extends string>(
	name: string,
	description: string,
	options: T[],
	defaultValue?: T,
	ifs?: Ifs,
): Option<T> => {
	if (!defaultValue) {
		options.unshift(undefined)
	}
	const argTypes: Option<T>["argTypes"] = {
		control: "select",
		options,
		description,
	}

	return { name, defaultValue, argTypes, if: ifs }
}

const allOptions = {
	string: stringOption,
	number: numberOption,
	bool: boolOption,
	enums: enumOption,
	array: arrayOption,
}

interface Parameters {
	readme: string;
	actions?: string[];
	decorators?: Meta["decorators"];
}

type PropertiesFunction = (functions: typeof allOptions) => Option<string | number | boolean>[];

export const story = (properties: PropertiesFunction, parameters: Parameters): Meta => {
	const { args, argTypes } = properties(allOptions).reduce(
		(all, current) => {
			return {
				...all,
				args: {
					...all.args,
					[current.name]: current.defaultValue,
				},
				argTypes: {
					...all.argTypes,
					[current.name]: {
						...current.argTypes,
						if: current.if ?? undefined,
					},
				},
			}
		},
		{ args: {}, argTypes: {} },
	)

	return {
		args,
		argTypes,
		parameters: {
			//docs: docsPage('gov-button', parameters.readme),
			actions: {
				handles: parameters.actions,
			},
		},
		decorators: parameters.decorators,
	}
}

export const renderStory = (template: unknown, params: Record<string, unknown> = {}, parameters: Record<string, unknown> = {}): Story => {
	return {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		render: template,
		args: params,
		parameters,
	}
}

export const whiteBackground = {
	backgrounds: { default: "white" },
}

export const secondaryBackground = {
	backgrounds: { default: "secondary-200" },
}
