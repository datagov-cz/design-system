import { Config } from "@stencil/core"
import { postcss } from "@stencil/postcss"
import { sass } from "@stencil/sass"
import autoprefixer from "autoprefixer"
import path from "path"
import { reactOutputTarget } from "@stencil/react-output-target"
import { vueOutputTarget } from "@stencil/vue-output-target"
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
	namespace: "core",
	globalStyle: "src/sass/global.scss",
	taskQueue: "async",
	sourceMap: true,
	invisiblePrehydration: false,
	extras: {
		experimentalSlotFixes: true,
		enableImportInjection: true,
		cloneNodeFix: true,
	},
	plugins: [
		sass({
			injectGlobalPaths: [path.resolve(__dirname, `src/sass/core.scss`).replace(/\\/g, "/")],
		}),
		postcss({
			plugins: [autoprefixer()],
		}),
	],
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "docs-readme",
			strict: true,
		},
		{
			type: "www",
			copy: [
				// Copy from build directory.
				{ src: "../../../dist/packages/fonts", dest: "assets/fonts" },
				{ src: "../../../dist/packages/icons", dest: "assets/icons" },
				{ src: "../../../dist/packages/styles", dest: "assets/styles" },
				// Copy pages.
				{ src: "pages", dest: "pages" }
			],
			serviceWorker: null,
			dir: "../../dist/serve/www"
		},
		{
			type: "dist-hydrate-script",
			dir: "dist/hydrate",
		},
		{
			type: "dist-custom-elements",
			includeGlobalScripts: false,
			externalRuntime: false,
			minify: true,
			customElementsExportBehavior: 'auto-define-custom-elements'
		},

		reactOutputTarget({
			componentCorePackage: "@gov-design-system-ce/components",
			proxiesFile: "../../../packages/core-react/lib/index.ts",
			includeDefineCustomElements: true,
			includePolyfills: true
		}),
		vueOutputTarget({
			componentCorePackage: "@gov-design-system-ce",
			proxiesFile: "../../../packages/core-vue/lib/index.ts",
			includeImportCustomElements: true
		}),
		angularOutputTarget({
			componentCorePackage: "@gov-design-system-ce/components",
			outputType: 'component',
			directivesProxyFile: '../../../packages/core-angular/src/directives/proxies.ts',
			directivesArrayFile: '../../../packages/core-angular/src/directives/proxies-list.ts',
		}),
	],
}
