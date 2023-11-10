import { Component, Element, h, Host, Method, Prop } from "@stencil/core"
import { TileClass } from "./constants"
import { govHost } from "../../helpers/Dom/template"
import { GovHost } from "../../helpers/Dom/template.types"
import { ButtonTargetType } from "../gov-button/button/constants"

@Component({
	tag: "gov-tile",
	styleUrl: "gov-tile.scss",
})
export class GovTile {
	private triggerRef?: HTMLLinkElement | HTMLSpanElement
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovTileElement
	/**
	 * Link on whole tile
	 */
	@Prop({reflect: true}) readonly href: string
	/**
	 * Same as original parameter
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
	 */
	@Prop() readonly target?: ButtonTargetType

	render() {
		return (
			<Host class={this.h.classes(TileClass.root)}>
				{this.href ? (
					<a
						href={this.href}
						target={this.target}
						class={TileClass.link}
						ref={el => (this.triggerRef = el as HTMLLinkElement | HTMLSpanElement)}>
						{this.h.hasSlot("icon") && (
							<span class={TileClass.icon}>
								<slot name="icon" />
							</span>
						)}
						{this.h.hasSlot("title") && (
							<span class={TileClass.title}>
								<slot name="title" />
								<gov-icon class={TileClass.arrow} name="chevron-right"></gov-icon>
							</span>
						)}
						<div class={TileClass.content}>
							<slot />
						</div>
					</a>
				) : (
					<span>
						{this.h.hasSlot("icon") && (
							<span class={TileClass.icon}>
								<slot name="icon" />
							</span>
						)}
						{this.h.hasSlot("title") && (
							<span class={TileClass.title}>
								<slot name="title" />
							</span>
						)}
						<div class={TileClass.content}>
							<slot />
						</div>
					</span>
				)}
			</Host>
		)
	}

	/**
	 * Returns a clickable element instance
	 */
	@Method()
	async getTriggerRef() {
		return this.triggerRef
	}
}
