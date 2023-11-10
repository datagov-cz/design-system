import { defineConfig } from "vitepress"
import { withMermaid } from "vitepress-plugin-mermaid";
// https://vitepress.dev/reference/site-config
export default defineConfig(withMermaid({
	ignoreDeadLinks: true,
	title: "Design systém gov.cz",
	description: "Design systém gov.cz obsahuje UI knihovnu komponent k použití pro projekty ve veřejné správě.",
	head: [
		['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/assets/favicons/apple-icon-57x57.png"}],
		['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/assets/favicons/apple-icon-60x60.png"}],
		['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/assets/favicons/apple-icon-72x72.png"}],
		['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/assets/favicons/apple-icon-76x76.png"}],
		['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/assets/favicons/apple-icon-114x114.png"}],
		['link', { rel: "apple-touch-icon", sizes: "120x120", href: "/assets/favicons/apple-icon-120x120.png"}],
		['link', { rel: "apple-touch-icon", sizes: "144x144", href: "/assets/favicons/apple-icon-144x144.png"}],
		['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/assets/favicons/apple-icon-152x152.png"}],
		['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-icon-180x180.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/favicons/android-icon-192x192.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/assets/favicons/favicon-96x96.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
		['link', { rel: "manifest", href: "/assets/favicons/manifest.json"}],
		['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
		['meta', { name: "msapplication-TileColor", content: "#ffffff"}],
		['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
		['meta', { name: "theme-color", content: "#ffffff"}],
		['meta', { property: "og:image", content: "/assets/social/og-image.png"}],
	],
	themeConfig: {
		sidebar: [
			{
				text: "Začínáme",
				collapsed: false,
				items: [
					{ text: "O design systému", link: "/zaciname/o-design-systemu" },
					{ text: "Pro designéry", link: "/zaciname/pro-designery" },
					{
						text: "Pro vývojáře", link: "/zaciname/for-developers",
						items: [
							{text: "Usage with basic HTML", link: "/zaciname/developers/html"},
							{text: "Usage with Angular", link: "/zaciname/developers/angular"},
							{text: "Usage with Vue", link: "/zaciname/developers/vue"},
							{text: "Usage with React", link: "/zaciname/developers/react"}
						]
					},
				],
			},
			{
				text: "Pravidla",
				collapsed: true,
				items: [
					{ text: "Pro koho je design systém povinný", link: "/pravidla/pro-koho-je-design-system-povinny" },
					{ text: "Pravidla pro modifikaci design systému", link: "/pravidla/pravidla-pro-modifikaci-design-systemu" },
					{ text: "Jak na strukturu webu", link: "/pravidla/jak-na-strukturu-webu" },
					{ text: "Jak na tvorbu formuláře ", link: "/pravidla/jak-na-tvorbu-formulare" },
					{ text: "SEO - jak optimalizovat obsah pro vyhledávače", link: "/pravidla/seo-jak-optimalizovat-obsah-pro-vyhledavace" },
					{ text: "SEO - manuál pro vývojáře", link: "/pravidla/seo-manual-pro-vyvojare" },
					{ text: "Pravidla pro tvorbu obsahu", link: "/pravidla/pravidla-pro-tvorbu-obsahu" },
					{ text: "Pravidla pro umisťování loga", link: "/pravidla/pravidla-pro-umistovani-loga" },
					{ text: "Přístupnost webových stránek", link: "/pravidla/pristupnost-webovych-stranek" },
					{ text: "Responzivní webdesign", link: "/pravidla/responzivni-webdesign" },
				],
			},
			{
				text: "Dokumentace",
				collapsed: true,
				items: [
					{ text: "Seznam změn", link: "/dokumentace/seznam-zmen" },
					{ text: "Barvy", link: "/dokumentace/barvy" },
					{ text: "Ikony", link: "/dokumentace/ikony" },
					{ text: "Typografie", link: "/dokumentace/typografie" },
					{ text: "Rozložení stránky", link: "/dokumentace/rozlozeni" },
				],
			},
			{
				text: "Komponenty",
				collapsed: true,
				items: [
					{ text: "Akordeon", link: "/komponenty/akordeon" },
					{ text: "Chybová stránka", link: "/komponenty/chybova-stranka" },
					{ text: "Čip", link: "/komponenty/cip" },
					// { text: "Cookie lišta", link: "/komponenty/cookie-bar" },
					{ text: "Dialogové okno", link: "/komponenty/dialogove-okno" },
					{ text: "Drobečková navigace", link: "/komponenty/drobeckova-navigace" },
					{ text: "Heslo", link: "/komponenty/heslo" },
					{ text: "Informační lišta", link: "/komponenty/informacni-lista" },
					{ text: "Karta", link: "/komponenty/karta" },
					{ text: "Krokovník", link: "/komponenty/krokovnik" },
					// { text: "Menu", link: "/komponenty/menu" },
					{ text: "Načítání", link: "/komponenty/nacitani" },
					{ text: "Mizející zpráva", link: "/komponenty/mizejici-zprava" },
					{ text: "Nahrání souboru", link: "/komponenty/nahrani-souboru" },
					{ text: "Našeptávač", link: "/komponenty/naseptavac" },
					{ text: "Nápověda", link: "/komponenty/napoveda" },
					// { text: "Odkaz", link: "/komponenty/odkaz" },
					// { text: "Odznak", link: "/komponenty/odznak" },
					// { text: "Patička", link: "/komponenty/paticka" },
					{ text: "Prázdné stavy", link: "/komponenty/prazdne-stavy" },
					{ text: "Přepínač", link: "/komponenty/prepinac" },
					{ text: "Pruh statistik", link: "/komponenty/pruh-statistik" },
					{ text: "Průvodce", link: "/komponenty/pruvodce" },
					{ text: "Rozbalovací seznam", link: "/komponenty/rozbalovaci-seznam" },
					{ text: "Rozcestník", link: "/komponenty/rozcestnik" },
					{ text: "Štítek", link: "/komponenty/stitek" },
					{ text: "Stránkování", link: "/komponenty/strankovani" },
					// { text: "Tabulka", link: "/komponenty/tabulka" },
					{ text: "Textové pole", link: "/komponenty/textove-pole" },
					{ text: "Tlačítko", link: "/komponenty/tlacitko" },
					{ text: "Výběr času", link: "/komponenty/vyber-casu" },
					{ text: "Výběr data", link: "/komponenty/vyber-data" },
					{ text: "Vyhledávání", link: "/komponenty/vyhledavani" },
					{ text: "Vypínač", link: "/komponenty/vypinac" },
					{ text: "Záložky", link: "/komponenty/zalozky" },
					{ text: "Zaškrtávací pole", link: "/komponenty/zaskrtavaci-pole" },
					{ text: "Zpráva", link: "/komponenty/zprava" },
				],
			},
			{
				text: "Více",
				collapsed: true,
				items: [
					{ text: "Ke stažení a nástroje", link: "/vice/ke-stazeni-a-nastroje" },
					{ text: "Roadmapa vývoje", link: "/vice/roadmapa-vyvoje" },
					{ text: "Podpora a podněty", link: "/vice/podpora-a-podnety" },
					{ text: "Podmínky použití", link: "/vice/podminky-pouziti" },
					{ text: "Přehled projektů", link: "/vice/prehled-projektu" },
				],
			},
		],
	},
	markdown: {

	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => {
					return tag.toLowerCase().indexOf("gov-") === 0
				},
			},
		},
	},
	async transformHead({ assets }) {
		// adjust the regex accordingly to match your font
		const myFontFile = assets.find(file => /..\/..\/..\/fonts\/lib\/roboto\.\w+\.woff2/)
		if (myFontFile) {
			return [
				[
					"link",
					{
						rel: "preload",
						href: myFontFile,
						as: "font",
						type: "font/woff2",
						crossorigin: "",
					},
				],
			]
		}
	},
	outDir: '../../dist/packages/docs'
}))
