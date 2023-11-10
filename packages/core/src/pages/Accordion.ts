class AccordionPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h4>Accordion</h4>
		<div class="container-view">
			<gov-accordion size="xs">
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<gov-icon slot="toggle-icon" name="info"></gov-icon>
				</gov-accordion-item>
				<gov-accordion-item disabled is-expanded>
					<h3 slot="label">Kontaktní osoby</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Působnost v agendách</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p slot="annotation">Anotace Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<gov-chip variant="primary" size="xs" slot="suffix">
						Chip
					</gov-chip>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Zřizované organizace</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br>
			<gov-accordion size="xs" no-border>
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Kontaktní osoby">
					<h3 slot="label">Kontaktní osoby</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Působnost v agendách">
					<p slot="label">Působnost v agendách</p>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Zřizované organizace">
					<span slot="label">Zřizované organizace</span>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br />
			<gov-accordion size="s" variant="secondary">
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<gov-icon slot="toggle-icon" name="info"></gov-icon>
				</gov-accordion-item>
				<gov-accordion-item disabled is-expanded>
					<h3 slot="label">Kontaktní osoby</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Působnost v agendách</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Zřizované organizace</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br>
			<gov-accordion size="s">
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Kontaktní osoby">
					<h3 slot="label">Kontaktní osoby</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Působnost v agendách">
					<h3 slot="label">Působnost v agendách</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<gov-chip variant="primary" size="xs" slot="suffix">
						Chip
					</gov-chip>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Zřizované organizace">
					<h3 slot="label">Zřizované organizace</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br />
			<gov-accordion size="m">
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<gov-icon slot="toggle-icon" name="info"></gov-icon>
				</gov-accordion-item>
				<gov-accordion-item disabled is-expanded>
					<h3 slot="label">Kontaktní osoby</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Působnost v agendách</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Zřizované organizace</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br>
			<gov-accordion size="m">
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item is-expanded label="Kontaktní osoby">
					<h3 slot="label">Kontaktní osoby</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<gov-chip variant="primary" size="xs" slot="suffix">
						Chip
					</gov-chip>
								<gov-accordion size="xs" no-border>
									<gov-accordion-item>
										<h3 slot="label">Font Awesome Icon</h3>
										<gov-icon slot="icon" name="info"></gov-icon>
										<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
										<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
										<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
										<gov-icon slot="toggle-icon" name="info"></gov-icon>
									</gov-accordion-item>
									<gov-accordion-item disabled is-expanded>
										<h3 slot="label">Kontaktní osoby</h3>
										<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
									</gov-accordion-item>
									<gov-accordion-item>
										<h3 slot="label">Působnost v agendách</h3>
										<gov-icon slot="icon" name="info"></gov-icon>
										<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
									</gov-accordion-item>
									<gov-accordion-item>
										<h3 slot="label">Zřizované organizace</h3>
										<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
									</gov-accordion-item>
								</gov-accordion>
				</gov-accordion-item>
				<gov-accordion-item label="Působnost v agendách">
					<h3 slot="label">Působnost v agendách</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<gov-chip variant="primary" size="xs" slot="suffix">
						Chip
					</gov-chip>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Zřizované organizace">
					<h3 slot="label">Zřizované organizace</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br />
			<gov-accordion size="l">
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<gov-icon slot="toggle-icon" name="info"></gov-icon>
				</gov-accordion-item>
				<gov-accordion-item disabled is-expanded>
					<h3 slot="label">Kontaktní osoby</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Působnost v agendách</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item>
					<h3 slot="label">Zřizované organizace</h3>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
			<br>
			<gov-accordion size="l">
				<gov-accordion-item>
					<h3 slot="label">Font Awesome Icon</h3>
					<p slot="annotation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus</p>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Kontaktní osoby">
					<h3 slot="label">Kontaktní osoby</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Působnost v agendách">
					<h3 slot="label">Působnost v agendách</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<gov-chip variant="primary" size="m" slot="suffix">
						Chip
					</gov-chip>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
				<gov-accordion-item label="Zřizované organizace">
					<h3 slot="label">Zřizované organizace</h3>
					<gov-icon slot="icon" name="info"></gov-icon>
					<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
				</gov-accordion-item>
			</gov-accordion>
		</div>
		`
	}
}

if (customElements.get('accordion-page') === undefined) {
	customElements.define('accordion-page', AccordionPage)
}
