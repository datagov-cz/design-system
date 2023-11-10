---
title: Tlačítko
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `button`<br>
Slouží ke spuštění akce nebo k přechodu na další stránku jedním kliknutím. 

<gov-spacer size="m"></gov-spacer>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-button--docs"
    documentationUrl="/komponenty/dokumentace/gov-button" />
    
## Použití

- Obvykle je umístěno v dialozích, modálních oknech, formulářích, kartách apod.
- Tlačítko musí být rozpoznatelné jako interaktivní prvek na stránce. 
- Vnímatelné musí být i jednotlivé stavy tlačítka. 
- Je snadno dohledatelné mezi ostatními prvky na stránce. 
- Tlačítko s největším významem tzv. CTA *(call to action)* je nejvýraznější a jediné na stránce. Reprezentuje hlavní cíl stránky např. odeslání formuláře, zaplacení objednávky apod. 
- Hlavní tlačítko může být doplněno o další tlačítka s menším významem, jejichž podoba odpovídá důležitosti (např. obrysové či textové tlačítko).
- Popisek tlačítka odpovídá akci, která nastane, když uživatel na tlačítko klikne. Pro maximální čitelnost se doporučuje textace na jednom řádku s max. délkou 20 znaků.
- Pro zvýraznění funkce tlačítka lze zvolit výstražnou barvu např. error pro odstranění, success pro potvrzení. Používání těchto tlačítek by mělo být konzistentní napříč celým webem (aplikací) a neměla by být nadužívaná vůči primární barvě tlačítka, např. zobrazují se pouze v modální oknech apod.

## Typy tlačítek
Existuje několik druhů tlačítek, které se liší podle kontextu jejich použití. Pro každé tlačítko existují speciální CSS třídy, a to konkrétně třídy, které řeší - typ tlačítka, velikost, stav (disable state) popř. speciální třída pro speciální typ tlačítka.

<div class="sample-content flex flex-wrap gap-4 items-center">
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="m">Solid</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="outlined" size="m">Outlined</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="base" size="m">Base</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="link" size="m">Link</gov-button>
</div>


## Velikosti tlačítek
- Tlačítko použijte v různých velikostech v závislosti na prostoru, který máte na stránce
- Pro důležitější akce použijte větší tlačítko
- Velikost “Small” je vhodná především pro nižší třídy tlačítek
- U tlačítek, která jsou umístěna v řádku vedle sebe, dodržujte vždy stejnou velikost

<div class="sample-content flex flex-wrap gap-4 items-center">
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="xs">Velikost XS</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="s">Velikost S</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="m">Velikost M</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="l">Velikost L</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="xl">Velikost XL</gov-button>
</div>

## Varianty tlačítek

<div class="sample-content flex flex-wrap gap-4 items-center">
    <gov-button wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="m">Primary</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="secondary" type="solid" size="m">Secondary</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="success" type="solid" size="m">Success</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="warning" type="solid" size="m">Warning</gov-button>
    <gov-button wcag-label="What exactly happens when you click?" variant="error" type="solid" size="m">Error</gov-button>
</div>
