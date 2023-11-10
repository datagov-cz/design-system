import {HTMLStencilElement} from '@stencil/core/internal'
import {GovHost} from './template.types'
import {Nullable} from '../../types/interfaces'

export const prepareClasses = (classes: string[]): string => {
	if (Array.isArray(classes) === false) return
	return classes
		.filter(classname => !!classname)
		.join(' ')
		.trim()
}

export const slottedChildren = (host: HTMLStencilElement): Node[] => {
	const slotted = host.querySelector('slot') as HTMLSlotElement
	if (slotted) {
		return slotted.assignedNodes().filter(node => {
			return node.nodeName !== '#text'
		})
	}
	return []
}

export const booleanString = (value: boolean): string => {
	return value ? 'true' : 'false'
}

export const govHost = (host: HTMLStencilElement): GovHost => {
	return {
		get hostElement(): HTMLStencilElement {
			return host
		},
		get name(): string {
			return this.hostElement.nodeName.toLowerCase()
		},
		hasSlot(name: string): boolean {
			return !!this.getSlot(name)
		},
		isSlotEmpty(name: string): boolean {
			const slot = this.getSlot(name)
			if (slot) {
				return slot.childNodes.length === 0
			}
			return false
		},
		getSlot(name: string): HTMLElement {
			return this.hostElement.querySelector('[slot="' + name + '"]')
		},
		getParent(element): Nullable<HTMLElement> {
			return this.hostElement.closest(element)
		},
		passChildAttr(selector: string | string[], name: string, value: any): void {
			if (Array.isArray(selector)) {
				selector.forEach(selector => {
					this.hostElement.querySelectorAll(selector).forEach(child => child.setAttribute(name, value))
				})
			} else {
				this.hostElement.querySelectorAll(selector).forEach(child => child.setAttribute(name, value))
			}
		},
		removeChildAttr(selector: string | string[], name: string): void {
			if (Array.isArray(selector)) {
				selector.forEach(selector => {
					this.hostElement.querySelectorAll(selector).forEach(child => child.removeAttribute(name))
				})
			} else {
				this.hostElement.querySelectorAll(selector).forEach(child => child.removeAttribute(name))
			}
		},
		get slottedChildren(): Node[] {
			const slotted = this.hostElement.shadowRoot.querySelector('slot') as HTMLSlotElement
			if (slotted) {
				return slotted.assignedNodes().filter(node => {
					return node.nodeName !== '#text'
				})
			}
			return []
		},
		classes(classes: string | string[]): string {
			const clearClasses = Array.isArray(classes) ? classes.join(' ') : classes
			if (this.hostElement) {
				return this.hostElement.classList.toString() + ' ' + clearClasses
			}
			return clearClasses
		},
	}
}

export const toBoolAttr = (value: boolean | string | number): string => {
	if (typeof value === 'string') {
		return ['true', 'True', 'TRUE', '1'].indexOf(value) !== -1 ? 'true' : 'false'
	} else if (typeof value === 'number') {
		return value > 0 ? 'true' : 'false'
	} else if (typeof value === 'boolean') {
		return value ? 'true' : 'false'
	} else {
		return value ? 'true' : 'false'
	}
}

export const toOnOffAttr = (value: boolean | string | number): string => {
	if (typeof value === 'string') {
		return ['true', 'True', 'TRUE', '1', 'On', 'on', 'ON'].indexOf(value) !== -1 ? 'on' : 'off'
	} else if (typeof value === 'number') {
		return value > 0 ? 'on' : 'off'
	} else if (typeof value === 'boolean') {
		return value ? 'on' : 'off'
	} else {
		return value ? 'on' : 'off'
	}
}

export const toBoolAttrIfDefined = (value: boolean | string | number | undefined | null): undefined | string => {
	return typeof value === 'undefined' ? undefined : toBoolAttr(value)
}

export const toOnOffAttrIfDefined = (value: boolean | string | number | undefined | null): undefined | string => {
	return typeof value === 'undefined' ? undefined : toOnOffAttr(value)
}
