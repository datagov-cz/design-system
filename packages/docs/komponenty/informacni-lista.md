---
title: Informační lišta
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `infobar`<br>

Slouží ke sdělení důležitých informací, které souvisejí s provozem stránky nebo aplikace.

<div class="sample-content">
    <gov-infobar variant="primary">
        <p>From 8 May 2020 at 14:00 until 20 9 May 2020 at 15:00, there will be a planned server outage. During this period, logging in to the Citizen's Portal via data box will be unavailable. More information <a href="https://gov.cz/" target="_blank">here</a>.</p>
    </gov-infobar>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-infobar--docs"
    documentationUrl="/komponenty/dokumentace/gov-infobar" />


## Použití
- Umisťuje se nad nebo pod hlavní navigaci (menu), aby si ji uživatel všiml. 
- Pro zvýraznění sdělení se používají výstražné barvy.
- Může být doplněna vhodnou ikonou. 
- Lišta zpravidla obsahuje zavírací tlačítko, aby si ji uživatel po přečtení mohl skrýt a nebyl rozptylován ve čtení dalšího obsahu na stránce. 

## Doporučení 
- Buďte konzistentní v typu sdělení, které do informační lišty píšete. Např. pokud ji využíváte pro sdělení nedostupnosti systému, nepoužívejte ji pro jiný typ obsahu např. reklamní upoutávku. Uživatel by měl mít prvek spjatý s jedním typem informace.
- Myslete na to, aby se informační lišta zobrazila na stránce včas vůči návštěvnosti vaší stránky.
- Nikdy nenechávejte informační lištu aktivní, pokud již sdělení neplatí. Hrozí, že uživatelé dalšímu sdělení nebudou věřit a můžou si vůči celému prvku vytvořit slepotu.
- Používejte jednu, výjimečně dvě informační lišty najednou.