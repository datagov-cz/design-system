import { Sizes } from '../../../core/constants/sizes'
import { Variants } from '../../../core/constants/variants'
import { pick } from '../../../utils/utils'
import { ValueOf } from '../../../types/interfaces'

export const FormAutocompleteSizes = pick(Sizes, ['_M', '_L', '_XL'])
export type SizesType = `${ValueOf<typeof FormAutocompleteSizes>}`

export const FormAutocompleteVariants = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type VariantType = `${ValueOf<typeof FormAutocompleteVariants>}`

export const FormAutocompleteClass = {
	root: 'gov-form-autocomplete',
	list: 'gov-form-autocomplete__list',
	item: 'gov-form-autocomplete__item',
	empty: 'gov-form-autocomplete__item--empty',
	loading: 'gov-form-autocomplete__item--loading',
}
