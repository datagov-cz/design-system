import { Variants } from '../../../core/constants/variants'
import { pick } from '../../../utils/utils'
import { ValueOf } from '../../../types/interfaces'

export const FormMessageVariants = pick(Variants, ['SECONDARY', 'SUCCESS', 'ERROR', 'WARNING'])
export type FormMessageVariantType = `${ValueOf<typeof FormMessageVariants>}`

export const FormMessageClass = {
	root: 'gov-form-message',
	content: 'gov-form-message__content',
	icon: 'gov-form-message__icon',
}
