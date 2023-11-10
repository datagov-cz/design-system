import { Sizes } from '../../../core/constants/sizes'
import { Variants } from '../../../core/constants/variants'
import { pick } from '../../../utils/utils'
import { ValueOf } from '../../../types/interfaces'

export const FormSelectSizes = pick(Sizes, ['_M', '_L', '_XL'])
export type FormSelectSizesType = `${ValueOf<typeof FormSelectSizes>}`

export const FormSelectVariants = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type FormSelectVariantType = `${ValueOf<typeof FormSelectVariants>}`

export const FormSelectClass = {
	root: 'gov-form-select',
	icon: 'gov-form-select__icon',
}
