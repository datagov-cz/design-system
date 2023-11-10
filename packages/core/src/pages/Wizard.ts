class WizardPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <h2>Wizard</h2>
			<div class="gov-bg--secondary-300" style="padding: 48px">
				<gov-wizard>
					<gov-wizard-item label-tag="h1" label="Font Awesome Icon" variant="success" collapsible>
						<span slot="prefix"><gov-icon name="check-lg"></gov-icon></span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Kontaktní osoby" variant="primary" is-expanded>
						<span slot="prefix">2</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Působnost v agendách" variant="secondary" collapsible="false">
						<span slot="prefix">3</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Zřizované organizace" variant="error" collapsible annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus.">
						<span slot="prefix">4</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Zřizované organizace" variant="warning" is-expanded>
						<span slot="prefix">5</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
				</gov-wizard>

				<br><br>

				<gov-wizard size="s">
					<gov-wizard-item label-tag="h1" label="Font Awesome Icon" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus." collapsible>
						<gov-icon slot="prefix" name="check-lg"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Kontaktní osoby" variant="primary" is-expanded>
						<span slot="prefix">2</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Působnost v agendách" variant="secondary">
						<span slot="prefix">3</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Zřizované organizace" variant="error">
						<span slot="prefix">4</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Zřizované organizace" variant="warning">
						<span slot="prefix">5</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
				</gov-wizard>
				<br><br>

				<gov-wizard size="xs">
					<gov-wizard-item label-tag="h1" label="Font Awesome Icon" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus." collapsible>
						<gov-icon slot="prefix" name="check-lg"></gov-icon>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
							<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Kontaktní osoby" variant="primary" is-expanded>
						<span slot="prefix">2</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Působnost v agendách" variant="secondary">
						<span slot="prefix">3</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Zřizované organizace" variant="error">
						<span slot="prefix">4</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
					<gov-wizard-item label="Zřizované organizace" variant="warning">
						<span slot="prefix">5</span>
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</gov-wizard-item>
				</gov-wizard>
			</div>
		`
	}
}

if (customElements.get('wizard-page') === undefined) {
	customElements.define('wizard-page', WizardPage)
}
