import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from "@stencil/core"
import { validateProp } from "../../helpers/Validate/props"
import { ToastClass, ToastTypesType, ToastVariants, ToastVariantType } from "./constants"
import { govHost } from "../../helpers/Dom/template"
import { GovHost } from "../../helpers/Dom/template.types"
import { createID } from "../../utils/string.utils"

@Component({
	tag: "gov-toast",
	styleUrl: "gov-toast.scss",
})
export class GovToast {
	private h: GovHost
	private timeout
	private readonly toastId: string

	constructor() {
		this.h = govHost(this.host)
		this.toastId = createID("GovToast")
	}

	@Element() host: HTMLGovToastElement
	/**
	 * Style variation of the toast message.
	 */
	@Prop() readonly variant?: ToastVariantType = "primary"

	/**
	 * Toast’s gravity
	 */
	@Prop() readonly gravity: "top" | "bottom" = "top"
	/**
	 * Toast’s position
	 */
	@Prop() readonly position: "left" | "center" | "right" = "right"
	/**
	 * Toast type
	 */
	@Prop() readonly type?: ToastTypesType = "classic"
	/**
	 * Number of milliseconds to wait before Toast disappear
	 */
	@Prop() readonly time: number = 0
	/**
	 * Closing button texting instead of icons
	 */
	@Prop({ attribute: "close-label" }) readonly closeLabel: string
	/**
	 * Aria label for the closing button. It is mandatory if the alert is closable
	 */
	@Prop({ attribute: "wcag-close-label" }) readonly wcagCloseLabel: string
	/**
	 * Called when the close button is clicked
	 */
	@Event({ eventName: "gov-close" }) govClose: EventEmitter<string>

	@Watch("variant")
	validateVariant(newValue: string): void {
		validateProp(ToastVariants, newValue, ToastClass.root)
	}

	componentWillLoad(): void {
		this.validateVariant(this.variant)
		this.runTimer()
	}

	disconnectedCallback() {
		clearTimeout(this.timeout)
	}

	private runTimer() {
		if (this.isSolid) {
			this.host.classList.add("is-initialized")
		}
		if (this.isTimer) {
			this.timeout = setTimeout(() => {
				this.host.classList.add(ToastClass.hidden)
				setTimeout(() => {
					this.destroy().catch()
					this.govClose.emit(this.toastId)
				}, 600)
			}, this.time)
		}
	}

	render() {
		return (
			<Host
				class={this.h.classes([ToastClass.root, "gov-box-shadow--m"])}
				data-toast-id={this.toastId}
				gravity={this.gravity}
				position={this.position}
				variant={this.variant}
				type={this.type}
				style={{ "--toast-duration": this.time + "ms" }}
			>
				{this.h.hasSlot("icon") && (
					<span class={ToastClass.icon}>
						<slot name="icon" />
					</span>
				)}

				<div class={ToastClass.content} aria-live="polite" role="status">
					<slot />
				</div>

				<div class={ToastClass.close}>
					<gov-button
						size="s"
						wcag-label={this.wcagCloseLabel}
						variant={this.isSolid ? this.variant : "secondary"}
						inverse={this.isSolid}
						type="base"
						on-gov-click={this.onCloseHandler.bind(this)}
					>
						{this.closeLabel ? this.closeLabel : <gov-icon name="x-lg"></gov-icon>}
					</gov-button>
				</div>

				<div class={ToastClass.timer}></div>
			</Host>
		)
	}

	private onCloseHandler(): void {
		this.destroy()
			.then(() => this.govClose.emit(this.toastId))
			.catch()
	}

	get isSolid(): boolean {
		return this.type === "solid"
	}

	get isTimer(): boolean {
		return Number.isInteger(this.time) && this.time > 0
	}

	/**
	 * Remove toast from dom
	 */
	@Method()
	async destroy(): Promise<void> {
		clearTimeout(this.timeout)
		const toast = document.querySelector(`[data-toast-id="${this.toastId}"]`)
		console.log(toast);
		if (toast) {
			toast.classList.add(ToastClass.hidden)
			if (typeof toast.remove === "function") {
				toast.remove()
			}
		}
	}
}
