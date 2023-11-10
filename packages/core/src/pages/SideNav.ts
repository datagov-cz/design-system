class SideNavPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>Side nav</h2>

		<div style="max-width: 300px;">
			<gov-side-nav>
				<gov-side-nav-item label="Hlavní skupina" count="true" href="#">
					<gov-side-nav-item label="Vše o našem projektu">
						<gov-side-nav-item label="Hodnocení">
						</gov-side-nav-item>
						<gov-side-nav-item label="Rozpočtová politika" count="true">
						</gov-side-nav-item>
						<gov-side-nav-item label="Partneři">
						</gov-side-nav-item>
					</gov-side-nav-item>

					<gov-side-nav-item label="O nás" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="O společnosti" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="Kontakt">
					</gov-side-nav-item>
				</gov-side-nav-item>

				<gov-side-nav-item label="Produkty" href="#">
				</gov-side-nav-item>

				<gov-side-nav-item label="Ocenění">
				</gov-side-nav-item>

				<gov-side-nav-item label="Naši klienti" href="#">
				</gov-side-nav-item>
			</gov-side-nav>
			<h3>Compact</h3>
			<gov-side-nav compact="true">
				<gov-side-nav-item label="Hlavní skupina" count="true" href="#">
					<gov-side-nav-item label="Vše o našem projektu">
						<gov-side-nav-item label="Hodnocení">
						</gov-side-nav-item>
						<gov-side-nav-item label="Rozpočtová politika" count="true">
						</gov-side-nav-item>
						<gov-side-nav-item label="Partneři">
						</gov-side-nav-item>
					</gov-side-nav-item>

					<gov-side-nav-item label="O nás" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="O společnosti" href="#">
					</gov-side-nav-item>

					<gov-side-nav-item label="Kontakt">
					</gov-side-nav-item>
				</gov-side-nav-item>

				<gov-side-nav-item label="Produkty" href="#">
				</gov-side-nav-item>

				<gov-side-nav-item label="Ocenění">
				</gov-side-nav-item>

				<gov-side-nav-item label="Naši klienti" href="#">
				</gov-side-nav-item>
			</gov-side-nav>

			<h3>Inverse</h3>
			<div class="gov-bg--secondary-300" style="padding: 20px;">
				<gov-side-nav inverse="true">
					<gov-side-nav-item label="Hlavní skupina" count="true" href="#">
						<gov-icon slot="icon" name="info"></gov-icon>
						<gov-side-nav-item label="Vše o našem projektu">
							<gov-icon slot="icon" name="info"></gov-icon>
							<gov-side-nav-item label="Hodnocení">
							</gov-side-nav-item>
							<gov-side-nav-item label="Rozpočtová politika" count="true">
							</gov-side-nav-item>
							<gov-side-nav-item label="Partneři">
							</gov-side-nav-item>
						</gov-side-nav-item>

						<gov-side-nav-item label="O nás" href="#">
							<gov-icon slot="icon" name="info"></gov-icon>
						</gov-side-nav-item>

						<gov-side-nav-item label="O společnosti" href="#">
							<gov-icon slot="icon" name="info"></gov-icon>
						</gov-side-nav-item>

						<gov-side-nav-item label="Kontakt">
							<gov-icon slot="icon" name="info"></gov-icon>
						</gov-side-nav-item>
					</gov-side-nav-item>

					<gov-side-nav-item label="Produkty" href="#">
						<gov-icon slot="icon" name="info"></gov-icon>
					</gov-side-nav-item>

					<gov-side-nav-item label="Ocenění">
						<gov-icon slot="icon" name="info"></gov-icon>
					</gov-side-nav-item>

					<gov-side-nav-item label="Naši klienti" href="#">
						<gov-icon slot="icon" name="info"></gov-icon>
					</gov-side-nav-item>
				</gov-side-nav>
			</div>
		</div>
		`
	}
}

if (customElements.get('side-nav-page') === undefined) {
	customElements.define('side-nav-page', SideNavPage)
}
