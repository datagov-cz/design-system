class StatsbarPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<gov-statsbar>
				<gov-statsbar-item>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar>
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">Font Awesome</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar icon-position="left">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar inverse variant="secondary">
				<gov-statsbar-item>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar inverse>
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar inverse variant="secondary" icon-position="left">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<hr />
			<gov-statsbar variant="secondary">
					<gov-statsbar-item>
						<slot>215 mil</slot>
						<p slot="text">datových zpráv</p>
					</gov-statsbar-item>
					<gov-statsbar-item>
						<slot>1 mil</slot>
						<p slot="text">datových schránek</p>
					</gov-statsbar-item>
					<gov-statsbar-item>
						<slot>967 tis</slot>
						<p slot="text">hodin ušetřených ve frontách</p>
					</gov-statsbar-item>
					<gov-statsbar-item>
						<slot>12 mil</slot>
						<p slot="text">ušetřených korun</p>
					</gov-statsbar-item>
			</gov-statsbar>
			<gov-statsbar variant="secondary">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
			<gov-statsbar variant="secondary" icon-position="left">
				<gov-statsbar-item>
					<gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
					<slot>215 mil</slot>
					<p slot="text">datových zpráv</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="job-loss" slot="icon"></gov-icon>
					<slot>1 mil</slot>
					<p slot="text">datových schránek</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="globe" slot="icon"></gov-icon>
					<slot>967 tis</slot>
					<p slot="text">hodin ušetřených ve frontách</p>
				</gov-statsbar-item>
				<gov-statsbar-item>
					<gov-icon type="complex" name="new-comments" slot="icon"></gov-icon>
					<slot>12 mil</slot>
					<p slot="text">ušetřených korun</p>
				</gov-statsbar-item>
			</gov-statsbar>
		`
	}
}

if (customElements.get('statsbar-page') === undefined) {
	customElements.define('statsbar-page', StatsbarPage)
}
