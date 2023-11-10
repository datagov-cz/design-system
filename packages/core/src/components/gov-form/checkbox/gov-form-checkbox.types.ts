import { GovBaseEvent } from "../../../types/event.types"

export interface FormCheckboxEvent extends GovBaseEvent {
	checked: boolean,
	value: string
}
