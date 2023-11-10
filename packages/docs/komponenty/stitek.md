---
title: Štítek
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `tag`<br>
je malý informační prvek, který slouží k vizuálnímu upozornění na jinou komponentu na stránce.

<div class="sample-content flex flex-wrap gap-4">
    <gov-tag variant="primary" size="xs">
        Tag Primary
    </gov-tag>
    <gov-tag variant="secondary" size="xs">
        Tag Secondary
    </gov-tag>
    <gov-tag variant="success" size="xs">
        Tag Success
    </gov-tag>
    <gov-tag variant="error" size="xs">
        Tag Error
    </gov-tag>
    <gov-tag variant="warning" size="xs">
        Tag Warning
    </gov-tag>
</div>

<DocumentationLinks
storybookUrl="/storybook/?path=/docs/components-tag--docs"
documentationUrl="/komponenty/dokumentace/gov-tag" />

## Použití

- Pouze vizuální prvek s cílem upozornit na jiný prvek na stránce např. štítek s textem *novinka* u komponenty [karty](/komponenty/karta) obsahující základní informace z nově publikovaného článku. 

- Obsahuje krátké výstižné slovo typu *novinka*, *doporučujeme*, *důležité* apod. 

- Pro zvýraznění štítku lze použít výstražné barvy.

- Může být doplněn vhodnou ikonou.  

- Nezaměňujte ho s komponentou [čip](/komponenty/cip), která není pouze vizuální ale i funkční a používá se v souvislosti s filtrací, výběrem kategorie, výběrem položky apod. 


## Doporučujeme

- Nepoužívejte pro každý prvek na stránce, zvolte pouze jednu kategorii, kterou chcete uživateli zvýraznit. 

- Volte množství štítků na stránce s rozvahou. Hrozí přehlcení uživatele informacemi. 
