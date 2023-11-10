---
title: Vyhledávání
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `search`<br>
Slouží k zadání slova nebo fráze a vyhledání příslušné části obsahu bez použití navigace.

<div class="sample-content">
    <gov-form-control>
        <gov-form-group>
            <gov-form-search variant="primary">
                <gov-form-input slot="input" size="xl" name="test-me" placeholder="Co hledáte"></gov-form-input>
                <gov-button slot="button" variant="primary" size="l">
                    Hledat
                </gov-button>
            </gov-form-search>
        </gov-form-group>
    </gov-form-control>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-search--docs"
    documentationUrl="/komponenty/dokumentace/gov-search" />

## Použití
- Vyhledávání se používá k vyhledání a zobrazení sady výsledků.
- Vyhledávání lze použít jako primární prostředek pro hledání obsahu nebo jako filtr, který uživateli při hledání obsahu pomáhá.

## Typy vyhledávacích polí
- Pokud použijete vyhledávání, které se týká stránky nebo sekce, ve které se nachází vyhledávací pole, nastavte uživatelům kontext pro vyhledávání pomocí užitečného zástupného textu v poli hledání např. “Hledat dokumenty”.
- Pokud jde o vyhledávání v globální hlavičce, použijte jako text v poli hledání pouze “Hledání”.

## Specifické chování na hlavní stránce

### Výsledky vyhledávání
- Výsledky zobrazujte s popisky nebo hlavičkami *(např. Výsledky pro XY)*.
- Pokud pocházejí výsledky vyhledávání z různých oblastí, kategorizujte je *(např. dokumenty, služby, aplikace, výukové programy, blogy)*.
- Umožněte uživatelům ovládat možnosti prohlížení a schopnost třídit výsledky *(např. relevance, popularita, hodnocení, datum)*.
- Informujte uživatele jasnými zprávami např. “Na hledaný výraz XY nebyly nalezeny žádné výsledky”.
- Používejte inteligentní algoritmy, které mohou vyhledávat podobné výrazy nebo vyhledávají i s chybně napsanými slovy.
- Uveďte u výsledků vyhledávání dostatečný popis, aby uživatelé mohli posoudit, zda a který výsledek je pro ně relevantní.
- Pokud je to možné, hledaný výraz ve výsledcích vyhledávání zvýrazněte.
