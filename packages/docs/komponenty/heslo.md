---
title: Heslo
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `password` <br>

Textové pole, které indikuje splnění pravidel pro sílu hesla. 

<div class="sample-content">
    <gov-form-control>
        <gov-form-group>
            <gov-form-input size="m" variant="secondary" input-type="password"></gov-form-input>
            <gov-form-password-power power="2" class="w-full">Weak</gov-form-password-power>
        </gov-form-group>
        <gov-form-label slot="top" size="m">Heslo</gov-form-label>
    </gov-form-control>
</div>

<DocumentationLinks
storybookUrl="/storybook/?path=/docs/components-form-password--docs"
documentationUrl="/komponenty/dokumentace/gov-password-power" />

## Použití
- Používá se k zadávání hesel pro přístup do systému. 
- Ve výchozím stavu skrývá jednotlivé vepsané znaky pro anonymizaci hesla. 
- Zadané heslo lze zobrazit pomocí ikony oka.
- Obsahuje podmínky pro splnění pravidel hesla. 
- Zobrazuje průběh plnění podmínek pomocí ukazatele síly hesla. 
