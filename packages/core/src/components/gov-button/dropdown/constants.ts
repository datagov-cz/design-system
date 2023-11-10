import { ValueOf } from "../../../types/interfaces"

export enum Position {
	LEFT = 'left',
	RIGHT = 'right',
}

export type PositionType = `${ValueOf<typeof Position>}`

export const DropdownClass = {
	root: 'gov-dropdown',
	list: 'gov-dropdown__list'
}
