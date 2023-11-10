import { ValueOf } from '../../types/interfaces'

export enum NativeType {
	A = 'a',
	SPAN = 'span',
	BUTTON = 'button',
}

export type NativeTypesType = `${ValueOf<typeof NativeType>}`

export const ChipClass = {
	root: 'gov-chip',
	inner: 'gov-chip__inner',
	hasRight: 'gov-chip--has-right',
	hasLeft: 'gov-chip--has-left',
}
