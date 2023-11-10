import { GovBaseEvent } from "../../../types/event.types"

export interface GovFormMultiSelectItem {
	name: string
	value: string
	disabled?: boolean
}

export interface FormMultiselectEvent extends GovBaseEvent {
	value: GovFormMultiSelectItem[]
}
