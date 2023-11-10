class ErrorPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>Error</h2>
		<gov-error-code>
			<gov-icon slot="icon" name="card-400" type="complex"></gov-icon>
			<h2 class="gov-text--6xl">Page Not Found</h2>
			<p class="gov-text--l">Sorry, the page you are looking for does not exist.</p>
		</gov-error-code>
		`
	}
}

if (customElements.get('error-page') === undefined) {
	customElements.define('error-page', ErrorPage)
}
