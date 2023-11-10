import { GovBaseEvent } from "../../../types/event.types"

export interface FormSelectEvent extends GovBaseEvent {
	value: string
}

export interface FormSelectOption {
	value: string
	label: string
	disabled?: boolean
}
