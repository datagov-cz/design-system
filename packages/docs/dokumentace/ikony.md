---
title: Ikony
---
<script setup>
import { ref } from 'vue';
import IconList from '../.vitepress/theme/components/IconList.vue'

</script>

Slouží k vizuální reprezentaci objektu nebo akce.

## Doporučení pro použití
Ikonami můžete vhodným způsobem doplnit textové sdělení nebo je můžete použít samostatně. Důležité je zajistit, aby význam použité ikony byl pro uživatele zřejmý. Používejte ikony s rozmyslem tak, aby byla zajištěna jasnost sdělení.

## Systémové ikony
Systémové ikony symbolizují běžné akce, příkazy, soubory, zařízení. Jejich cílem je snížit množství textu na stránce a usnadnění orientace pomocí vizuálního jazyka. Stejná ikona by na jedné stránce neměla sloužit k více různým akcím.

<IconList/>

### Další zdroje ikon

Pokud nenajdete v seznamu vhodnou ikonu, lze využít standardizované sety ikon, např.:

- [Material design](https://material.io/tools/icons/?style=baseline 'Externí odkaz na Material design')
- [Bootstrap Icons](https://icons.getbootstrap.com/ 'Externí odkaz na Bootstrap Icons')
- [Remix Icon](https://remixicon.com/ 'Externí odkaz na Remix Icon')

Pokud ani zde nenajdete vhodnou ikonu doporučujeme specifický set ikon vytvořit na míru webu podle níže uvedené specifikace.

### Základní specifikace pro tvorbu ikon

Ikonou reprezentujte spíš věc než osobu *(např. ikonu svatby reprezentují prstýnky ne postavy novomanželů).*

### Velikosti
Velikosti ikon by měly být konzistentní na celém webu. Doporučené velikosti: 16 px, 20 px, 24 px, 32 px.

## Pro vývojáře

V rámci nabízených komponent je k dispozici i komponenta [gov-icon](/komponenty/dokumentace/gov-icon), která načítá a zobrazuje externí SVG soubory.

Atribut `type` definuje název složky *(poslední složka z konfigurace `iconPath` v [konfiguraci](/zaciname/for-developers) design systému)* a atribut `name` *(název souboru bez přípony)*, která se v dané složce nachází.
