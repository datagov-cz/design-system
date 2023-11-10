import { ValueOf } from '../../types/interfaces'

export const LayoutClass = {
	root: 'gov-layout',
	section: 'gov-layout__section',
}

enum LayoutTypes {
	STRETCH = 'stretch',
	ASIDE = 'aside',
	TEXT = 'text',
}
export type LayoutType = `${ValueOf<typeof LayoutTypes>}`

enum LayoutVariant {
	LEFT = 'left',
	RIGHT = 'right',
}

export type LayoutVariantType = `${ValueOf<typeof LayoutVariant>}`

export const LayoutColumnClass = {
	root: 'gov-layout-column',
}
