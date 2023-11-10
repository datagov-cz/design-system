<template>
	<gov-layout-column class="max-w-[712px] pt-[68px] mx-auto mt-32">
		<gov-error-code>
			<section class="text-center flex gap-6 flex-col items-center">
				<gov-icon class="w-36 h-36 text-primary-600" name="card-404"
									type="complex"></gov-icon>
				<div>
					<h1 class="gov-text--5xl">404 - Stránka nenalezena</h1>
					<p class="gov-text--xl">Litujeme, požadovaná stránka již neexistuje nebo byla přesunuta.</p>
				</div>
				<gov-button
					wcagLabel="Přejít na úvodní stránku"
					variant="primary"
					size="l"
					type="solid"
					href="/">
					Přejít na úvodní stranu
				</gov-button>
			</section>
		</gov-error-code>
	</gov-layout-column>
</template>
