---
title: Mizející zpráva
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue';

const runToast = () => {
    const toast = document.createElement('gov-toast');
    toast.innerHTML = "Message displayed"; 
    toast.setAttribute("gravity", "bottom");
    toast.setAttribute("position", "center");
    toast.setAttribute("type", "solid");
    toast.setAttribute("variant", "success");
    toast.setAttribute("time", "10000");
    
    document.body.appendChild(toast);
}
</script>

angl. `toast message` <br>

Krátká informativní zpráva, která je zpětnou vazbou k provedené akci uživatelem. 

<div class="sample-content">
    <gov-button @gov-click="runToast" wcag-label="What exactly happens when you click?" variant="primary" type="solid" size="m">
        Display message
    </gov-button>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-toast--docs"
    documentationUrl="/komponenty/dokumentace/gov-toast" />

## Použití
- Slouží ke **krátké informaci**, která vypovídá, **co se událo po akci uživatele** např. *Zpráva byla odeslána.* 
- Má **krátkou životnost** několika sekund. Ubíhající čas může být vizuálně reprezentován ukazatelem průběhu.  
- Zabírá **velmi malý prostor** na obrazovce.
- **Uživatel ji může skrýt** ještě před uplynutím času.
- Pro zvýraznění sdělení lze použít výstražné barvy.
- Může být doplněna vhodnou ikonou např. např. fajfkou, vykřičníkem, ikonou informace apod.
