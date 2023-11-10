class MessagePage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>
			Content Message
		</h2>
		<gov-message variant="error">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="primary">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="success">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="warning">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>
		<gov-message variant="secondary">
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
		<br>

		<div class="gov-bg--secondary-300" style="padding: 48px">
			<h3>Inverse</h3>
			<gov-message inverse variant="error">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="primary">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="success">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="warning">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
			<br>
			<gov-message inverse variant="secondary">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
				</p>
			</gov-message>
		</div>

		<h3>Shadow</h3>
		<gov-message variant="secondary" shadow>
			<gov-icon name="info" slot="icon"></gov-icon>
			<p>
				Font awesome. Default - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
			</p>
		</gov-message>
			`
	}
}

if (customElements.get('message-page') === undefined) {
	customElements.define('message-page', MessagePage)
}
