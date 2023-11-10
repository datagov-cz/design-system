---
title: Pruh statistik
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `statsbar`<br>

Slouží k prezentaci stěžejních kvantitativních dat s cílem propagovat měřitelný úspěch produktu. Zvyšuje důvěryhodnost
služby.

<div class="sample-content">
    <gov-statsbar variant="primary">
        <gov-statsbar-item>
            210m
            <gov-icon type="complex" name="id-card" slot="icon"></gov-icon>
            <span slot="text">data messages</span>
        </gov-statsbar-item>
        <gov-statsbar-item>
            1m
            <gov-icon type="complex" name="energy" slot="icon"></gov-icon>
            <span slot="text">data boxes</span>
        </gov-statsbar-item>
        <gov-statsbar-item>
            967k
            <gov-icon type="complex" name="covid" slot="icon"></gov-icon>
            <span slot="text">hours saved in queues</span>
        </gov-statsbar-item>
        <gov-statsbar-item>
            12m
            <gov-icon type="complex" name="doc-taxes" slot="icon"></gov-icon>
            <span slot="text">of saved crowns</span>
        </gov-statsbar-item>
    </gov-statsbar>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-statsbar--docs"
    documentationUrl="/komponenty/dokumentace/gov-statsbar" />

## Použití

1. **Pro pruh statistik zvolte max 4 relevantní ukazatele, které se dají dobře vyčíslit.**<br>
   Např. kampaňový web k datovým schránkám propagoval: počet datových zpráv, počet datových schránek, počet hodin
   ušetřených ve frontách na úřadě a počet ušetřených korun.

2. **K daným ukazatelům máte k dispozici měření a tím pádem i data.**<br>
   Zapojte analytické nástroje pro měření návštěvnosti na webu, případě využijte alternativní zdroje jako statistiku
   vytíženosti přepážek na úřadě nebo zajímavá data z výročních zpráv.

3. **Zamyslete se, jestli prezentovaná data zvyšují důvěryhodnost služby a chcete se výkonem pochlubit.**<br>
   Jsou data dostatečně srozumitelná a pro uživatele přínosná, aby si dokázal udělat pozitivní obrázek o produktu?
   Jste-li na pochybách a data by mohla vést k nechtěných debatám, zvažte jejich publikování.

4. **Nebojte se čísla zaokrouhlovat.**<br>
   Není potřeba čísla uvádět přesně. Důležitější je jejich celkové vyznění.<br>
   Např. 1 963 576 návštěv klidně prezentujte jako 2 miliony návštěv.

5. **Zvolte vhodný formát číselného zápisu.**<br>
   Vyhněte se např. opakování nul, raději používejte jazykové zkratky: 1 000 000 - 1 mil, 1 000 - 1 tis. Ušetříte tak
   limitovaný prostor pruhu.
