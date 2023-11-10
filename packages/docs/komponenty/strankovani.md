---
title: Stránkování
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `pager`<br>
Slouží k rozdělení obsahu nebo dat na několik stránek s navigací na další nebo předchozí stránku.

<div class="sample-content">
    <gov-pagination variant="primary" size="m" type="button" current="1" total="48" page-size="10" max-pages="4" wcag-label="Hlavní stránkování" wcag-page-label="Strana"></gov-pagination>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-pagination--docs"
    documentationUrl="/komponenty/dokumentace/gov-pagination" />

## Použití
Stránkování použijte tam, kde se vyskytuje velké množství dat a rozdělením obsahu usnadníte uživateli orientaci. Stránkování použijte na všech stránkách, kde zobrazujete výsledky vyhledávání nebo u rejstříku orgánů veřejné moci (OVM), jejichž počet je vyšší než 25.

## Zobrazování výsledků
Pokud je počet výsledků vyšší než 25, je ideální použít stránkování. Dejte uživateli možnost měnit si počet zobrazovaných výsledků na stránce (25, 50, 75, 100). Počet výsledků na stránce vždy záleží na celém kontextu použití.