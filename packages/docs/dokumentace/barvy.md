---
title: Barvy
---
Při používání všech barevných palet je vždy nutné dbát na dostatečný kontrast barev z důvodu přístupnosti a čitelnosti a to hlavně v textových částech (odstavce, tlačítka, textové menu apod.).

<script setup>
import { primaryColors, secondaryColors, warningColors, errorColors, successColors, neutralColors } from "../../core/src/data/color-definitions.js";
import ColorList from '../.vitepress/theme/components/parts/ColorList.vue'
</script>

Styly barev definují, jak se v návrhu používají barvy.


## Primary
Primární paleta barev je tvořena odstíny modré barvy **Primary 600 (#2362A2)**, která je rovněž základní barvou této palety. Primární barva je využívaná ve všech akčních prvcích grafiky jako jsou tlačítka, odkazy či ikony. Zároveň je to hlavní komunikační barva gov.cz. 
<gov-spacer size="m"></gov-spacer>
<ColorList :colors="primaryColors" />

## Secondary

Sekundární paleta barev je tvořena odstíny šedé barvy **Secondary 600 (#A8A8A8)**, která je rovněž základní barvou této palety. Sekundární paleta je doplňková sada barev avšak její primární použití je v textech. Nejsvětlejší odstíny palety jsou pak využívány na pozadí webu. Jejich střídání se dá využít pro oddělení jednotlivých bloků informací.
<gov-spacer size="m"></gov-spacer>
<ColorList :colors="secondaryColors" />

## Success

Barevná paleta je tvořena odstíny základní zelené barvy **Success 400 (#6FBD2C)**. Je to doplňková paleta používaná primárně pro pozitivní stavy, tlačítka či informace. Použita může být však i pro prvky, které nemusí být spojené s pozitivním obsahem (barevné odlišení kategorií, čipů, stavů apod.).
<gov-spacer size="m"></gov-spacer>
<ColorList :colors="successColors" />

## Warning

Barevná paleta je tvořena odstíny základní žluté barvy **Warning 400 (#F9C13C)**. Je to doplňková paleta používaná primárně pro stavy upozornění, tlačítka či informace. Použita může být však i pro prvky, které nemusí být spojené s upozorněním (barevné odlišení kategorií, čipů, stavů apod.)
<gov-spacer size="m"></gov-spacer>
<ColorList :colors="warningColors" />

## Error

Barevná paleta je tvořena odstíny základní červené barvy **Error 400 (#C52A3A)**. Je to doplňková paleta používaná primárně pro negativní stavy, tlačítka či informace. Použita může být však i pro prvky, které nemusí být negativního charakteru (barevné odlišení kategorií, čipů, stavů apod.)
<gov-spacer size="m"></gov-spacer>
<ColorList :colors="errorColors" />

## Neutral

Neutrální paleta je tvořena pouze základní černou a bílou barvou. Užití je možné tam, kde je to zrovna potřebné, případně tam kde nelze použít žádnou z výše zmíněnych barev.
<gov-spacer size="m"></gov-spacer>
<ColorList :colors="neutralColors" />
