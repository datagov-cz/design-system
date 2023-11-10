---
title: Nápověda
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `tooltip`<br>

Tooltip nebo-li nápověda je stručná informace, která je připojena k určitému prvku *(např. ikoně, symbolu, textu apod.)*
. Zobrazuje se ve chvíli, kdy uživatel najede myší nebo klávesnicí na daný prvek. Důležitým aspektem tooltipu je, že jej
spouští uživatel. Bez tohoto aspektu, bychom hovořili o komponentě [zpráva](/komponenty/zprava), která informaci zobrazuje permanentně.

Na dotykových obrazovkách se kvůli charakteru ovládání nápověda nepoužívá a je nahrazovaná např. vyskakovacími tipy *(popup tips)*.

<div class="sample-content">
    <gov-tooltip variant="primary" size="m" position="top" message="Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.">
        Tooltip
    </gov-tooltip>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-tooltip--docs"
    documentationUrl="/komponenty/dokumentace/gov-tooltip" />

## Použití

1. **Nepoužívejte nápovědu pro informace, které jsou zásadní pro dokončení úkolu.**<br>
   Nápověda se používá pro doplňující vysvětlení daného pole formuláře či textu, které uživatelé neznají, případně jako
   zdůvodnění toho, co se může zdát jako neobvyklý požadavek.

2. **Nápověda obsahuje pouze stručný a užitečný obsah.**<br>
   Přidejte nápovědu pouze, pokud máte k dispozici užitečný obsah, jindy ne, protože nadbytečnými informacemi snižujete
   celkovou srozumitelnost textu.

3. **Do nápovědy lze vložit odkaz.**<br>
   Nápověda se zobrazuje najetím na označený prvek. Pokud na daný prvek kliknete, dojde k zafixování okna s nápovědou.
   Díky tomu je možné do textace nápovědy vkládat odkazy, případně textaci zkopírovat.

4. **Dbejte na to, aby nápověda byla přístupná i pomocí klávesnice.**<br>
   Pro zachování přístupnosti je nezbytné, aby nápověda byla ovladatelná i pomocí klávesnice. Myslete na ostatní, kteří
   jsou limitovaní v používání myši, případně se dostanou do situace, kdy není možné ji použít.

5. **Používejte vodítka, ke kterému prvku se nápověda váže.**<br>
   Vyhnete se tak nedorozumění v případě, pokud je více prvků u sebe a nápověda se zobrazuje u všech.

6. **Nepoužívejte nápovědu u prvku, který se již ovládá akcí uživatele.**<br>
   Pokud máte prvek např. akordeon, který se při kliknutí rozbaluje, nevkládejte do jeho nadpisu nápovědu. Dojde ke
   kolizi v ovládání prvků.

7. **Dodržujte konzistentnost používání nápovědy na celém webu.**<br>
   Pokud se rozhodnete poskytovat nápovědu u daného typu prvků, dodržujte tuto praxi na celém webu.

## Doporučení

- Zvažte používání nápovědy u všech ikon, vyhnete se tak významové nejednoznačnosti zobrazovaného symbolu.
- Ujistěte se, že nápověda má dostatečný kontrast vůči pozadí.
- Umístěte nápovědu tak, aby neblokovala související obsah.

<client-only>
   <gov-message variant="primary">
      <p><strong>TIP</strong><br/>Až budete zvažovat, jestli je vhodné použít komponentu nápovědy, vždy se zeptejte: <i>"Jsou informace v nápovědě
nezbytné pro uživatele k dokončení úkolu?"</i> Pokud ne, tak je nápověda vhodná, pokud ano, přesuňte informace na obrazovku.</p>
      <gov-icon type="basic" name="lightbulb-fill" slot="icon"></gov-icon>
   </gov-message>
</client-only>
