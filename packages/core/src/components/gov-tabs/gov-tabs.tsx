import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from "@stencil/core"
import { validateProp } from "../../helpers/Validate/props"
import { TabOrientationType, TabsClass, TabsItemClass, TabType, TabTypes, TabVariants, VariantType } from "./constants"
import { GovTabControllerItem } from "./gov-tabs.types"
import { govHost, toBoolAttr } from "../../helpers/Dom/template"
import { validateWcagLabel, validateWcagProp } from "../../helpers/Validate/wcag"
import { canValidateWcagOnRender } from "../../helpers/Dom/win"
import { delay, throttle } from "../../utils/utils"
import { createID } from "../../utils/string.utils"
import { Nullable } from "../../types/interfaces"
import { GovHost } from "../../helpers/Dom/template.types"

@Component({
	tag: "gov-tabs",
	styleUrl: "gov-tabs.scss",
})
export class GovTabs {
	private h: GovHost
	private triggerRefs: { [key: string]: HTMLButtonElement | HTMLGovChipElement } = {}
	private tabsRef?: HTMLDivElement

	private readonly formSelectId: string

	constructor() {
		this.h = govHost(this.host)
		this.formSelectId = createID("GovFormSelect")
	}

	@Element() host: HTMLGovTabsElement
	@State() controller: GovTabControllerItem[] = []
	@State() focusIndex = 0
	@State() compactControls = false
	/**
	 * Tabs type
	 */
	@Prop() readonly type: TabType = "text"
	/**
	 * Style variation of the tab chips.
	 */
	@Prop() readonly variant?: VariantType = "primary"
	/**
	 * Tabs orientation
	 */
	@Prop() readonly orientation: TabOrientationType = "horizontal"
	/**
	 * Adds accessible label for the tabs that is only shown for screen readers.
	 */
	@Prop({ attribute: "wcag-label" }) readonly wcagLabel: string
	/**
	 * Adds accessible label for the tabs select
	 */
	@Prop({ attribute: "wcag-select-label" }) readonly wcagSelectLabel: string
	/**
	 * Indicates the id of a component that labels the tabs.
	 */
	@Prop({ attribute: "wcag-labelled-by" }) readonly wcagLabelledBy: string
	/**
	 * Emitted when the tab is changed.
	 */
	@Event({ eventName: "gov-change" }) govChange: EventEmitter<HTMLGovTabsItemElement>

