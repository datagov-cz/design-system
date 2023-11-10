import { GovHost } from './template.types'
export interface GovForm {
	govHost: GovHost
	control: HTMLGovFormControlElement | null
	label: HTMLGovFormLabelElement | null
	passAttrToControl: (name: string, value: string) => void
	passAttrToLabel: (name: string, value: string) => void
	hasGroupChildren: boolean
	mainElementsInControl: Element[]
	messageElements: HTMLGovFormMessageElement[]
}
