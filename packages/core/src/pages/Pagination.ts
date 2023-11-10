class PaginationPage extends HTMLElement {
	connectedCallback() {
		setTimeout(() => {
			const bagr = document.getElementById('bagr')
			if (bagr) {
				bagr.addEventListener('gov-page', () => {
					// console.log(e)
					// bagr.setAttribute('current', String(e))
				})
			}
		}, 500)
		this.innerHTML = `
		<h2>Pagination</h2>

		<gov-pagination total="212" wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>
		<br>
		<gov-pagination size="s" total="212" wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>
		<br>
		<gov-pagination  id="bagr"  type="select" total="212"  wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>
		<br>
		<gov-pagination type="select" size="s" total="212"  wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>
		<br>
		<br>
		<gov-pagination variant="secondary" total="212" current="2" wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>
		<br>
		<gov-pagination size="s" variant="secondary" wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>
		<br>
		<gov-pagination type="select" variant="secondary" total="212"  wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>
		<br>
		<gov-pagination type="select" variant="secondary" size="s" total="212"  wcag-label="Stránkování pro sekci dokumenty" wcag-select-label="Vybrat stránku"></gov-pagination>

		`
	}
}

if (customElements.get('pagination-page') === undefined) {
	customElements.define('pagination-page', PaginationPage)
}
