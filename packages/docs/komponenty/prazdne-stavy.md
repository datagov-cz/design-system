---
title: Prázdné stavy
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `empty states` <br>

Informují o aktuálním stavu, že pro výsledek hledání nebo stav aplikace neexistuje žádný obsah. 

<div class="sample-content">
    <gov-empty align="left">
        <p class="gov-text--2xl">Sorry, no data available!</p>
        <p class="gov-text--m gov-color--secondary-700">
            There will be a scheduled server outage from December 20, 2020 at 2:00 p](/komponenty. to December 20, 2020 at 3:00 p.
        </p>
        <gov-spacer size="l"></gov-spacer>
        <gov-icon type="complex" name="certification" slot="icon"></gov-icon>
    </gov-empty>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-empty--docs" />

## Použití 

**Prázdné stavy se zobrazují na místech v aplikaci určených pro personalizaci, kde dosud nejsou žádná data od uživatele.** Např. když si uživatel ještě neoznačil některé položky jako oblíbené, bude mít tato sekce prázdný stav. Pomáhají tak uživateli objevovat nepoužívané funkce a zvyšují schopnost naučit se pracovat s aplikací. 

**Sdělují uživateli stav systému** např. při výsledků hledání, když **nebylo nic nalezeno.**
