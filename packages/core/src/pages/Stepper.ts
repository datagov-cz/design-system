class StepperPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<h2>Stepper</h2>

			<h3>Velikost M</h3>
			<gov-spacer size="l"></gov-spacer>

			<gov-stepper>
				<gov-stepper-item trigger-tag="h1" label="Hotový krok" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
					<gov-icon slot="prefix" name="check-lg"></gov-icon>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus. Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Chybový krok" variant="error">
					<gov-icon slot="prefix" name="x-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item collapsible="true" label="Krok s textem, obrázkem, tlačítkem" variant="primary" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<span slot="prefix">2</span>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus. Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus. Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="secondary">
					<span slot="prefix">3</span>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="warning">
					<span slot="prefix">4</span>
				</gov-stepper-item>
			</gov-stepper>

			<br><br>
			<h3>Velikost S</h3>
			<gov-spacer size="l"></gov-spacer>

			<gov-stepper size="s">
				<gov-stepper-item trigger-tag="h1" label="Hotový krok" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<gov-icon slot="prefix" name="check-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Chybový krok" variant="error">
					<gov-icon slot="prefix" name="x-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Krok s textem, obrázkem, tlačítkem" variant="primary">
					<span slot="prefix">2</span>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="secondary">
					<span slot="prefix">3</span>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="warning">
					<span slot="prefix">4</span>
				</gov-stepper-item>
			</gov-stepper>

			<br><br>
			<h3>Velikost XS</h3>
			<gov-spacer size="l"></gov-spacer>

			<gov-stepper size="xs">
				<gov-stepper-item trigger-tag="h1" label="Hotový krok" variant="success" annotation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus">
					<gov-icon slot="prefix" name="check-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Chybový krok" variant="error">
					<gov-icon slot="prefix" name="x-lg"></gov-icon>
				</gov-stepper-item>
				<gov-stepper-item label="Krok s textem, obrázkem, tlačítkem" variant="primary">
					<span slot="prefix">2</span>
					<div slot="content">
						<p>Opět věc a stylování obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sollicitudin risus, quis tempor metus imperdiet vitae. Duis in blandit lacus.</p>
					</div>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="secondary">
					<span slot="prefix">3</span>
				</gov-stepper-item>
				<gov-stepper-item label="Budoucí krok" variant="warning">
					<span slot="prefix">4</span>
				</gov-stepper-item>
			</gov-stepper>
		`
	}
}

if (customElements.get('stepper-page') === undefined) {
	customElements.define('stepper-page', StepperPage)
}
