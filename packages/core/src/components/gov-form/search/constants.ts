import { Variants } from '../../../core/constants/variants'
import { ValueOf } from '../../../types/interfaces'
import { pick } from '../../../utils/utils'

export const FormSearchs = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type FormSearchVariantType = `${ValueOf<typeof FormSearchs>}`

export const FormSearchClass = {
	root: 'gov-form-search',
	input: 'gov-form-search__input',
	button: 'gov-form-search__button',
}
