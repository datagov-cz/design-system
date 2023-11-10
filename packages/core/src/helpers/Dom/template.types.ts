import { HTMLStencilElement } from '@stencil/core/internal'

export interface GovHost {
	name: string
	hostElement: HTMLStencilElement
	hasSlot(name: string): boolean
	isSlotEmpty(name: string): boolean
	getSlot(name: string): HTMLElement
	getParent(element: string): HTMLElement
	passChildAttr(selector: string | string[], name: string, value: any): void
	removeChildAttr(selector: string | string[], name: string): void
	slottedChildren: Node[]
	classes(classes: string | string[]): string
}
