class ToastMessagePage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>
			Toast Message
		</h2>
		<gov-toast variant="success">
			<gov-icon name="check-lg" slot="icon"></gov-icon>
			<p>
				Vaše dokumenty byly úspěšně staženy.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="error" gravity="bottom" position="left">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Není možné požadavek zpracovat z důvodu chyby serveru.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="warning" position="left">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Žádost se nepodařilo odeslat, zkontrolujte nastavení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="primary" position="center">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Soubory jsou připraveny ke stažení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="secondary"  gravity="bottom" position="right">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Vaše aplikace byla aktualizovaná na novou verzi!
			</p>
		</gov-toast>
			`
	}
}

if (customElements.get('toast-message-page') === undefined) {
	customElements.define('toast-message-page', ToastMessagePage)
}
