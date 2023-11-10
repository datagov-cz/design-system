class PromptPage extends HTMLElement {
	connectedCallback() {
		setTimeout(function () {
			document.getElementById('btn').addEventListener('gov-click', function () {
				document.getElementById('modal').setAttribute('open', 'true')
			})
		}, 500)
		this.innerHTML = `
            <h2>Prompt</h2>
			<gov-button variant="error" id="btn">Smazat dokument</gov-button>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>

			<gov-prompt label="Smazání dokumentu" id="modal" wcag-close-label="Zavřít prompt">
				<gov-icon class="gov-color--error-400" slot="icon" name="info"></gov-icon>
				<p class="gov-text--l gov-color--secondary-800">Opravdu chcete tento dokument smazat?</p>
				<p>Pokud tak učiníte, tak již nebude cesty zpět a souboru bude nenávratně odstraněn ze serveru. Ujistěte se, že máte dostatečnou zálohu.</p>
                <gov-button slot="actions" size="l" variant="primary" type="base">Zrušit</gov-button>
                <gov-button slot="actions" size="l" variant="error">Smazat dokument</gov-button>
			</gov-prompt>
		`
	}
}

if (customElements.get('prompt-page') === undefined) {
	customElements.define('prompt-page', PromptPage)
}
