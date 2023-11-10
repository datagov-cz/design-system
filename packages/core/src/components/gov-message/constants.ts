import { Variants } from '../../core/constants/variants'
import { pick } from '../../utils/utils'
import { ValueOf } from '../../types/interfaces'

export const MessageVariants = pick(Variants, ['PRIMARY', 'SECONDARY', 'WARNING', 'ERROR', 'SUCCESS'])
export type MessageVariantType = `${ValueOf<typeof MessageVariants>}`

export const MessageClass = {
	root: 'gov-message',
	icon: 'gov-message__icon',
	content: 'gov-message__content',
	close: 'gov-message__close',
}
