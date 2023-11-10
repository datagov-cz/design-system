---
title: Chybová stránka
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `error code` <br>

Zobrazuje číslený nebo alfanumerický kód, který označuje povahu chyby.

<div class="sample-content">
    <client-only>
        <gov-error-code>
            <h2 class="gov-text--6xl">Page not found</h2>
            <p class="gov-text--l">Sorry, the page you are looking for does not exist or has been moved.</p>
            <gov-spacer size="l"></gov-spacer>
            <gov-button variant="primary" size="m" type="solid" wcag-label="Go to homepage">Go to homepage</gov-button>
            <gov-icon type="complex" name="card-404" slot="icon"></gov-icon>
        </gov-error-code>
    </client-only>
</div>

<DocumentationLinks
storybookUrl="/storybook/?path=/docs/components-error-code--docs" />

## Použití

Chybový kód je doplněn popisem. Číselná hodnota chyby je důležitá pro technickou podporu, uživateli však nic neřekne, proto ji vždy doplňte alespoň krátkým popisem, co chyba reprezentuje.  

Pokud chybový kód je zobrazen pomocí ikony, nezapomeňte, aby údaj byl dostupný i při špatném vykreslení stránky a pro asistivní technologie. 
