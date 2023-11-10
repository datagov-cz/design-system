---
title: Karta
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `card` <br>

Seskupuje několik krátkých souvisejících informací do jedné karty a nabádá uživatele, aby na ni klikl. Díky univerzální
velikosti dobře funguje napříč různými obrazovkami.

<div class="sample-content">
    <gov-card label="Design system CE">
        <p>A design system is a scenario by which a Digital and Information Agency designs and develops websites and digital products. The Design System is intended to help other teams create digital products more quickly and consistently across government.</p>
        <p slot="footer">Cum sociis natoque penatibus et magnis dis parturient montes</p>
    </gov-card>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-card--docs"
    documentationUrl="/komponenty/dokumentace/gov-card" />

## Použití

1. **Používá se pro hierarchické seskupování nejdůležitějších informací do jednoho menšího celku.** Vhodná je např. pro
   prezentaci článku na úvodní stránce zpravodajského webu, jako produktová karta v e-shopu či příspěvek na sociální
   síti atd.

2. **Podobá se fyzické kartě.** Je ohraničená, liší se od barvy pozadí, často se používá mírný vržený stín k zobrazení
   hloubky a zaoblenost rohů.

3. **Láká k prokliku.** Je navržena tak, aby uživatel věděl, že na ní může kliknout. Click area je typicky na celé
   ploše.

4. **Umožňuje flexibilní rozložení.** Karty mohou mít různou výšku, aby vyhovovaly různému typu obsahu, striktní je
   pouze šířka karty.

5. **Jsou vhodné pro případy, když uživatelé prochází informace**, než když hledají konkrétní výsledek, kdy je lepší
   prezentace do seznamů.

6. V případě **heterogenního obsahu** je vhodné rozložení karet do podoby **dashboardu**, pro **homogenní obsah** je
   naopak lepší **vertikální seznam** položek nebo **mřížka**.  
