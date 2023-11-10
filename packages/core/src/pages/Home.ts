class HomePage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<form style="padding: 20px;">
			<gov-form-label legend>
				Form Label legend
			</gov-form-label>
			<gov-form-control type="input">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input type="number" name="test-me" placeholder="Placeholder" variant="primary" size="s"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<br><br>
			<legend>Legend</legend>
			<gov-form-control type="input">
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input type="number" name="test-me" placeholder="Placeholder" variant="primary" size="s"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<br><br>
			<gov-form-control type="input" fieldset>
				<gov-form-label size="s" slot="top">Form control fieldset</gov-form-label>
				<gov-form-group>
					<gov-form-input type="number" name="test-me" placeholder="Placeholder" variant="primary" size="s"></gov-form-input>
				</gov-form-group>
			</gov-form-control>
			<br><br>
			<fieldset>
				<gov-form-label size="s" slot="top">Fieldset</gov-form-label>
				<gov-form-group>
					<gov-form-input type="number" name="test-me" placeholder="Placeholder" variant="primary" size="s"></gov-form-input>
				</gov-form-group>
			</fieldset>
			<br><br>
			<fieldset>
				<legend>Fieldset & Legend</legend>
				<gov-form-label size="s" slot="top">Label of input</gov-form-label>
				<gov-form-group>
					<gov-form-input type="number" name="test-me" placeholder="Placeholder" variant="primary" size="s"></gov-form-input>
				</gov-form-group>
			</fieldset>
		</form>
		`
	}
}

if (customElements.get('home-page') === undefined) {
	customElements.define('home-page', HomePage)
}
