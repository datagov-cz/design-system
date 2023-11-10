import { GovBaseEvent } from "../../../types/event.types"

export interface GovFormFileEvent extends GovBaseEvent {
	files?: GovFormFileItem[]
	file?: GovFormFileItem
}

export interface GovFormFileItem {
	id: string
	file: File
	sizeValid: boolean
	acceptValid: boolean
}
