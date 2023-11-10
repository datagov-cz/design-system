import { Variants } from '../../core/constants/variants'
import { ValueOf } from '../../types/interfaces'
import { pick } from '../../utils/utils'

export const ControlGroupVariants = pick(Variants, ['PRIMARY', 'SECONDARY', 'SUCCESS', 'ERROR', 'WARNING'])
export type ControlGroupVariantType = `${ValueOf<typeof ControlGroupVariants>}`

export const ControlGroupClass = {
	root: 'gov-control-group',
}
