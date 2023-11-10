import { ValueOf } from '../../types/interfaces'
import { pick } from '../../utils/utils'
import { Variants } from '../../core/constants/variants'

export enum StatsBarIconPosition {
	LEFT = 'left',
}
export type StatsBarIconPositionType = `${ValueOf<typeof StatsBarIconPosition>}`

export const StatsBarVariants = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type StatsBarVariantType = `${ValueOf<typeof StatsBarVariants>}`

export const StatsBarClass = {
	root: 'gov-statsbar',
	section: 'gov-statsbar__section',
}

export const StatsBarItemClass = {
	root: 'gov-statsbar-item',
	icon: 'gov-statsbar-item__icon',
	number: 'gov-statsbar-item__number',
	text: 'gov-statsbar-item__text',
}
