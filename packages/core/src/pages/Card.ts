class CardPage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `

		<div style="max-width: 650px">
			<h2>Card</h2>

			<gov-card label="Fusce tellus odio, dapibus id fermentum quis" expanded collapsible class="gov-bg--success-100">
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
				</p>
			</gov-card>

			<br>

			<div style="height: 400px">
				<gov-card label="Fusce tellus odio, dapibus id fermentum quis" expanded collapsible>
					<div class="gov-content">
						<p class="gov-color--secondary-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
						</p>
						<gov-button variant="primary" size="s" href="http://localhost:3333/button">
							Button
						</gov-button>
						<p slot="footer" class="gov-color--primary-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
						</p>
					</div>
				</gov-card>
			</div>
			<br>
			<gov-card label="Fusce tellus odio, dapibus id fermentum quis">
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
				</p>
				<gov-button variant="primary" size="s" href="http://localhost:3333/button">
					Button
				</gov-button>
				<p slot="footer" color="gov-color--primary-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vitae etiam dui eget lectus vulputate ornare.
				</p>
			</gov-card>
			<h3>Image slot</h3>
			<gov-card expanded>
				<img slot="img" src="https://picsum.photos/536/354" src="" alt="Obárzek" width="536" height="354">
				<p class="gov-text--l gov-color--secondary-800">
					<b>
						Commodo consequat.
					</b>
				</p>
				<p class="gov-color--secondary-700">
					Commodo consequat. Nullam rhoncus aliquam metus.
				</p>
				<p class="gov-color--secondary-700">
					<a href="#">Chci vědět více</a>
				</p>
			</gov-card>
			<h3>Shadow variant</h3>
			<gov-card expanded class="gov-box-shadow--m">
				<img slot="img" src="https://picsum.photos/536/354" src="" alt="Obárzek" width="536" height="354">
				<p class="gov-text--l gov-color--secondary-800">
					<b>
						Commodo consequat.
					</b>
				</p>
				<p class="gov-color--secondary-700">
					Commodo consequat. Nullam rhoncus aliquam metus.
				</p>
				<gov-button variant="primary" size="s" href="http://localhost:3333/button">
					Jak založit
				</gov-button>
				<gov-button variant="primary" type="outlined" size="s" href="http://localhost:3333/button">
					Zjistit více
				</gov-button>
			</gov-card>
			<h3>With icon</h3>
			<gov-card>
				<gov-icon name="car" type="complex"></gov-icon>
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Fusce tellus.
				</p>
				<gov-button variant="primary" type="outlined" size="s" href="http://localhost:3333/button">
					Learn more
				</gov-button>
			</gov-card>
			<h3>Horizontal orientation</h3>
			<gov-card promotion>
				<gov-icon slot="icon" name="car" type="complex"></gov-icon>
				<p class="gov-color--secondary-700">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Fusce tellus.
				</p>
				<gov-button slot="btn" variant="primary" type="outlined" size="s" href="http://localhost:3333/button">
					Learn more
				</gov-button>
			</gov-card>
		</div>

		`
	}
}

if (customElements.get('card-page') === undefined) {
	customElements.define('card-page', CardPage)
}
