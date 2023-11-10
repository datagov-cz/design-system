import { pick } from "../../../utils/utils"
import { Sizes } from "../../../core/constants/sizes"
import { ValueOf } from "../../../types/interfaces"

export const FormGroupSizes = pick(Sizes, ['_2XS', '_XS', '_S', '_M', '_L'])
export type FormGroupSizesType = `${ValueOf<typeof FormGroupSizes>}`

export enum FormGroupOrientation {
	HORIZONTAL = 'horizontal',
	VERTICAL = 'vertical',
}
export type FormGroupOrientationType = `${ValueOf<typeof FormGroupOrientation>}`

export const FormGroupClass = {
	root: 'gov-form-group',
}
