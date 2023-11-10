import { Sizes } from '../../../core/constants/sizes'
import { pick } from '../../../utils/utils'
import { ValueOf } from '../../../types/interfaces'

export const FormControlSizes = pick(Sizes, ['_M', '_L', '_XL'])
export type FormControlSizesType = `${ValueOf<typeof FormControlSizes>}`

export const FormControlClass = {
	root: 'gov-form-control',
	holder: 'gov-form-control__holder',
	bottom: 'gov-form-control__bottom',
}
