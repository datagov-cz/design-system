import { pick } from "../../../utils/utils"
import { Sizes } from "../../../core/constants/sizes"
import { ValueOf } from "../../../types/interfaces"

export const FormLabelSizes = pick(Sizes, ['_XS', '_S', '_M', '_L', '_XL'])
export type FormLabelSizesTypes = `${ValueOf<typeof FormLabelSizes>}`

export const FormLabelClass = {
	root: 'gov-form-label',
	label: 'gov-form-label__label',
}
