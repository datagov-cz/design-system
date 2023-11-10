import { Sizes } from '../../../core/constants/sizes'
import { ValueOf } from '../../../types/interfaces'
import { pick } from '../../../utils/utils'

export const FormSwitchSizes = pick(Sizes, ['_XS', '_S', '_M', '_L'])
export type FormSwitchSizesType = `${ValueOf<typeof FormSwitchSizes>}`

export const FormSwitchClass = {
	root: 'gov-form-switch',
	holder: 'gov-form-switch__holder',
	input: 'gov-form-switch__input',
	indicator: 'gov-form-switch__indicator',
}
