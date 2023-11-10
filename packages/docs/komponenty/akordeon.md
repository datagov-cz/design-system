---
title: Akordeon
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `accordion`<br>

Slouží ke sbalení obsahu, který pro uživatele není v dané chvíli podstatný.

<client-only>
    <gov-accordion class="sample-content pt-0 pb-4" variant="primary" size="s" wcag-label="Basic information about the gov.cz design system">
        <gov-accordion-item>
            <h3 slot="label">Legislation</h3>
            <p>Sed ac dolor sit amet purus malesuada congue.</p>
        </gov-accordion-item>
        <gov-accordion-item>
            <h3 slot="label">Appeal options</h3>
            <p>Integer pellentesque quam vel velit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula
            egestas nulla, et sollicitudin sem purus in lacus. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin
            et, dolor. Nulla pulvinar eleifend sem. Duis condimentum augue id magna semper rutrum. Curabitur sagittis
            hendrerit ante. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam quis quam. Curabitur vitae
            diam non enim vestibulum interdum. In rutrum. Pellentesque sapien. Etiam egestas wisi a erat. Cras elementum.
            Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.
            Fusce nibh. Phasellus faucibus molestie nisl.</p>
            <p slot="annotation">In some cases, it is necessary to describe the problem in detail to better guide the
                user.</p>
        </gov-accordion-item>
        <gov-accordion-item>
            <h3 slot="label">Options for processing your application at a nearby office</h3>
            <p>Nulla non lectus sed nisl molestie malesuada. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
            repellat. Nunc tincidunt ante vitae massa. Nam sed tellus id magna elementum tincidunt.</p>
        </gov-accordion-item>
    </gov-accordion>
</client-only>

<DocumentationLinks 
    storybookUrl="/storybook/?path=/docs/components-accordion--docs" 
    documentationUrl="/komponenty/dokumentace/gov-accordion" />

## Použití

- Pro zpřehlednění stránky a pro urychlení orientace v případech, kdy uživatelé potřebují pouze malou část obsahu.
- V případě omezeného vertikálního prostoru na stránce, nebo pokud není žádoucí, aby byla stránka příliš dlouhá.
- Vyhněte se vnořeným akordeonům.
- Umožněte v akordeonu rozbalení (otevření) více sekcí zároveň.
- Zajistěte klikatelnou celou oblast záhlaví.
- Označení jednotlivých sekcí akordeonu volte takové, aby bylo jasné, co je jejich obsahem, ještě než je uživatel rozbalí.

## Akordeon v textu

- Nadpis je dostatečně velký.
- Vhodné pro velmi dlouhé a odborné texty.

## Akordeon ve formuláři

- Vhodné pro dlouhé formuláře, kde není potřeba vyplňovat všechny údaje.
- Nadpis akordeonu je menší kvůli omezenějšímu prostoru uvnitř formuláře.

