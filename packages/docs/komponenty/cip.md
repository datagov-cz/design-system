---
title: Čip
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `chip`<br>

Umožňuje uživatelům provádět výběry, filtrovat obsah nebo zadávat informace.

<div class="sample-content">
    <gov-chip wcag-label="What exactly happens when you click?" variant="primary" size="m" tag="span">
        Chip
    </gov-chip>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-chip--docs"
    documentationUrl="/komponenty/dokumentace/gov-chip" />

## Typy a jejich funkce

### Výběrové čipy
angl. `Choice chips`<br>

- Ve výchozím stavu je vždy jeden čip ze sady čipů vybraný. 
- Lze vybrat pouze jeden čip ze sady čipů. 
- Výběr čipu se zruší zakliknutím jiného.
- Nepoužívají se, pokud se jedná o výběr z jedné možnosti.  

### Filtrační čipy

angl. `Filter chips`<br>

- Umožňují filtrovat obsah. 
- Lze vybírat množinu 1-n čipů.
- Pro umocnění výběru lze doplnit vybraný čip levou ikonou se symbolem fajfky.
- Nepoužívají se, pokud se jedná o výběr z jedné možnosti.   

### Vstupní čipy 

 angl. `Input chips`<br>
- Představují informaci použitou v poli, např. vybraný kontakt v chatu.
- Lze použít i pro výběr pouze jedné možnosti. 

Zmíněné typy čipů vypadají stejně, liší se pouze chováním.
