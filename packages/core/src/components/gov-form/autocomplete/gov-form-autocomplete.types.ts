import { GovBaseEvent } from "../../../types/event.types"
import { Nullable } from "../../../types/interfaces"

export interface FormAutocompleteEvent extends GovBaseEvent {
	value: string
	selected: Nullable<GovFormAutocompleteItem>
}

export interface GovFormAutocompleteItem {
	[key: string]: any
}
