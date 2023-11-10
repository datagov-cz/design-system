---
title: Přepínač
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `radio`<br>

Slouží pro výběr pouze jedné možnosti ze seznamu možností.

<div class="sample-content">
    <gov-form-control>
        <gov-form-message slot="bottom" variant="secondary">
            Here you can put your name
        </gov-form-message>
        <gov-form-group gap="m">
            <gov-form-radio size="m" name="radio-list">
                <gov-form-label size="m" slot="label">This is label of input 1</gov-form-label>
            </gov-form-radio>
            <gov-form-radio size="m" name="radio-list">
                <gov-form-label size="m" slot="label">This is label of input 2</gov-form-label>
            </gov-form-radio>
            <gov-form-radio size="m" name="radio-list">
                <gov-form-label size="m" slot="label">This is label of input 3</gov-form-label>
            </gov-form-radio>
        </gov-form-group>
    </gov-form-control>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-radio--docs"
    documentationUrl="/komponenty/dokumentace/gov-radio" />

## Použití
Přepínač použijte pro seznam dvou a více možností, které se vzájemně vylučují. Uveďte jasně přesně danou akci, která bude následovat v případě, že uživatel daný přepínač vybere. Pokud může uživatel vybrat více než jednu možnost, použijte [Zaškrtávací pole](/komponenty/zaskrtavaci-pole).

- Uživatel může vybrat vždy pouze jednu možnost.
- Jednotlivé možnosti zarovnávejte pod sebe.
- Používejte pouze tam, kde existuje výběr **alespoň ze dvou možností**.
- Pro výběr pouze jedné možnosti (např. souhlas se zpracováním osobních údajů) použijte vždy zaškrtávací pole.

## Nadpisy
U skupiny přepínačů uveďte nadpis, kterým uživateli poskytnete celkový kontext čeho se skupina přepínačů týká.

## Označení
Každý přepínač má přiřazené stručné označení, které je:

- Krátké, srozumitelné a výstižné.
- Umístěné vpravo od přepínače.
- Dvojtečka za označení nepatří.
- Pro další vysvětlení používejte text nápovědy pod označením.
