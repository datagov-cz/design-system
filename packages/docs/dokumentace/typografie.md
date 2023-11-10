---
title: Typografie
---
<script setup>
import { fonts } from "../../core/src/data/font-definitions.js";
import FontList from '../.vitepress/theme/components/parts/FontList.vue'
</script>
Pravidla pro použití textových prvků

## Řez písma
V rámci webů a aplikací MV jsou použité následující řezy písma **Roboto**

- Roboto Thin
- Roboto Light
- Roboto Regular
- Roboto Medium
- Roboto Bold

## Použití písma
Použité velikosti písma vychází z následující stupnice. Základní velikost písma `1rem` odpovídá `16px`.

<FontList :fonts="fonts"/>
<br>

**Doporučení:** Pokud je pozadím písma fotka, musí být dostatečně ztmavená, aby splňovala požadavky na kontrast. Tzn., že fotka musí mít na sobě alespoň 75% vrstvu černé, aby byl na ní kontrast písma dostatečný a splňoval směrnici o přístupnosti webového obsahu WCAG 2.1.