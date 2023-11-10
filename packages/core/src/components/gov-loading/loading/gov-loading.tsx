import { Component, Element, h, Host } from "@stencil/core"
import { LoadingClass } from "./constants"
import { govHost, prepareClasses } from "../../../helpers/Dom/template"
import { GovHost } from "../../../helpers/Dom/template.types"

@Component({
	tag: "gov-loading",
	styleUrl: "gov-loading.scss",
})
export class GovLoading {
	private h: GovHost

	constructor() {
		this.h = govHost(this.host)
	}

	@Element() host: HTMLGovLoadingElement

	render() {
		return (
			<Host class={this.h.classes(LoadingClass.root)}>
				<div class={LoadingClass.content}>
					<gov-icon class={prepareClasses([LoadingClass.icon, "gov-spin-animation"])} name="loader"></gov-icon>
					<slot />
				</div>
				<gov-backdrop inverse={true} />
			</Host>
		)
	}
}
