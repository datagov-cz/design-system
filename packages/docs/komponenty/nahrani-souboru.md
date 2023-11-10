---
title: Nahrání souboru
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `file upload`<br>
Umožňuje nahrání souboru přetažením nebo výběrem ze zařízení.

<div class="sample-content">
    <gov-form-file expanded name="test-me-c">
        <p>Přetáhněte soubor nebo</p>
        <p>
            <gov-button variant="primary" type="outlined">
                Nahrajte ze zařízení
            </gov-button>
        </p>
        <p class="gov-text--s">
            Podporované formáty XML, PDF, DOC
        </p>
    </gov-form-file>
</div>

<DocumentationLinks
storybookUrl="/storybook/?path=/docs/components-form-file--docs"
documentationUrl="/komponenty/dokumentace/gov-file" />

## Použití
- Výchozí popisky pro nahrání souboru můžete uzpůsobit vlastnímu projektu.
- Pokud je název vloženého souboru delší než nadřazený prvek, použijte pro delší část názvu tečky (…).
- Pokud existují omezení na formát nebo velikost nahrávaného souboru, upozorněte na to uživatele předem.

### Přetažení souboru
     
Komponenta je řešena funkcionalitou Drag and drop *(přetažení myší)*, kdy uživatel může přetáhnout soubor z počítače do vyznačeného místa.

**Interakce**

1. Uživatel může vybrat najednou jeden nebo více souborů. Ve výchozím nastavení je akceptován jakýkoliv typ souboru, ale můžete přidat parametry pro ověření konkrétního typu souboru.
2. Kliknutím na **Nahrajte z počítače** se spustí specifické okno prohlížeče pro nahrání souboru.
3. Jakmile uživatel vybere soubory, specifické okno prohlížeče pro nahrání souboru se zavře a soubory se objeví nad Drag and drop areou.
4. Chyby, které vznikly nahráním souboru, se zobrazují výstražnou barvou pro chybový stav, jako u zbytku formuláře.

**Odebrání nahraných souborů**

Vývojáři použijí JavaScript pro vložení ikony `fa-remove` ke každému souboru, který je vybrán k nahrání. Použité piktogramy najdete na stránce Ikony. Mějte však na paměti, že tento druh úpravy není v prohlížeči nativně podporován.