	@Watch("type")
	validateType(newValue: string): void {
		validateProp(TabTypes, newValue, TabsClass.root)
	}

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(TabVariants, newValue, TabsClass.root)
	}

	componentWillLoad() {
		this.prepareDataSource()
	}

	async componentDidRender() {
		if (canValidateWcagOnRender()) {
			await delay(500)
			await this.validateWcag()
		}

		this.resizeObserver()
	}

	private prepareDataSource(): void {
		this.controller = []
		const promises: Promise<GovTabControllerItem>[] = []
		this.host.querySelectorAll(TabsItemClass.root).forEach((tab: HTMLGovTabsItemElement) => {
			const controlItem = Promise.all([
				tab.getIdentifier(),
				tab.getTriggerIdentifier(),
			]).then(([identifier, triggerIdentifier]) => {
				const isDefault = typeof tab.getAttribute("default") === "string"
				return {
					label: tab.getAttribute("label"),
					contentIdentifier: identifier,
					triggerIdentifier: triggerIdentifier,
					element: tab,
					active: false,
					default: isDefault,
				}
			})
			promises.push(controlItem)
		});
		Promise.all(promises).then(controllers => {
			let defaultTab = controllers.findIndex(controller => controller.default)
			if (defaultTab === -1) defaultTab = 0
			this.focusIndex = defaultTab
			controllers[defaultTab].active = true
			this.controller = [...controllers]
			this.reRender()
		})
	}

	private setActiveByIdentifier(identifier: string) {
		const temp = []
		this.controller.map(item => {
			item.active = identifier === item.triggerIdentifier || identifier === item.contentIdentifier
			temp.push(item)
		})
		this.controller = [...temp]
	}

	private reRender() {
		this.controller.map(control => {
			control.element.setActiveStatus(control.active)
		})
	}

	/*
	private evaluateControls() {
		this.compactControls = false
		let sumOfWidth = this.tabsRef.querySelector("ul").offsetWidth
		this.compactControls = this.tabsRef.offsetWidth < sumOfWidth
	}
	*/

	private resizeObserver() {
		const resizeObserver = new ResizeObserver(
			throttle(() => {
				// this.evaluateControls()
			}, 200),
		)

		resizeObserver.observe(this.tabsRef)
	}

	render() {
		return (
			<Host
				class={this.h.classes(TabsClass.root)}
				variant={this.variant}
				type={this.type}
				role="tablist"
				ref={el => (this.tabsRef = el as HTMLDivElement)}
				aria-label={this.wcagLabel}
				aria-labelledby={this.wcagLabelledBy}
				onKeyDown={this.onKeydownHandler.bind(this)}
			>
				<div class={TabsClass.tabs} aria-hidden={toBoolAttr(this.compactControls)}>
					<ul class={TabsClass.list}>
						{this.controller.map((control, index) => (
							<li class={TabsClass.item}>
								{this.type == "text" ? (
									<button
										class={TabsClass.btn}
										id={control.triggerIdentifier}
										role="tab"
										onClick={() => this.onSelectHandler(control, index)}
										aria-selected={toBoolAttr(control.active)}
										aria-controls={control.contentIdentifier}
										tabindex={control.active ? 0 : -1}
										ref={el => (this.triggerRefs[control.triggerIdentifier] = el as HTMLButtonElement)}
									>
										{control.label}
									</button>
								) : (
									<gov-chip
										role="tab"
										tag={'button'}
										identifier={control.triggerIdentifier}
										wcag-selected={control.active}
										wcag-controls={control.contentIdentifier}
										focusable={control.active}
										variant={this.variant}
										inverse={!control.active}
										ref={el => (this.triggerRefs[control.triggerIdentifier] = el as HTMLGovChipElement)}
										on-gov-click={() => this.onSelectHandler(control, index)}
									>
										{control.label}
									</gov-chip>
								)}
							</li>
						))}
					</ul>
				</div>

				<span id={this.formSelectId} hidden>
					{this.wcagSelectLabel}
				</span>
				{this.compactControls ? (
					<gov-form-select wcag-labelled-by={this.formSelectId} onGov-change={this.onChangeHandler.bind(this)}>
						{this.controller.map(control => (
							<option value={control.triggerIdentifier} selected={control.active}>
								{control.label}
							</option>
						))}
					</gov-form-select>
				) : null}

				<slot></slot>
			</Host>
		)
	}

	private getCurrentTab(): GovTabControllerItem | null {
		return this.controller.find(control => control.active) || null
	}

	private onSelectHandler(control: GovTabControllerItem, index: number) {
		this.focusIndex = index
		this.setActiveByIdentifier(control.triggerIdentifier)
		this.reRender()
		this.govChange.emit(this.getCurrentTab().element)
	}

	private onChangeHandler(e: CustomEvent) {
		const triggerId = (e.target as HTMLSelectElement).value
		e.stopPropagation()
		this.setActiveByIdentifier(triggerId)
		this.reRender()
		this.govChange.emit(this.getCurrentTab().element)
	}

	private onKeydownHandler(e: KeyboardEvent) {
		const keyCode = e.keyCode
		e.stopPropagation()
		if ([37, 38, 39, 40].includes(keyCode)) {
			if (false === (this.focusIndex >= 0 && this.focusIndex <= this.controller.length - 1)) {
				return
			}
			this.controller[this.focusIndex].active = false

			if (keyCode === 39 || keyCode === 40) {
				this.focusIndex++
				if (this.focusIndex >= this.controller.length) {
					this.focusIndex = 0
				}
			} else if (keyCode === 37 || keyCode === 38) {
				this.focusIndex--
				if (this.focusIndex < 0) {
					this.focusIndex = this.controller.length - 1
				}
			}
			if (this.focusIndex >= 0 && this.focusIndex <= this.controller.length - 1) {
				const current = this.controller[this.focusIndex]
				current.active = true
				const trigger = this.triggerRefs[current.triggerIdentifier]
				if(trigger.nodeName.toLowerCase() === 'gov-chip') {
					(this.triggerRefs[current.triggerIdentifier] as HTMLGovChipElement).setFocus()
				} else {
					this.triggerRefs[current.triggerIdentifier].focus()
				}

				this.controller = [...this.controller]
				this.reRender()
				this.govChange.emit(this.getCurrentTab().element)
			}
		}
	}

	/**
	 * Regenerate tabs controllers
	 */
	@Method()
	async refresh(): Promise<void> {
		this.prepareDataSource()
	}

	/**
	 * Returns the currently selected tabs-item
	 */
	@Method()
	async currentTab(): Promise<Nullable<HTMLGovTabsItemElement>> {
		return this.getCurrentTab().element || null
	}

	/**
	 * Regenerate tabs controllers
	 */
	@Method()
	async setActiveTab(identifier: string): Promise<void> {
		this.setActiveByIdentifier(identifier)
		this.reRender()
	}

	/**
	 * Validate the WCAG attributes of the component
	 */
	@Method()
	async validateWcag(): Promise<void> {
		validateWcagProp(this.wcagSelectLabel, "wcag-select-label", TabsClass.root)
		validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, TabsClass.root)
	}
}
