import { Sizes } from '../../../core/constants/sizes'
import { Variants } from '../../../core/constants/variants'
import { ValueOf } from '../../../types/interfaces'
import { pick } from '../../../utils/utils'

export const FormInputSizes = pick(Sizes, ['_S', '_M', '_L', '_XL'])
export type FormInputSizesType = `${ValueOf<typeof FormInputSizes>}`

export const FormInputVariants = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type FormInputVariantType = `${ValueOf<typeof FormInputVariants>}`

export enum InputTypes {
	COLOR = 'color',
	DATE = 'date',
	DATETIME_LOCAL = 'datetime-local',
	EMAIL = 'email',
	MONTH = 'month',
	NUMBER = 'number',
	PASSWORD = 'password',
	SEARCH = 'search',
	TEL = 'tel',
	TEXT = 'text',
	TIME = 'time',
	URL = 'url',
	WEEK = 'week',
}

export type InputType = `${ValueOf<typeof InputTypes>}`

export enum Type {
	RESET = 'reset',
}

export type TypesType = `${ValueOf<typeof Type>}`

export const FormInputClass = {
	root: 'gov-form-input',
}
