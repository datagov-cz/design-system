---
title: Rozbalovací seznam
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `select`<br>

Slouží k výběru ze seznamu případně pro filtraci obsahu.

<div class="sample-content">
    <gov-form-select size="m" variant="secondary">
        <option value="Afghanistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
    </gov-form-select>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-select--docs"
    documentationUrl="/komponenty/dokumentace/gov-select" />

## Použití
Rozbalovací seznam použijte, pokud má uživatel vybrat jednu možnost z delšího seznamu (7 a více možností). Pokud je výběr možností menší, použijte [Přepínače](/komponenty/prepinac) nebo [Zaškrtávací pole](/komponenty/zaskrtavaci-pole).

## Označení `<label>`
Každý rozbalovací seznam má přiřazené výstižné označení, které:

- Umístěte ideálně nad daným rozbalovacím seznamem, případně nalevo od seznamu (zarovnané na levý prapor).
- Je krátké, srozumitelné a výstižné.

Dvojtečka za označení rozbalovacího seznamu nepatří.

## Možnosti v seznamu
- U každé možnosti dodržte délku pouze na jeden řádek (tomu uzpůsobte i velikost samotné komponenty).
- V seznamu nepoužívejte obrázky ani ikony.
- Možnosti řaďte podle četnosti používání (lze zvolit abecední řazení).

## Validace
Validace v reálném čase usnadní uživateli vyplňování formuláře. Pro kompletní pokyny, jak přistupovat k validacím, navštivte stránku [Jak na tvorbu formuláře](/pravidla/jak-na-tvorbu-formulare).

## Přístupnost
Z důvodu přístupnosti musí být komponenta plně ovladatelná pomocí myši i klávesnice. Rozbalovací seznamy nestylujte (neupravujte pomocí CSS). Ideálně se řiďte standardy typu [WCAG 2.1 standardů](https://www.w3.org/WAI/WCAG21/Techniques/general/G202) - tento např. nařizuje ovládání prvku pomocí klávesnice (CSS alternativa pro `select` tento standard porušuje).


