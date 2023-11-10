class FormsRestructurePage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<h4>Forms</h4>
			<div class="container-view container-view--inline">
			</div>
		`
	}
}

if (customElements.get('forms-restructue-page') === undefined) {
	customElements.define('forms-restructue-page', FormsRestructurePage)
}
