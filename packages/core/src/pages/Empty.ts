class EmptyPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<h2>Empty</h2>

		<gov-empty>
			<gov-icon slot="icon" name="car" type="complex"></gov-icon>
			<p class="gov-text--2xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
			</p>
			<p class="gov-text--l gov-color--secondary-700">
				Informace o tom, že je potřeba upřesnit vyhledávání
			</p>
			<gov-spacer size="l"></gov-spacer>
			<gov-button variant="primary">
				Přejít na jinou stránku
			</gov-button>
		</gov-empty>
		<gov-empty align="right">
			<gov-icon slot="icon" name="car" type="complex"></gov-icon>
			<p class="gov-text--2xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
			</p>
			<p class="gov-text--l gov-color--secondary-700">
				Informace o tom, že je potřeba upřesnit vyhledávání
			</p>
		</gov-empty>
		<gov-empty align="center">
			<gov-icon slot="icon" name="car" type="complex"></gov-icon>
			<p class="gov-text--2xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
			</p>
			<p class="gov-text--l gov-color--secondary-700">
				Informace o tom, že je potřeba upřesnit vyhledávání
			</p>
		</gov-empty>
		`
	}
}

if (customElements.get('empty-page') === undefined) {
	customElements.define('empty-page', EmptyPage)
}
