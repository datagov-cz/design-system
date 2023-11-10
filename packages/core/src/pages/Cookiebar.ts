class Cookiebar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<gov-cookiebar>
				<h2 class="h4">Můžeme si u vás uložit cookies?</h2>

				<p>
					Co že to znamená? Cookies jsou malé datové soubory, které slouží např. k tomu, aby si web pamatoval vaše nastavení a to, co vás zajímá, nebo abychom jej zlepšovali . Pro ukládání různých typů cookies od vás potřebujeme souhlas. Web bude fungovat i bez souhlasu, s ním ale o něco lépe.
				</p>

				<gov-button variant="primary" slot="actions-primary">
					Souhlasím se všemi
				</gov-button>

				<gov-button variant="primary" type="outlined" slot="actions-primary">
					Odmítnout všechny
				</gov-button>

				<gov-button variant="primary" type="base" slot="actions-secondary">
					Podrobné nastavení
				</gov-button>
			</gov-cookiebar>
		`
	}
}

if (customElements.get('cookiebar-page') === undefined) {
	customElements.define('cookiebar-page', Cookiebar)
}
