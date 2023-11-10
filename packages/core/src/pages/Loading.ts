class LoadingPage extends HTMLElement {
	connectedCallback() {
		setTimeout(function () {
			document.getElementById('btn').addEventListener('gov-click', function () {
				document.getElementById('loading').setAttribute('loading', 'true')
			})
		}, 500)
		this.innerHTML = `
			<h2>Loading</h2>
			<div class="preview-container">
      <div class="skeletons-defaults">
        <h2>Default</h2>
        <gov-skeleton variant="success"></gov-skeleton>     
      </div>
      <div class="skeletons-appearance-circle">
        <h2>Default circle</h2>
        <gov-skeleton shape="circle"> </gov-skeleton>
      </div> 
      <div class="skeletons-appearance-circle">
        <h2>Default rect</h2>
        <gov-skeleton shape="rect"> </gov-skeleton>
      </div>       
      <div class="skeletons-with-count">
        <h2>Default 4 rows</h2>
        <gov-skeleton count="2"></gov-skeleton>
      </div>           
      <div class="skeletons-animation-no-animation">
        <h2>Without animation</h2>
        <gov-skeleton animation="false"></gov-skeleton>
      </div>
      <div class="skeletons-animation-pulse">
        <h2>Pulse animation</h2>
        <gov-skeleton animation="pulse"></gov-skeleton>
      </div>
      <div class="skeletons-animation-progress">
        <h2>Progress animation</h2>
        <gov-skeleton animation="progress"></gov-skeleton>
      </div>
      <div class="skeletons-with-theming">
        <h2>Custom styles</h2>
        <style>
          .custom-skeleton {
            --skeleton-width: 100px;
            --skeleton-height: 100px;
            --skeleton-background: #cccccc;
            --skeleton-border-radius: 20px;
          }
        </style>
        <gov-skeleton></gov-skeleton>
      </div>
      <div>
        <h2>Custom width</h2>
        <gov-skeleton width="500px"></gov-skeleton>
      </div>
      <div>
        <h2>Custom height</h2>
        <gov-skeleton height="80px"></gov-skeleton>
      </div>
    </div>
			
			
			<gov-button variant="primary" id="btn" wcag-label="Zobrazit načítání">Zobrazit načítání</gov-button>

			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>

			<gov-loading id="loading">Načítání</gov-loading>
		`
	}
}

if (customElements.get('loading-page') === undefined) {
	customElements.define('loading-page', LoadingPage)
}
