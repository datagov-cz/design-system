class TooltipPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div style="width: 500px; overflow: auto; height: 100px">
				<div style="width: 800px; display: flex; flex-direction: row; height: 100px; gap: 20px">
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px"></div>
					<div style="width: 100px; border: 1px solid black; height: 100px">
					<gov-tooltip position="right" size="s" icon>
					<gov-icon name="info"></gov-icon>
					<gov-tooltip-content>
						<ul>
							<li>Toggler div, h1, h2 rozbije celou komponentu. </li>
							<li>Můžu použít tagy jako span, anchor, gov-icon - inlinové. Zde je použita ikonka z knihovny font-awesome</li>
						</ul>
					</gov-tooltip-content>
				</gov-tooltip>
</div>
				</div>
			</div>
			<p>
				Default scheme, size Small. Nelze umístit jako toggle element který je blokový - tj. div, h1, h2, atp.
				<gov-tooltip position="right" size="s" icon>
					<gov-icon name="info"></gov-icon>
					<gov-tooltip-content>
						<ul>
							<li>Toggler div, h1, h2 rozbije celou komponentu. </li>
							<li>Můžu použít tagy jako span, anchor, gov-icon - inlinové. Zde je použita ikonka z knihovny font-awesome</li>
						</ul>
					</gov-tooltip-content>
				</gov-tooltip>
				za prací do států EU byste měli být vždy pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy tento stát.
			</p>
			<p>
				V rámci
				<gov-tooltip variant="secondary" position="top" size="s" message="Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.">
					případě vycestování (top)případě vycestování (top)případě vycestování
				</gov-tooltip>
				států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>V rámci
				<gov-tooltip variant="secondary" position="bottom" size="s">
					případě vycestování (bottom)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				<gov-tooltip variant="secondary" position="top" size="m">
					případě vycestování (top)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V
				<gov-tooltip position="right">
					případě vycestování postion (right)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				za prací do států EU byste měli být vždy pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy tento stát.
			</p>
			<p>
				V rámci
				<gov-tooltip position="top">
					případě vycestování (top)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
			V rámci
				<gov-tooltip position="bottom">
					případě vycestování (bottom)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				<gov-tooltip variant="secondary" position="left">
					případě vycestování (left)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát. V rámci států EU platí princip jednoho pojištění. V
				<gov-tooltip variant="secondary" position="right" size="l">
					případě vycestování (right)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip>
				za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>V rámci
				<gov-tooltip position="top" size="l">
					případě vycestování (top)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci
				<gov-tooltip variant="secondary" position="bottom" size="l">
					případě vycestování (bottom)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
			</p>
			<p>
				V rámci států EU platí princip jednoho pojištění. V za prací do států EU byste měli být vždy
				<gov-tooltip inverse variant="secondary" position="left" size="l">
					případě vycestování (left)
					<gov-tooltip-content>
						Znění petice podléhá § 1 odst. 3-4 zákonuč. 85/1990 Sb. Text.
					</gov-tooltip-content>
				</gov-tooltip> pojištěni ve státě, ve kterém pracujete. Pokud pracujete pouze na území jednoho státu, je státem pojištění vždy
				tento stát.
				<br /><br /><br /><br /><br />x
			</p>
	`
	}
}

if (customElements.get('tooltip-page') === undefined) {
	customElements.define('tooltip-page', TooltipPage)
}
