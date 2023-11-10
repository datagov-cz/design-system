import { Sizes } from '../../core/constants/sizes'
import { Variants } from '../../core/constants/variants'
import { pick } from '../../utils/utils'
import { ValueOf } from '../../types/interfaces'

export const AccordionSizes = pick(Sizes, ['_XS', '_S', '_M', '_L'])
export type AccordionSizeType = `${ValueOf<typeof AccordionSizes>}`

export const AccordionVariants = pick(Variants, ['PRIMARY', 'SECONDARY', 'CUSTOM'])
export type AccordionVariantType = `${ValueOf<typeof AccordionVariants>}`

export const AccordionClass = {
	root: 'gov-accordion',
}

export const AccordionItemClass = {
	root: 'gov-accordion-item',
	header: 'gov-accordion-item__header',
	icon: 'gov-accordion-item__icon',
	title: 'gov-accordion-item__title',
	label: 'gov-accordion-item__label',
	annotation: 'gov-accordion-item__annotation',
	suffix: 'gov-accordion-item__suffix',
	right: 'gov-accordion-item__right',
	arrow: 'gov-accordion-item__arrow',
	content: 'gov-accordion-item__content',
}
