---
title: Krokovník
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `stepper`<br>
Slouží k rozčlenění obsahu pomocí na sebe navazujících kroků. Využívá se pro prezentování návodů *(postupů)*.  

<div class="sample-content">
    <client-only>
        <gov-stepper size="m" wcag-label="Aid application procedure">
            <gov-stepper-item variant="primary" label="Legislation" prefix="1">
                <span slot="prefix">1</span>
            </gov-stepper-item>
            <gov-stepper-item variant="error" label="Appeal options" prefix="2">
                <span slot="prefix">2</span>
            </gov-stepper-item>
            <gov-stepper-item variant="success" label="Negotiating language" prefix="3">
                <span slot="prefix">3</span>
            </gov-stepper-item>
            <gov-stepper-item variant="warning" label="Options for processing your application at a nearby office" prefix="4">
                <span slot="prefix">4</span>
            </gov-stepper-item>
        </gov-stepper>
    </client-only>
</div>

<DocumentationLinks
storybookUrl="/storybook/?path=/docs/components-stepper--docs"
documentationUrl="/komponenty/dokumentace/gov-stepper" />

## Použití
- Využívá se k prezentování návodů (postupů), které představují sekvenci na sebe navazujících kroků. 
- Používá se k rozčlenění obsahu, který je určený k porozumění jednotlivých kroků (např. návod jak si stáhnout mobilní aplikaci, postup jak vytvořit QR kód pro platbu v bankovní aplikaci apod.) Uživatel vidí veškerý obsah jednotlivých kroků najednou. 

**Pozor:** Není náhradou kroků ve formuláři! Uživatel informace ve stepperu pouze konzumuje, nejedná se o odbavení dané služby, např. proces objednání zboží v košíku na e-shopu. Pro tyto účely slouží komponenta [Průvodce](/komponenty/pruvodce).  

## Popis
- Obsah rozděluje do menších logických celků, které na sebe navazují.
- Usnadňuje čtení a orientaci díky číslování jednotlivých kroků.
- Prezentace obsahu v jednotlivých krocích může být přizpůsobena pro potřeby snadnějšího porozumění (např. jeden krok je pouze popisný, druhý má navíc animaci apod.).
- Pro vícekrokové návody se může využít funkce rozbalování obsahu, což přináší výhodu v ušetření výšky na stránce, a zároveň je obsah prezentovaný až po kliku, kdy se uživatel plně zaměřuje na porozumění daného kroku,

**Nevkládejte** steppery do stepperů, ani nepoužívejte více stepperů na jedné stránce. 
