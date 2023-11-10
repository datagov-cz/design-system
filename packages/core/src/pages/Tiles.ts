class TilesPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>Tiles</h2>

		<div class="gov-bg--secondary-300" style="padding: 48px;">
			<div style="max-width: 600px;">
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<br>
				<gov-tile name="Zdroje energie, těžba, nerosty, drahé kovy">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<ul class="gov-list--plain">
						<li><a href="#">Občanský život</a></li>
						<li><a href="#">Podnikání v ČR</a></li>
						<li><a href="#">Czech POINT</a></li>
					</ul>
				</gov-tile>
			</div>
			<br>

			<gov-tiles columns="4">
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
			</gov-tiles>
			<br>
			<gov-tiles columns="3" no-border>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
				<gov-tile href="#">
					<gov-icon name="id-card" type="complex" slot="icon"></gov-icon>
					<h3 slot="title">Zdroje energie, těžba, nerosty, drahé kovy</h3>
					<p>
						Secondary - Od 20. 12. 2020 do 14:00 h do 20.&nbsp;12. 2020 do 15:00 h bude provedena plánovaná odstávka serverů. V&nbsp;uvedeném termínu bude nedostupné přihlášení k&nbsp;Portálu občana prostřednictvím datové schránky. Více informací <a href="#">zde</a>.
					</p>
				</gov-tile>
			</gov-tiles>

		</div>
		`
	}
}

if (customElements.get('tiles-page') === undefined) {
	customElements.define('tiles-page', TilesPage)
}
