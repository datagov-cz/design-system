class NavPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `

			<h4>Nav</h4>

			<gov-nav wcag-label="Hlavní navigace">
				<gov-nav-item href="#">
					Úvod
				</gov-nav-item>
				<gov-nav-item href="#">
					Služby veřejná správy
				</gov-nav-item>
				<gov-nav-item href="#">
					Životní události
				</gov-nav-item>
				<gov-nav-item href="#">
					O živote v ČR
				</gov-nav-item>
				<gov-nav-item href="#">
					Časté dotazy
				</gov-nav-item>
			</gov-nav>
		`
	}
}

if (customElements.get('nav-page') === undefined) {
	customElements.define('nav-page', NavPage)
}
