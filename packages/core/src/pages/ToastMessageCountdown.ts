class ToastMessageCountdownPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>
			Toast Message Countdown
		</h2>
		<gov-toast variant="success" type="solid" time="10000">
			<gov-icon name="check-lg" slot="icon"></gov-icon>
			<p>
				Vaše dokumenty byly úspěšně staženy.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="error" type="solid" gravity="bottom" position="left" time="10000">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Není možné požadavek zpracovat z důvodu chyby serveru.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="warning" type="solid" position="left" time="10000">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Žádost se nepodařilo odeslat, zkontrolujte nastavení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="primary" type="solid" position="center" time="10000">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Soubory jsou připraveny ke stažení.
			</p>
		</gov-toast>
		<br>
		<gov-toast variant="secondary" type="solid" gravity="bottom" position="right" time="10000">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Vaše aplikace byla aktualizovaná na novou verzi!
			</p>
		</gov-toast>
			`
	}
}

if (customElements.get('toast-message-countdown-page') === undefined) {
	customElements.define('toast-message-countdown-page', ToastMessageCountdownPage)
}
