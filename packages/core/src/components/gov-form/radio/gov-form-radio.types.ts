import { GovBaseEvent } from "../../../types/event.types"

export interface FormRadioEvent extends GovBaseEvent {
	checked: boolean,
	value: string
}
