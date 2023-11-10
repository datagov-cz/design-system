class BreadcrumbsPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>Breadcrumbs</h2>

		<gov-breadcrumbs wcag-label="Drobečková navigace pro stránku Czech POINT">
			<ul>
				<li>
					<button>
					Domů
					</button>
				</li>
				<li>
					<gov-icon  name="chevron-right"></gov-icon>
					<a href="#">Kam dál</a>
				</li>
				<li>
					<gov-icon  name="chevron-right"></gov-icon>
					<a href="#">
					Český eGovernment
					</a>
				</li>
				<li>
					<gov-icon name="chevron-right"></gov-icon>
					<strong>Czech POINT</strong>
				</li>
			</ul>
		</gov-breadcrumbs>

		`
	}
}

if (customElements.get("breadcrumbs-page") === undefined) {
	customElements.define("breadcrumbs-page", BreadcrumbsPage)
}
