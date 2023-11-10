---
title: Zpráva 
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `message` <br>

Slouží k zvýraznění textu, který souvisí s obsahem stránky.

<div class="sample-content">
    <gov-message variant="primary">
        <p>A planned server outage will take place from December 20, 2020 at 2:00 p.m. until December 20, 2020 at 3:00 p.m. During this period, logging in to the Citizen Portal via data box will be unavailable. More information <a href="#">here</a>.</p>
    </gov-message>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-message--docs"
    documentationUrl="/komponenty/dokumentace/gov-message" />

## Použití
- Používá se pro **1-2 věty**, které chcete vyzdvihnout a **vážou se k obsahu stránky**.
- Lze ji **doplnit vhodnou ikonou** např. žárovkou, vykřičníkem, ikonou informace apod. 
- Pro zvýraznění lze použít výstražné barvy, případně lze použít výstražnou barvu pouze na ikonu a levý boční pruh. 
- Jde o **statický prvek** na stránce, který nelze uživatelem zavřít. 

**Nezaměňujte** s komponentou [informační lišta](/komponenty/informacni-lista), která se používá pro informaci nesouvisející s obsahem stránky např. jako upozornění pro plánované omezení systému a kterou může uživatel skrýt. 
