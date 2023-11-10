---
title: Rozcestník
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `tile`<br>
Pomáhá uživatele nasměrovat k informacím, které hledá. Slouží k rychlému náhledu informací v rámci přehledového zobrazení.

<div class="sample-content">
    <client-only>
        <gov-tiles columns="2">
            <gov-tile href="https://gov.cz/">
                <h3 slot="title">Diseases</h3>
                <gov-icon type="complex" name="packet" slot="icon"></gov-icon>
            </gov-tile>
            <gov-tile href="https://gov.cz/">
                <h3 slot="title">Covid portal</h3>
                <gov-icon type="complex" name="pills" slot="icon"></gov-icon>
            </gov-tile>
            <gov-tile href="https://gov.cz/">
                <h3 slot="title">Birth of a child</h3>
                <gov-icon type="complex" name="holiday" slot="icon"></gov-icon>
            </gov-tile>
            <gov-tile href="https://gov.cz/">
                <h3 slot="title">Change of permanent residence</h3>
                <gov-icon type="complex" name="illness" slot="icon"></gov-icon>
            </gov-tile>
        </gov-tiles>
    </client-only>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-tile--docs"
    documentationUrl="/komponenty/dokumentace/gov-tile" />

### Použití

#### Obecně

Navigace a správné nasměrování lidí na webu potřebuje často nějaké navigační pomůcky. Rozcestník je jednou z těchto navigačních pomůcek. Jako rozcestník může sloužit například navigační lišta, odkazy nebo speciální sekce v rámci stránky (jak je tomu i na Portálu veřejné správy).

**Rozcestník:**
- pomáhá lidem najít cestu ke správným informacím.
- slouží jako rychlý přehled toho, co je pro uživatele v daném kontextu nejdůležitější.
- u jednotlivých informací umožňuje proklik na detail stránky s podrobnějším popisem nebo proklik na detailnější rozcestník s větším množstvím položek.
- používejte na klíčových stránkách webu, zpravidla pak na domovské stránce.
- nepoužívejte pro všechny informace, ale pouze pro zobrazení těch nejdůležitějších nebo pro zobrazení kategorií informací.

#### Konkrétně
V rámci design systému je rozcestníkem myšlena speciální navigační sekce (například na domovské stránce Portálu veřejné správy). Informace níže v textu se tedy vztahují k tomuto konkrétnímu rozcestníku.

### Nadpis
Pro rozcestník používejte nadpis `<H2>`.

### Tlačítko
- Může obsahovat proklik na detailní výpis všech položek.
- Vhodné je použití Tlačítka typu Primary Outline viz [Tlačítka](/komponenty/tlacitko).

### Položky rozcestníku
Podle počtu položek v rozcestníku rozlišujeme dva typy:

- základní rozcestník – doporučený počet položek 6,
- detailní rozcestník – maximální doporučený počet položek 12.

V případě většího počtu položek je lepší řešit jejich výpis jinou formou, např. jako Seznam položek. Samotné položky mohou obsahovat další prvky.

**Nadpis položky**
- Používejte nadpis `<h3>`.
- Může na něm být umístěn odkaz.
- Měl by být krátký.

**Popisek**
- Používejte klasický odstavec `<p>`.
- Měl by být krátký.