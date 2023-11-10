import { Sizes } from '../../../core/constants/sizes'
import { pick } from '../../../utils/utils'
import { ValueOf } from '../../../types/interfaces'

export const FormRadioSizes = pick(Sizes, ['_XS', '_S', '_M', '_L'])
export type FormRadioSizesType = `${ValueOf<typeof FormRadioSizes>}`

export const FormRadioClass = {
	root: 'gov-form-radio',
	holder: 'gov-form-radio__holder',
	input: 'gov-form-radio__input',
	indicator: 'gov-form-radio__indicator',
	label: 'gov-form-radio__label',
}
