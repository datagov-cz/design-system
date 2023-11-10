---
title: Zaškrtávací pole
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `checkbox`<br>
Slouží pro výběr jedné, více, ale i žádné možnosti ze seznamu možností.

<div class="sample-content">
    <gov-form-checkbox size="m">
        <gov-form-label size="m" slot="label">This is label of input</gov-form-label>
    </gov-form-checkbox>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-checkbox--docs"
    documentationUrl="/komponenty/dokumentace/gov-checkbox" />

## Použití
Zaškrtávací pole použijte v případě, že je možné vybrat jednu, více, ale také žádnou možnost ze seznamu možností. Pro výběr pouze jedné možnosti ze seznamu použijte [Přepínače](/komponenty/prepinac).

Zaškrtávací pole může být k dispozici také pouze jedno *(bez možnosti výběru)* – např. žádost o udělení souhlasu se zpracováním osobních údajů.

Zaškrtávací pole použijte ve formuláři nebo pro rozšířené hledání *(např. u výsledků vyhledávání)*.
Pokud se jedná o souhlas nebo potvrzení, nechte pole ve výchozím stavu nezaškrtnuté *(např. udělení souhlasu se zpracováním osobních údajů)*.

## Označení
Každé zaškrtávací pole má přiřazené výstižné označení, které:

- umístěte vpravo od zaškrtávacího pole
- je krátké, srozumitelné a výstižné

Dvojtečka za označení rozbalovacího seznamu nepatří

## Klikatelná plocha
Uživatel by měl mít možnost zaškrtnout výběr nejen kliknutím přímo do zaškrtávacího okénka (může být problém se trefit), ale i kliknutím na **označení zaškrtávacího pole**.

## Výchozí výběr
- V případě použití ve formuláři je zaškrtávací pole nezaškrtnuté
- Nezaškrtnutá pole jsou také tam, kde uživatel v rozšířeném hledání upřesňuje svůj výběr
- Všechna pole jsou zaškrtnutá v případě, že chceme uživateli ukázat všechen obsah na stránce a dát mu možnost obsah si samostatně filtrovat *(např. výsledky vyhledávání, aktuality)*.
