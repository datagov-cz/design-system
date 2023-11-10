---
title: Pravidla pro modifikaci design systému
---
Design systém je manuál, podle kterého Digitální a informační agentura navrhuje a vyvíjí weby a digitální produkty. Design systém má pomoci dalším týmům rychleji vytvářet digitální produkty, které budou konzistentní napříč veřejnou správou.

Právě jednotnost v užívání a vzhledu různých digitálních produktů státní správy zjednoduší uživateli orientaci a průchodnost jeho obsahem. Jakmile jednou pochopí strukturu a vizuální styl jednoho z produktů, při návštěvě jiného bude mít již vybudované povědomí a ulehčí mu to orientaci.

Každý produkt, který se chystá dle společného design systému, bude mít specifické požadavky a vlastní výzvy na jeho aplikaci. Počítá se tedy s rozvojem a úpravami design systému podle individuálních požadavků.

Pro zachování konzistence design systému je potřeba dodržet tato pravidla:


## Co se nesmí modifikovat

### Vzhled a funkce existujících komponent design systému
#### Praxe
Zavedenou komponentou je např. `Vypínač (Toggle)`. Jeho velikost a funkčnost je pevně stanovena. Nelze sní libovolně nakládat. Při jeho aplikaci budete vycházet z barevného schématu vašeho produktu.

#### Vypínač
<figure>
  <img src="/_media/showcase/povolena-modifikace-toggle.png?v=2" alt="Výchozí přepínač">
  <figcaption>Výchozí vypínač</figcaption>
</figure>

<figure>
  <img src="/_media/showcase/nepovolena-modifikace-toggle.png?v=2" alt="Nepovolená modifikace přepínače">
  <figcaption>Nepovolená modifikace <přepínače></přepínače></figcaption>
</figure>

### Vztahy mezi barvami se nesmí významně změnit – poměr, kontrast, sytost
#### Praxe
Zavedená barevná škála u primární modré s barvou pozadí: `#f2f2f2` odpovídá kontrastem dle přístupnosti [WCAG 2.1](/pravidla/pristupnost-webovych-stranek), kterou lze ověřit na [colourcontrast.cc](https://colourcontrast.cc).

<figure>
  <img src="/_media/showcase/barevne-schema-design-systemu.png?v=2" alt="Ukázka barevného schématu dle design systému" width="500">
  <figcaption>Barevné schéma dle design systému</figcaption>
</figure>

<br>

#### Nedovolená modifikace

<figure>
  <img src="/_media/showcase/barevne-schema-s-rozlisnymi-odstiny-do-intenzity.png?v=2" alt="Barevné schéma srozlišnými odstíny do intenzity"  width="500">
  <figcaption>Barevné schéma s rozlišnými odstíny do intenzity</figcaption>
</figure>

<figure>
  <img src="/_media/showcase/barevne-schema-neprochazi-kontrolou-kontrastu.png?v=2" alt="Barevné schéma neprochází kontrolou kontrastu písma, primární barvy a pozadí"  width="500">
  <figcaption>Barevné schéma neprochází kontrolou kontrastu písma, primární barvy a pozadí</figcaption>
</figure>

### Nesmí se měnit typografie – font, vzhled
#### Praxe

Závazným fontem jsou řezy písma Roboto:
- Roboto Thin
- Roboto Light
- Roboto Regular
- Roboto Medium
- Roboto Bold

Jiné fonty jsou zakázané. Více k [typografii](/dokumentace/styly/typografie).  

## Co se smí modifikovat
- Smí vzniknout nový nebo odlišný layout. Existující layout a šablony vznikly pro potřeby [Portálu veřejné správy](https://portal.gov.cz/ 'Externí okdaz na Portálu veřejné správy'). Mohou sloužit jako doporučení.
- Primární a odvozené sekundární modré barvy. Můžete použít barvu svého produktu např. zelenou, červenou apod. Musí se dodržet kontrast dle [WCAG 2.1](/pravidla/pristupnost-webovych-stranek.md 'Externí odkaz na WCAG 2.1').

### Praxe
Ukázka modifikovaných barevných schémat z portálů

<figure>
  <img src="/_media/showcase/barevne-schema-cssz.png?v=2" alt="Barevné schéma ČSSZ" width="500">
  <figcaption><a href="https://www.cssz.cz/" target="_blank" title="Externí okdaz na ČSSZ">Česká správa sociálního zabezpečení</a></figcaption>
</figure>

<figure>
  <img src="/_media/showcase/barevne-schema-moje-dane.png?v=2" alt="Barevné schéma Moje daně" width="500">
    <figcaption><a href="https://www.mojedane.cz/" target="_blank" title="Externí odkaz na Moje daně">Moje daně</a></figcaption>
</figure>

## Smí vzniknout nové komponenty dle potřeby. Pokud komponenta v design systému již existuje, musí být použita.

### Praxe
1. Ověřte si v seznamu komponent, zda vaším požadavkům nevyhovuje již existující komponenta.
2. Pokud ne, obraťte se s dotazem na [design@dia.gov.cz](mailto:design@dia.gov.cz). Napište nám, pro jaký účel komponentu potřebujete a pokud máte bližší představu o její podobě a funkčnosti sdělte nám ji také. Rádi vám s návrhem vhodného řešení poradíme. Univerzální komponenty použitelné i pro ostatní projekty do design systému přidáme. Vámi navržené specifické komponenty budou součástí pouze vašeho projektu.

## Smí se upravit velikost fontu v případě potřeby
### Praxe

Nedoporučujeme zmenšovat velikost fontů. Pro většinu textu je navržena velikost fontu `16px` (Body M). Doporučujeme tuto velikost dodržet nebo zvětšit na `18px` (Body L).

## Smí vzniknout nové ikony dle potřeby
### Praxe
1. Ověřte si v seznamu ikon, zda vaším požadavkům nevyhovuje již existující ikona.
2. Pokud vám nestačí ikony navržené v design systému můžete zvolit jinou dostupnou knihovnu ikon, případně navrhnout vlastní set ikon, který bude odpovídat stylu ikon design systému. 

## Aplikace design systému v praxi 
Pro [Portál veřejné správy](https://portal.gov.cz 'Externí odkaz na gov.cz') je k dispozici samostatný Pattern Lab PVS, který slouží jako ukázka aplikace design systému gov.cz na konkrétním projektu. 

Pattern Lab PVS navíc obsahuje vlastní komponenty, které nejsou součástí design systému gov.cz, a byly specificky vytvořené pro tento projekt. 
  
Obdobně při tvorbě vlastního projektu budete využívat pravidel a komponent design systému gov.cz, které obohatíte o individuální řešení layoutu a vlastní komponenty.

Rádi vám pomůžeme s implementací design systému pro váš produkt. V případě dotazů se obraťte na e-mail [design@dia.gov.cz](mailto:design@dia.gov.cz).
