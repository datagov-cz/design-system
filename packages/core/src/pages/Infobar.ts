class InfobarPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>Infobar</h2>

		<div class="gov-bg--secondary-800">
			<gov-container>
				<gov-infobar variant="secondary" headline="Tohle bude super nadpis pro všechno" closable>
					<gov-icon name="info" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-infobar>
			</gov-container>
		</div>

		<div class="gov-bg--primary-600">
			<gov-container>
				<gov-infobar variant="primary" headline="Tohle bude super nadpis pro všechno" closable>
					<gov-icon name="info" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-infobar>
			</gov-container>
		</div>

		<div class="gov-bg--success-500">
			<gov-container>
				<gov-infobar variant="success" headline="Tohle bude super nadpis pro všechno" closable>
					<gov-icon name="info" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-infobar>
			</gov-container>
		</div>

		<div class="gov-bg--error-400">
			<gov-container>
				<gov-infobar variant="error" headline="Tohle bude super nadpis pro všechno" closable>
					<gov-icon name="info" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-infobar>
			</gov-container>
		</div>

		<div class="gov-bg--warning-400">
			<gov-container>
				<gov-infobar variant="warning" headline="Tohle bude super nadpis pro všechno" closable>
					<gov-icon name="info" slot="icon"></gov-icon>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-infobar>
			</gov-container>
		</div>

		<br/>

		<gov-infobar variant="secondary" headline="Tohle bude super nadpis pro všechno" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>


		<br>
		<gov-infobar variant="secondary">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar variant="warning" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Warning - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar variant="error" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar variant="success" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar variant="primary" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>

		<h3>Inverse</h3>
		<br>
		<gov-infobar inverse="TRUE" variant="secondary" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar inverse="True" variant="warning" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Warning - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar inverse="1" variant="error" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar inverse="true" variant="success" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		<br>
		<gov-infobar inverse="true" variant="primary" closable>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Error - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-infobar>
		`
	}
}

if (customElements.get('infobar-page') === undefined) {
	customElements.define('infobar-page', InfobarPage)
}
