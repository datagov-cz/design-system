import { Sizes } from '../../../core/constants/sizes'
import { Variants } from '../../../core/constants/variants'
import { pick } from '../../../utils/utils'
import { ValueOf } from '../../../types/interfaces'

export const FormMultiselectSizes = pick(Sizes, ['_M', '_L', '_XL'])
export type FormMultiselectSizesType = `${ValueOf<typeof FormMultiselectSizes>}`

export const FormMultiselectVariants = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type FormMultiselectVariantType = `${ValueOf<typeof FormMultiselectVariants>}`

export const FormMultiSelectClass = {
	root: 'gov-form-multi-select',
	wrap: 'gov-form-multi-select__wrap',
	list: 'gov-form-multi-select__list',
	item: 'gov-form-multi-select__item',
}
