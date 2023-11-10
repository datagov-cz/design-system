class TagPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<h1>Tags</h1>
			<h4>Tags - primary (default)</h4>
			<div class="container-view">
				<gov-tag variant="primary" size="xs" type="solid">
					Tag
				</gov-tag>
				<gov-tag variant="primary" size="xs" type="solid">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Tag
				</gov-tag>
				<gov-tag variant="primary" size="xs" type="solid">
					Tag
					<gov-icon slot="right-icon" name="star-fill"></gov-icon>
				</gov-tag>
				<gov-tag variant="primary" size="xs" type="solid">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Tag
					<gov-icon slot="right-icon" name="star-fill"></gov-icon>
				</gov-tag>
				<gov-tag variant="primary" size="s" type="solid">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small Primary
				</gov-tag>
				<gov-tag variant="primary" size="m" type="solid">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal Primary
					<gov-icon slot="right-icon" name="star-fill"></gov-icon>
				</gov-tag>
				<gov-tag variant="primary" size="l" type="solid">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Large Primary
					<gov-icon slot="right-icon" name="star-fill"></gov-icon>
				</gov-tag>
				<gov-tag variant="primary" size="xl" type="solid">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					X-Large Primary
					<gov-icon slot="right-icon" name="star-fill"></gov-icon>
				</gov-tag>
			</div>
			<h4>Tags - primary (inversed)</h4>
			<div class="container-view">
				<gov-tag variant="primary" size="xs" inverse="true">
					Tag
				</gov-tag>
				<gov-tag variant="primary" size="s" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small Primary
				</gov-tag>
				<gov-tag variant="primary" size="m" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal Primary
				</gov-tag>
			</div>
			<h4>Tags - primary (outlined)</h4>
			<div class="container-view">
				<gov-tag variant="primary" type="outlined" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="primary" type="outlined" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small Primary
				</gov-tag>
				<gov-tag variant="primary" type="outlined" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal Primary
				</gov-tag>
			</div>
			<hr />

			<h4>Tags - secondary (default)</h4>
			<div class="container-view">
				<gov-tag variant="secondary" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="secondary" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small secondary
				</gov-tag>
				<gov-tag variant="secondary" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal secondary
				</gov-tag>
			</div>
			<h4>Tags - secondary (inversed)</h4>
			<div class="container-view">
				<gov-tag variant="secondary" size="xs" inverse="true">
					Tag
				</gov-tag>
				<gov-tag variant="secondary" size="s" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small Primary
				</gov-tag>
				<gov-tag variant="secondary" size="m" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal Primary
				</gov-tag>
			</div>
			<h4>Tags - secondary (outlined)</h4>
			<div class="container-view">
				<gov-tag variant="secondary" type="outlined" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="secondary" type="outlined" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small secondary
				</gov-tag>
				<gov-tag variant="secondary" type="outlined" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal secondary
				</gov-tag>
			</div>
			<hr />

			<h4>Tags - success (default)</h4>
			<div class="container-view">
				<gov-tag variant="success" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="success" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small success
				</gov-tag>
				<gov-tag variant="success" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal success
				</gov-tag>
			</div>
			<h4>Tags - success (inversed)</h4>
			<div class="container-view">
				<gov-tag variant="success" size="xs" inverse="true">
					Tag
				</gov-tag>
				<gov-tag variant="success" size="s" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small Primary
				</gov-tag>
				<gov-tag variant="success" size="m" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal Primary
				</gov-tag>
			</div>
			<h4>Tags - success (outlined)</h4>
			<div class="container-view">
				<gov-tag variant="success" type="outlined" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="success" type="outlined" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small success
				</gov-tag>
				<gov-tag variant="success" type="outlined" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal success
				</gov-tag>
			</div>
			<hr />

			<h4>Tags - warning (default)</h4>
			<div class="container-view">
				<gov-tag variant="warning" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="warning" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small warning
				</gov-tag>
				<gov-tag variant="warning" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal warning
				</gov-tag>
			</div>
			<h4>Tags - warning (inversed)</h4>
			<div class="container-view">
				<gov-tag variant="warning" size="xs" inverse="true">
					Tag
				</gov-tag>
				<gov-tag variant="warning" size="s" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small Primary
				</gov-tag>
				<gov-tag variant="warning" size="m" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal Primary
				</gov-tag>
			</div>
			<h4>Tags - warning (outlined)</h4>
			<div class="container-view">
				<gov-tag variant="warning" type="outlined" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="warning" type="outlined" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small warning
				</gov-tag>
				<gov-tag variant="warning" type="outlined" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal warning
				</gov-tag>
			</div>
			<hr />

			<h4>Tags - error (default)</h4>
			<div class="container-view">
				<gov-tag variant="error" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="error" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small error
				</gov-tag>
				<gov-tag variant="error" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal error
				</gov-tag>
			</div>
			<h4>Tags - error (inversed)</h4>
			<div class="container-view">
				<gov-tag variant="error" size="xs" inverse="true">
					Tag
				</gov-tag>
				<gov-tag variant="error" size="s" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small Primary
				</gov-tag>
				<gov-tag variant="error" size="m" inverse="true">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal Primary
				</gov-tag>
			</div>
			<h4>Tags - error (outlined)</h4>
			<div class="container-view">
				<gov-tag variant="error" type="outlined" size="xs">
					Tag
				</gov-tag>
				<gov-tag variant="error" type="outlined" size="s">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Small error
				</gov-tag>
				<gov-tag variant="error" type="outlined" size="m">
					<gov-icon slot="left-icon" name="star-fill"></gov-icon>
					Normal error
				</gov-tag>
			</div>
		`
	}
}

if (customElements.get('tag-page') === undefined) {
	customElements.define('tag-page', TagPage)
}
