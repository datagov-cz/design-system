import { Component, Host, h } from '@stencil/core'
import { Router } from '@vaadin/router'
import '../../pages/Accordion'
import '../../pages/Breadcrumbs'
import '../../pages/Button'
import '../../pages/Card'
import '../../pages/Chip'
import '../../pages/Container'
import '../../pages/ControlGroup'
import '../../pages/Cookiebar'
import '../../pages/Empty'
import '../../pages/Error'
import '../../pages/FormLabel'
import '../../pages/FormMessage'
import '../../pages/Forms'
import '../../pages/FormsRestructure'
import '../../pages/Grid'
import '../../pages/Home'
import '../../pages/Infobar'
import '../../pages/Layout'
import '../../pages/Loading'
import '../../pages/Message'
import '../../pages/Modal'
import '../../pages/Nav'
import '../../pages/Pagination'
import '../../pages/Prompt'
import '../../pages/SideNav'
import '../../pages/Spacer'
import '../../pages/Statsbar'
import '../../pages/Stepper'
import '../../pages/Tabs'
import '../../pages/Tag'
import '../../pages/Tiles.js'
import '../../pages/ToastMessage'
import '../../pages/ToastMessageCountdown'
import '../../pages/Tooltip'
import '../../pages/Typography'
import '../../pages/Wizard'

@Component({
	tag: 'gov-app',
	styleUrl: 'gov-app.scss',
	shadow: false,
})
export class GovApp {
	componentWillLoad() {
		const outlet = document.getElementById('outlet')
		outlet.innerHTML = ''
		const router = new Router(outlet)
		router.setRoutes([
			{ path: '/', component: 'home-page' },
			{ path: '/infobar', component: 'infobar-page' },
			{ path: '/accordion', component: 'accordion-page' },
			{ path: '/chip', component: 'chip-page' },
			{ path: '/button', component: 'button-page' },
			{ path: '/breadcrumbs', component: 'breadcrumbs-page' },
			{ path: '/card', component: 'card-page' },
			{ path: '/message', component: 'message-page' },
			{ path: '/cookiebar', component: 'cookiebar-page' },
			{ path: '/container', component: 'container-page' },
			{ path: '/control-group', component: 'control-group-page' },
			{ path: '/empty', component: 'empty-page' },
			{ path: '/error', component: 'error-page' },
			{ path: '/forms', component: 'forms-page' },
			{ path: '/forms-restructue', component: 'forms-restructure-page' },
			{ path: '/form-message', component: 'form-message-page' },
			{ path: '/form-label', component: 'form-label-page' },
			{ path: '/grid', component: 'grid-page' },
			{ path: '/loading', component: 'loading-page' },
			{ path: '/modal', component: 'modal-page' },
			{ path: '/nav', component: 'nav-page' },
			{ path: '/spacer', component: 'spacer-page' },
			{ path: '/statsbar', component: 'statsbar-page' },
			{ path: '/stepper', component: 'stepper-page' },
			{ path: '/tabs', component: 'tabs-page' },
			{ path: '/tag', component: 'tag-page' },
			{ path: '/tooltip', component: 'tooltip-page' },
			{ path: '/tiles', component: 'tiles-page' },
			{ path: '/typography', component: 'typography-page' },
			{ path: '/toast-message', component: 'toast-message-page' },
			{ path: '/toast-message-countdown', component: 'toast-message-countdown-page' },
			{ path: '/pagination', component: 'pagination-page' },
			{ path: '/prompt', component: 'prompt-page' },
			{ path: '/wizard', component: 'wizard-page' },
			{ path: '/side-nav', component: 'side-nav-page' },
			{ path: '/grid', component: 'grid-page' },
			{ path: '/layout', component: 'layout-page' },
		])
	}

	render() {
		return <Host />
	}
}
