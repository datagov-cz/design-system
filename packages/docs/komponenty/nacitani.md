---
title: Načítání
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `loaders` <br>
Používá se pro vykreslení stavu při čekání od dvou sekund výše, aby uživatel věděl, v jaké stavu se systém nachází a neopustil stránku předčasně.

## Typy načítání a jejich použití

### Obrysové načítání 
angl. `skeleton loader` <br> 
Je indikátor průběhu načítání obsahu na stránce. Snižuje vnímání dlouhé doby načítání tím, že poskytuje vodítka pro to, jak bude stránka nakonec vypadat. Používá se výhradně pro celostránkové načítání.

<div class="sample-content">
    <gov-skeleton wcag-label="Loading content of page" variant="secondary" shape="text" animation="progress" count="3" width="60%" height="30px"></gov-skeleton>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-skeleton--docs"
    documentationUrl="/komponenty/dokumentace/gov-skeleton" />


- **Zabraňuje uživateli, aby si myslel, že web nefunguje.** Při zobrazení prázdné stránky uživatel s velkou pravděpodobně stránku okamžitě opustí. Pokud uvidí načítání stránky má indicií, že má na stránce zůstat.

- **Vytváří iluzi kratší doby čekání.** Obrazovka vypadá jako drátěný model a vytváří iluzi, že přechází do své konečné podoby. Indikace průběhu dává uživateli pocit, že načítání nebude trvat dlouho. 

- **Snižuje kognitivní zátěž.** Pomáhá uživateli dopředu rozpoznat jednotlivé prvky na stránce, které se následně plně vykresí. 

- **Používá se pro načítání do 10 sekund.** Pro delší načítání se doporučuje zvolit ukazatel průběhu *(angl. progress bar)*, kde je jasný indikátor, jak dlouho bude uživatel na stránce čekat.


### Centrální načítání 
angl. `central loader` <br>
Je jednoduchá animovaná ikona, která se nepřetržitě otáčí, aby signalizovala, že systém zpracovává nebo načítá obsah. 

- Používá se pro **načítání jednoho modulu na stránce**, např. videa, stahování souboru, načítání karty v dashboardu apod. 

- **Používá se pro načítání do 10 sekund.** Pro delší načítání se doporučuje zvolit ukazatel průběhu *(angl. progress bar)*, kde je jasný indikátor, jak dlouho bude uživatel na stránce čekat. 

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-loading--docs"
    documentationUrl="/komponenty/dokumentace/gov-loading" />
