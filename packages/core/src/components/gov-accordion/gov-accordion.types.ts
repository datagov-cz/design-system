import { GovBaseEvent } from "../../types/event.types"

export interface AccordionItemEvent extends GovBaseEvent {
	open: boolean
	ref: HTMLGovAccordionItemElement
}

export interface AccordionEvent extends GovBaseEvent {
	open: boolean
	ref: HTMLGovAccordionItemElement
}
