import { Variants, Types } from '../../core/constants/variants'
import { pick } from '../../utils/utils'
import { ValueOf } from '../../types/interfaces'

export const ToastVariants = pick(Variants, ['SUCCESS', 'WARNING', 'ERROR', 'SECONDARY', 'PRIMARY'])
export type ToastVariantType = `${ValueOf<typeof ToastVariants>}`

export const ToastTypes = pick(Types, ['CLASSIC', 'SOLID'])
export type ToastTypesType = `${ValueOf<typeof ToastTypes>}`

export const ToastClass = {
	root: 'gov-toast',
	hidden: 'gov-toast--hidden',
	icon: 'gov-toast__icon',
	content: 'gov-toast__content',
	close: 'gov-toast__close',
	timer: 'gov-toast__timer',
}
