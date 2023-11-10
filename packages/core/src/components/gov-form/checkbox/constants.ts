import { Sizes } from '../../../core/constants/sizes'
import { pick } from '../../../utils/utils'
import { ValueOf } from '../../../types/interfaces'

export const FormCheckboxSizes = pick(Sizes, ['_XS', '_S', '_M', '_L'])
export type FormCheckboxSizesType = `${ValueOf<typeof FormCheckboxSizes>}`

export const FormCheckboxClass = {
	root: 'gov-form-checkbox',
	check: 'gov-form-checkbox__check',
	label: 'gov-form-checkbox__label',
}
