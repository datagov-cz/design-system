class FormLabelPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<gov-form-label>
				Form Label
			</gov-form-label>
	`
	}
}

if (customElements.get('form-label-page') === undefined) {
	customElements.define('form-label-page', FormLabelPage)
}
