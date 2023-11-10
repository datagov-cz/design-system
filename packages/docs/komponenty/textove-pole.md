---
title: Textové pole
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `input`<br>
Slouží k psaní/vkládání textu.

<div class="sample-content">
    <gov-form-input size="m" variant="secondary" rows="0"></gov-form-input>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-form-input--docs"
    documentationUrl="/komponenty/dokumentace/gov-input" />

## Použití

| Typ                      | 	Použití                                                            |
|--------------------------|---------------------------------------------------------------------|
| Textové pole             | 	Když očekáváte jako vstup od uživatele jediný řádek textu.         |
| Víceřádkové textové pole | 	Když očekáváte jako vstup od uživatele více jak jeden řádek textu. |

<br>
Používejte textové pole, které uživateli ve formuláři pomáhá zadat, vybrat a vyhledat text. Textové pole se obvykle nachází ve formuláři, ale může být i součástí modálu, vyhledávání nebo karty. Běžné zadávání textu zahrnuje uživatelská jména, popisy, adresy URL, e-maily.

Při určování délky formulářového pole berte v potaz maximální možný počet znaků, který bude uživatel do pole zadávat.