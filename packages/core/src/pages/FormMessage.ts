class FormMessagePage extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<gov-form-message>
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Default
				</p>
			</gov-form-message>
			<gov-form-message>
				<p>
					Default
				</p>
			</gov-form-message>
			<gov-form-message variant="secondary">
				<gov-icon name="info" slot="icon"></gov-icon>
				<p>
					Secondary
				</p>
			</gov-form-message>
			<gov-form-message variant="secondary">
				<p>
					Secondary
				</p>
			</gov-form-message>
			<gov-form-message variant="error">
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Error
				</p>
			</gov-form-message>
			<gov-form-message variant="error">
				<p>
					Error
				</p>
			</gov-form-message>
			<gov-form-message variant="warning">
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Warning
				</p>
			</gov-form-message>
			<gov-form-message variant="warning">
				<p>
					Warning
				</p>
			</gov-form-message>
			<gov-form-message variant="success">
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Success
				</p>
			</gov-form-message>
			<gov-form-message variant="success">
				<p>
					Success
				</p>
			</gov-form-message>
			<gov-form-message>
				<gov-icon slot="icon" name="info"></gov-icon>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dapibus eros, a dapibus metus. Ut a leo lorem. Sed ut fermentum diam. Sed porttitor ligula est, eget lobortis lacus rutrum et. Nunc sapien arcu, faucibus sit amet justo vel, aliquam gravida magna. Pellentesque et tempor risus. 
				</p>
				<p>
					Aliquam suscipit justo dolor, et pellentesque dui venenatis quis. Vestibulum dignissim libero urna, non ultricies neque consequat ut.
				</p>
			</gov-form-message>
			<gov-form-message>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dapibus eros, a dapibus metus. Ut a leo lorem. Sed ut fermentum diam. Sed porttitor ligula est, eget lobortis lacus rutrum et. Nunc sapien arcu, faucibus sit amet justo vel, aliquam gravida magna. Pellentesque et tempor risus. 
				</p>
				<p>
					Aliquam suscipit justo dolor, et pellentesque dui venenatis quis. Vestibulum dignissim libero urna, non ultricies neque consequat ut.
				</p>
			</gov-form-message>
	`
	}
}

if (customElements.get('form-message-page') === undefined) {
	customElements.define('form-message-page', FormMessagePage)
}
