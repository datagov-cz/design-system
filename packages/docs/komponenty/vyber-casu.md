---
title: Výběr času
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `timepicker`<br>
Nativní komponenta. Slouží k zadávání či výběru času.

<div class="sample-content max-w-[100px]">    
    <gov-form-input size="m" variant="secondary" input-type="time"></gov-form-input>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-input--docs#time"
    documentationUrl="/komponenty/dokumentace/gov-input" />

## Použití
- Pro zadávání času událostí.
- Pro výběr času ve formátu hh:mm *(typicky se používá ve formulářích)*

## Označení
Komponenta pro výběr času je vždy označena a řídí se stejnými pravidly jako [Formuláře](/pravidla/jak-na-tvorbu-formulare).

## Formát
U komponenty pro výběr času je potřeba ve výchozím stavu použít zástupný text *(Placeholder)*. V zástupném textu je uvedeno v jakém formátu má uživatel čas zadávat *(hh:mm)*.
