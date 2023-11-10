import Fragment from "../../helpers/Fragment"
import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from "@stencil/core"
import { validateProp } from "../../helpers/Validate/props"
import {
	PaginationClass,
	PaginationSizeType,
	PaginationSizes,
	PaginationVariantType,
	PaginationType,
	PaginationTypes,
	PaginationVariants,
} from "./constants"
import { govHost, prepareClasses } from "../../helpers/Dom/template"
import { paginate, Pagination } from "./pagination"
import { toBoolAttrIfDefined } from "../../helpers/Dom/template"
import { validateWcagLabel, validateWcagProp } from "../../helpers/Validate/wcag"
import { canValidateWcagOnRender } from "../../helpers/Dom/win"
import { delay } from "../../utils/utils"
import { createID } from "../../utils/string.utils"
import { GovHost } from "../../helpers/Dom/template.types"
import {createArrayRange } from "../../utils/array.utils"
import { FormSelectEvent } from "../gov-form/select/gov-form-select.types"
import { PaginationEvent } from "./gov-pagination.types"

@Component({
	tag: "gov-pagination",
	styleUrl: "gov-pagination.scss",
})
export class GovPagination {
	private h: GovHost
	private readonly pageSelectId: string

	private spreadSelectRef?: HTMLGovFormSelectElement

	constructor() {
		this.h = govHost(this.host)
		this.pageSelectId = createID("GovPageSelect")
	}

	@Element() readonly host: HTMLGovPaginationElement
	/**
	 * Pagination type
	 */
	@Prop() readonly type: PaginationType = "button"
	/**
	 * Currently displayed page
	 */
	@Prop() readonly current: number = 1
	/**
	 * Total count of entries
	 */
	@Prop() readonly total: number = 0
	/**
	 * Set on active page
	 */
	@Prop() readonly inverse: boolean
	/**
	 * Pagination's size
	 */
	@Prop() readonly size?: PaginationSizeType = "m"
	/**
	 * Style variation of the pagination.
	 */
	@Prop() readonly variant?: PaginationVariantType = "primary"
	/**
	 * Maximum number of entries per page
	 */
	@Prop({ attribute: "page-size" }) readonly pageSize: number = 10
	/**
	 * Maximum pages displayed for selection
	 */
	@Prop({ attribute: "max-pages" }) readonly maxPages: number = 5
	/**
	 * Setting a link to redirect to a given page.
	 * The {PAGE} wildcard can be used in the link to replace the page number.
	 * Note that in the case of paging through a link, it is always necessary to send to the component the current page where the user is.
	 */
	@Prop() readonly link: string
	/**
	 * Adds accessible label for the pagination that is only shown for screen readers.
	 */
	@Prop({ attribute: "wcag-label" }) readonly wcagLabel: string
	/**
	 * Indicates the id of a component that labels the pagination.
	 */
	@Prop({ attribute: "wcag-labelled-by" }) readonly wcagLabelledBy: string
	/**
	 * Adds accessible label for the page select
	 */
	@Prop({ attribute: "wcag-select-label" }) readonly wcagSelectLabel: string = "Vybrat stranu"
	/**
	 * Adds accessible label for the page item
	 */
	@Prop({ attribute: "wcag-page-label" }) readonly wcagPageLabel: string = "Strana"
	/**
	 * Event called when changing the page with the current setting of the whole paging
	 */
	@Event({ eventName: "gov-page" }) govPage: EventEmitter<PaginationEvent>

	@State() pagination: Pagination

	@Watch("type")
	validateType(newValue: string): void {
		validateProp(PaginationTypes, newValue, PaginationClass.root)
	}

