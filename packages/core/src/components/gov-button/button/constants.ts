import { Sizes } from '../../../core/constants/sizes'
import { Variants } from '../../../core/constants/variants'
import { ValueOf } from '../../../types/interfaces'
import { pick } from '../../../utils/utils'

export const ButtonSizes = pick(Sizes, ['_XS', '_S', '_M', '_L', '_XL'])
export type ButtonSizesType = `${ValueOf<typeof ButtonSizes>}`

export const ButtonVariants = pick(Variants, ['PRIMARY', 'SECONDARY', 'SUCCESS', 'ERROR', 'WARNING'])
export type ButtonVariantType = `${ValueOf<typeof ButtonVariants>}`

export enum Type {
	SOLID = 'solid',
	OUTLINED = 'outlined',
	BASE = 'base',
	LINK = 'link',
}

export type TypesType = `${ValueOf<typeof Type>}`

export enum NativeType {
	SUBMIT = 'submit',
	BUTTON = 'button',
	RESET = 'reset',
}

export type NativeTypesType = `${ValueOf<typeof NativeType>}`

export enum ButtonTarget {
	BLANK = '_blank',
	SELF = '_self',
	NEW = '_new',
}
export type ButtonTargetType = `${ValueOf<typeof ButtonTarget>}`

export const ButtonClass = {
	root: 'gov-button',
	rootWithIcon: 'gov-button--w-icon',
}
