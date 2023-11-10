---
title: Vypínač
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `Switch`<br>
Slouží k vypnutí/zapnutí funkce.

<div class="sample-content">
    <gov-form-switch size="m">
        <gov-form-label size="m" slot="label">This is label of input</gov-form-label>
    </gov-form-switch>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-switch--docs"
    documentationUrl="/komponenty/dokumentace/gov-switch" />

## Použití
Vypínač nemusí být použitý jen ve formuláři. Často se používá v nastavení aplikací. Například pro vypnutí/zapnutí funkce notifikací.

Vypínač vybízí uživatele k výběru dvou, vzájemně se vylučujících, voleb *(on/off)*. Vypínač má poskytovat uživateli okamžitou zpětnou vazbu, která mu umožní svobodně ovládat jeho preference podle potřeby.

Použití vypínače bývá často zaměňováno s dalšími formulářovými prvky. Podrobnější popis, jak tyto prvky používat, najdete na stránce [Formuláře](/pravidla/jak-na-tvorbu-formulare).

Volba, kterou uživatel provede prostřednictvím vypínače se projevuje okamžitě, bez nutnosti odeslat formulář prostřednictvím tlačítka.

## Nadpis
Nadpis musí být výstižný. Měl by uživateli podat další informace o akci, která bude v případě změny (on/off) následovat.
