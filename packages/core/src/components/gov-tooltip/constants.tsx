import { Variants } from '../../core/constants/variants'
import { Sizes } from '../../core/constants/sizes'
import { ValueOf } from '../../types/interfaces'
import { pick } from '../../utils/utils'

export const TooltipVariant = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type TooltipVariantType = `${ValueOf<typeof TooltipVariant>}`

export const TooltipSize = pick(Sizes, ['_S', '_M', '_L'])
export type TooltipSizeType = `${ValueOf<typeof TooltipSize>}`

export enum TooltipPosition {
	TOP = 'top',
	RIGHT = 'right',
	BOTTOM = 'bottom',
	LEFT = 'left',
}
export type TooltipPositionType = `${ValueOf<typeof TooltipPosition>}`

export const TooltipClass = {
	root: 'gov-tooltip',
}

export const TooltipContentClass = {
	root: 'gov-tooltip-content',
}