	@Watch("size")
	validateSize(newValue: string): void {
		validateProp(PaginationSizes, newValue, PaginationClass.root)
	}

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(PaginationVariants, newValue, PaginationClass.root)
	}

	@Watch("current")
	@Watch("total")
	@Watch("pageSize")
	@Watch("maxPages")
	recalculate(): void {
		this.recalculatePagination(this.current)
	}

	componentWillLoad() {
		this.recalculatePagination(this.current)
		this.validateSize(this.size)
		this.validateVariant(this.variant)
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}
	}

	private recalculatePagination(currentPage: number) {
		this.pagination = paginate(this.total, currentPage, this.pageSize, this.maxPages)
	}

	private isActivePageClass(originalClass: string, page: number) {
		if (this.pagination.currentPage === page) {
			return originalClass + " is-active"
		} else {
			return originalClass
		}
	}

	private prepareLinkUrl(page: number) {
		if (this.link) {
			return String(this.link).replace("{PAGE}", String(page))
		}
		return undefined
	}

	private resetSelectValue() {
		if (this.spreadSelectRef) {
			this.spreadSelectRef.getRef()
				.then((el: HTMLSelectElement) => {
					el.value = '...'
				})
		}
	}

	render() {
		const pageResolver = (page: number, content: any) => {
			const isDisabled = page === -1
			const ariaCurrent = toBoolAttrIfDefined(this.pagination.currentPage === page ? true : undefined)
			return (
				<gov-button
					href={this.prepareLinkUrl(page)}
					variant={this.variant}
					size={this.size}
					type="base"
					disabled={isDisabled}
					on-gov-click={(e) => this.onClickHandler(e, page)}
					wcag-label={page > -1 ? this.wcagPageLabel + " " + page : undefined}
					wcag-current={ariaCurrent}
					class={PaginationClass.inner}>
					{content}
				</gov-button>
			)
		}
		return (
			<Host class={this.h.classes(PaginationClass.root)} type={this.type} variant={this.variant} size={this.size}>
				<nav aria-label={this.wcagLabel} aria-labelledby={this.wcagLabelledBy}>
					<ul class={PaginationClass.list}>
						<li class={prepareClasses([PaginationClass.item, PaginationClass.itemArrow])}>
							{pageResolver(
								this.pagination.currentPage > 1 ? 1 : -1,
								<gov-icon class={PaginationClass.arrow} name="chevron-double-left"></gov-icon>,
							)}
						</li>

						<li class={prepareClasses([PaginationClass.item, PaginationClass.itemArrow])}>
							{pageResolver(
								this.pagination.startPage < this.pagination.currentPage ? this.pagination.currentPage - 1 : -1,
								<gov-icon class={PaginationClass.arrow} name="chevron-left"></gov-icon>,
							)}
						</li>

						{this.type == "select" ? (
							<li class={prepareClasses([PaginationClass.item, PaginationClass.itemSelect])}>
								<span class={PaginationClass.inner}>
									<span id={this.pageSelectId} hidden>
										{this.wcagSelectLabel}
									</span>
									<gov-form-select
										size="m"
										variant={this.variant}
										wcag-labelled-by={this.pageSelectId}
										on-gov-change={this.onSelectHandler.bind(this)}>
										{createArrayRange(1, this.pagination.totalPages).map(page => (
											<option value={page} selected={this.pagination.currentPage === page}>
												{page}
											</option>
										))}
									</gov-form-select>
								</span>
							</li>
						) : (
							<Fragment>
								{this.pagination.pages.map(page => (
									<li class={this.isActivePageClass(PaginationClass.item, page)}>{pageResolver(page, page)}</li>
								))}
								{this.pagination.totalPages ? (
									<li class={prepareClasses([PaginationClass.item, PaginationClass.itemMore])}>
									<span class={PaginationClass.inner}>
										<span id={this.pageSelectId} hidden>
											{this.wcagSelectLabel}
										</span>
										<gov-form-select
											size="m"
											variant={this.variant}
											wcag-labelled-by={this.pageSelectId}
											ref={el => (this.spreadSelectRef = el as HTMLGovFormSelectElement)}
											on-gov-change={this.onSelectHandler.bind(this)}>
											<option selected hidden>...</option>
											{createArrayRange(1, this.pagination.totalPages).map(page => (
												<option value={page} selected={false}>
													{page}
												</option>
											))}
										</gov-form-select>
									</span>
									</li>
								) : null}
							</Fragment>
						)}

						<li class={prepareClasses([PaginationClass.item, PaginationClass.itemArrow])}>
							{pageResolver(
								this.pagination.totalPages > this.pagination.currentPage ? this.pagination.currentPage + 1 : -1,
								<gov-icon class={PaginationClass.arrow} name="chevron-right"></gov-icon>,
							)}
						</li>

						<li class={prepareClasses([PaginationClass.item, PaginationClass.itemArrow])}>
							{pageResolver(
								this.pagination.totalPages > this.pagination.currentPage ? this.pagination.totalPages : -1,
								<gov-icon class={PaginationClass.arrow} name="chevron-double-right"></gov-icon>,
							)}
						</li>
					</ul>
				</nav>
			</Host>
		)
	}

	private onClickHandler(e: CustomEvent, page: number): void {
		e.stopPropagation()
		this.recalculatePagination(page)
		this.govPage.emit({
			component: PaginationClass.root,
			pagination: this.pagination
		})
	}

	private onSelectHandler(e: CustomEvent<FormSelectEvent>): void {
		e.stopPropagation()
		const value = e.detail.value
		const page = parseInt(value)
		this.resetSelectValue()
		if (isNaN(page) === false) {
			this.recalculatePagination(page)
			if (this.link) {
				window.location.href = this.prepareLinkUrl(page)
			} else {
				this.govPage.emit({
					component: PaginationClass.root,
					pagination: this.pagination
				})
			}
		}
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagProp(this.wcagPageLabel, "wcag-page-label", PaginationClass.root)
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, PaginationClass.root)
	}
}
