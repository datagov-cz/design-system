class SpacerPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<style>
			 gov-spacer {
				background: lightgray;
				margin-bottom: 10px;
			 }
			</style>
			<gov-spacer size="2xs" breakpoint="sm"></gov-spacer>
			<gov-spacer size="xs" breakpoint="sm"></gov-spacer>
			<gov-spacer size="s" breakpoint="sm"></gov-spacer>
			<gov-spacer size="m" breakpoint="sm"></gov-spacer>
			<gov-spacer size="l" breakpoint="sm"></gov-spacer>
			<gov-spacer size="xl" breakpoint="sm"></gov-spacer>
			<gov-spacer size="2xl" breakpoint="sm"></gov-spacer>
			<gov-spacer size="3xl" breakpoint="sm"></gov-spacer>
			<gov-spacer size="4xl" breakpoint="sm"></gov-spacer>
		`
	}
}

if (customElements.get('spacer-page') === undefined) {
	customElements.define('spacer-page', SpacerPage)
}
