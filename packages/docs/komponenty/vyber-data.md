---
title: Výběr data
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `datepicker`<br>
Nativní komponenta. Slouží k zadávání data či výběru data z kalendáře.

<div class="sample-content max-w-[200px]">    
    <gov-form-input size="m" variant="secondary" input-type="date"></gov-form-input>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-input--docs#date"
    documentationUrl="/komponenty/dokumentace/gov-input" />

## Použití
- Pro zadávání termínů událostí, které se konají v blízké budoucnosti nebo událostí, které se odehrály v nedaleké minulosti.
- Pro výběr data ve formátu dd. mm. rrrr *(typicky se používá ve formulářích)*
- Použijte předvyplněné datum v případě, že je první termín do deseti dnů
- Předvyplněnou hodnotu nepoužívejte v případě, že chcete znát datum narození

## Označení
Komponenta pro výběr data je vždy označena a řídí se stejnými pravidly jako [Formuláře](/pravidla/jak-na-tvorbu-formulare).

## Formát
U komponenty pro výběr data je potřeba ve výchozím stavu použít zástupný text *(Placeholder)*. V zástupném textu je uvedeno v jakém formátu má uživatel data zadávat *(dd/mm/rrrr)*.

## Ovládání pomocí klávesnice
Výběr data se dá plnohodnotně ovládat z klávesnice.

## Klávesa enter
Pokud je kalendář ve výběru data zobrazený, datum, na kterém je focus, pomocí klávesy ENTER vybereme. Pokud kalendář není zobrazený, klávesou ENTER standardně odešleme aktuální formulář.

## Klávesa esc
Klávesu ESC lze použít ke skrytí a opětovnému zobrazení focusu.
