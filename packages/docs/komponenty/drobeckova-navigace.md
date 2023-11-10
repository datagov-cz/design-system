---
title: Drobečková navigace
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `breadcrumb`<br>

Slouží k zobrazení polohy ve struktuře webu a umožňuje přechod na nadřazenou úroveň.

<div class="sample-content">
    <gov-breadcrumbs wcag-label="You are in the following level">
        <ul>
            <li>
                <gov-icon type="basic" name="chevron-right"></gov-icon>
                <a href="#">Home</a>
            </li>
            <li>
                <gov-icon type="basic" name="chevron-right"></gov-icon>
                <a href="#">Where to go next</a>
            </li>
            <li>
                <gov-icon type="basic" name="chevron-right"></gov-icon>
                <a href="#">Czech eGovernment</a>
            </li>
            <li>
                <gov-icon type="basic" name="chevron-right"></gov-icon>
                <strong>Czech POINT</strong>
            </li>
        </ul>
    </gov-breadcrumbs>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-breadcrumbs--docs"
    documentationUrl="/komponenty/dokumentace/gov-breadcrumbs" />

## Použití
- Drobečková navigace nenahrazuje primární navigaci.
- Jako první položku uvádějte vždy úvodní stránku.
- Drobečkovou navigaci umisťujte v blízkosti Menu.
- Ukazujte hierarchii stránek, nikoliv historii prohlížení.
- Nadřazené úrovně jsou podtržené, aby bylo jasné, že jsou klikatelné.
- Aktuální poloha ve struktuře není podtržená, není klikatelná.
- Udržujte názvy položek krátké a popisné.
- Nepoužívejte drobečkovou navigaci jako Formulářové kroky nebo jiný indikátor postupu.
