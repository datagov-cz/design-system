import { Variants } from '../../core/constants/variants'
import { pick } from '../../utils/utils'
import { ValueOf } from '../../types/interfaces'

export const TabVariants = pick(Variants, ['PRIMARY', 'SECONDARY', 'SUCCESS', 'ERROR', 'WARNING'])
export type VariantType = `${ValueOf<typeof TabVariants>}`

export enum TabTypes {
	TEXT = 'text',
	CHIP = 'chip',
}

export type TabType = `${ValueOf<typeof TabTypes>}`

export enum TabOrientation {
	HORIZONTAL = 'horizontal',
	VERTICAL = 'vertical',
}

export type TabOrientationType = `${ValueOf<typeof TabOrientation>}`

export const TabsClass = {
	root: 'gov-tabs',
	tabs: 'gov-tabs__tabs',
	list: 'gov-tabs__list',
	item: 'gov-tabs__item',
	btn: 'gov-tabs__btn',
}

export const TabsItemClass = {
	root: 'gov-tabs-item',
	inner: 'gov-tabs-item__inner',
}
