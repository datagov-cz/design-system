import { Sizes } from '../../core/constants/sizes'
import { Variants } from '../../core/constants/variants'
import { pick } from '../../utils/utils'
import { ValueOf } from '../../types/interfaces'

export const PaginationSizes = pick(Sizes, ['_S', '_M'])
export type PaginationSizeType = `${ValueOf<typeof PaginationSizes>}`

export const PaginationVariants = pick(Variants, ['PRIMARY', 'SECONDARY'])
export type PaginationVariantType = `${ValueOf<typeof PaginationVariants>}`

export enum PaginationTypes {
	BUTTON = 'button',
	SELECT = 'select',
}
export type PaginationType = `${ValueOf<typeof PaginationTypes>}`

export const PaginationClass = {
	root: 'gov-pagination',
	list: 'gov-pagination__list',
	item: 'gov-pagination__item',
	itemArrow: 'gov-pagination__item--arrow',
	itemMore: 'gov-pagination__item--more',
	itemSelect: 'gov-pagination__item--select',
	inner: 'gov-pagination__inner',
	arrow: 'gov-pagination__arrow',
}
