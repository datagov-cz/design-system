import { Sizes } from '../../core/constants/sizes'
import { pick } from '../../utils/utils'
import { ValueOf } from '../../types/interfaces'

export const SpacerSize = pick(Sizes, ['_2XS', '_XS', '_S', '_M', '_L', '_XL', '_2XL', '_3XL', '_4XL'])
export type SpacerSizeType = `${ValueOf<typeof SpacerSize>}`

export enum SpacerBreakpoints {
	NONE = 'none',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
}
export type SpacerBreakpointsType = `${ValueOf<typeof SpacerBreakpoints>}`

export const SpacerClass = {
	root: 'gov-spacer',
}
