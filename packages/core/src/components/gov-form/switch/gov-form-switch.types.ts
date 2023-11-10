import { GovBaseEvent } from "../../../types/event.types"

export interface FormSwitchEvent extends GovBaseEvent {
	checked: boolean,
	value: string
}
