class ControlGroupPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>Control Group</h2>

		<gov-control-group>
			<gov-form-input type="number" id="kapr" name="test-me" placeholder="Placeholder" size="s"></gov-form-input>
			<gov-button variant="primary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="primary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-button variant="primary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
			<gov-dropdown position="right">
				<gov-button variant="primary" size="s">
					Více
				</gov-button>
				<ul slot="list">
					<li>
						<gov-button variant="primary" type="base" size="s">
							A další nabídka
						</gov-button>
					</li>
					<li>
						<gov-button variant="primary" type="base" size="s">
							A další nabídka
						</gov-button>
					</li>
					<li>
						<gov-button variant="primary" type="base" size="s">
							A další nabídka
						</gov-button>
					</li>
				</ul>
			</gov-dropdown>
		</gov-control-group>
		<br />
		<gov-control-group variant="primary">
			<gov-form-select name="test-me" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="primary" type="solid" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group>
			<gov-button variant="primary" type="outlined" size="l">
				<gov-icon slot="left-icon" name="gear"></gov-icon>
			</gov-button>
			<gov-form-file name="test-me-c" accept="image/*" max-file-size="1024">
				<gov-button variant="primary" type="outlined" size="l" tabindex="-1">
					Nahrát soubor ze zařízení
				</gov-button>
			</gov-form-file>
			<gov-button variant="primary" type="outlined" size="l">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group variant="primary" no-border>
		<gov-button variant="primary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="primary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" size="xl">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="primary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br><br>

		<gov-control-group variant="secondary" no-border>
			<gov-form-input type="number" id="kapr" name="test-me" placeholder="Placeholder" variant="primary" size="s"></gov-form-input>
			<gov-button variant="primary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="primary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-button variant="primary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group variant="secondary">
			<gov-form-select name="test-me" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="primary" type="outlined" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group variant="secondary">
			<gov-button variant="primary" type="outlined" size="l">
				<gov-icon slot="left-icon" name="gear"></gov-icon>
			</gov-button>
			<gov-form-file name="test-me-c" accept="image/*" max-file-size="1024">
				<gov-button variant="primary" type="outlined" size="l" tabindex="-1">
					Nahrát soubor ze zařízení
				</gov-button>
			</gov-form-file>
			<gov-button variant="primary" type="outlined" size="l">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group variant="secondary">
		<gov-button variant="primary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="primary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" variant="primary" size="xl">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="primary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br><br>

		<gov-control-group variant="secondary">
			<gov-form-input type="number" id="kapr" name="test-me" placeholder="Placeholder" variant="secondary" size="s"></gov-form-input>
			<gov-button variant="secondary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="secondary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-button variant="secondary" type="outlined" size="s">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group variant="secondary" no-border>
			<gov-form-select name="test-me" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="secondary" type="outlined" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group variant="secondary">
			<gov-button variant="secondary" type="outlined" size="l">
				<gov-icon slot="left-icon" name="gear"></gov-icon>
			</gov-button>
			<gov-form-file name="test-me-c" accept="image/*" max-file-size="1024">
				<gov-button variant="secondary" type="outlined" size="l" tabindex="-1">
					Nahrát soubor ze zařízení
				</gov-button>
			</gov-form-file>
			<gov-button variant="secondary" type="outlined" size="l">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		<br />
		<gov-control-group variant="secondary">
		<gov-button variant="secondary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="secondary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" variant="secondary" size="xl">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="secondary" type="outlined" size="xl">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>

		<br /><br />
		<gov-control-group variant="primary">
		<gov-button variant="primary" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="primary" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" variant="primary" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="primary" type="solid" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>

		<br />
		<gov-control-group variant="secondary">
		<gov-button variant="secondary" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="secondary" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" variant="secondary" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="secondary" type="solid" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>

		<br />
		<gov-control-group variant="success">
		<gov-button variant="success" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="success" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" variant="success" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="success" type="solid" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>

		<br />
		<gov-control-group variant="warning">
		<gov-button variant="warning" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="warning" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" variant="warning" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="warning" type="solid" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>

		<br />
		<gov-control-group variant="error">
		<gov-button variant="error" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-up"></gov-icon>
			</gov-button>
			<gov-button variant="error" type="outlined" size="m">
				<gov-icon slot="left-icon" name="chevron-down"></gov-icon>
			</gov-button>
			<gov-form-select name="test-me" variant="error" size="m">
				<option value="" selected>Placeholder</option>
				<option value="b">Value B</option>
				<option value="c">Value C</option>
				<option value="d">Value D</option>
			</gov-form-select>
			<gov-button variant="error" type="solid" size="m">
				<gov-icon slot="left-icon" name="x-lg"></gov-icon>
			</gov-button>
		</gov-control-group>
		`
	}
}

if (customElements.get('control-group-page') === undefined) {
	customElements.define('control-group-page', ControlGroupPage)
}
