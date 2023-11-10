import { GovBaseEvent } from "../../types/event.types"
import { Pagination } from "./pagination"

export interface PaginationEvent extends GovBaseEvent {
	pagination: Pagination
}

