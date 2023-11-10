---
title: Seznam změn
---

## v4.0.0

Vylepšená verze design systému nyní představuje webové komponenty, které lze snadno začlenit do různých
frontendových frameworků. Její nové zpracování nenavazuje na předchozí verze a není s nimi kompatibilní. 

Tímto krokem se nám podařilo výrazně zdokonalit možnosti integrace a vytvořit nástroj, který je mnohem univerzálnější a
přizpůsobitelnější pro vaše projektové potřeby.

## v3.4.0

### Novinky

- Přidání nové komponenty [Pruh statistik](/komponenty/pruh-statistik).
- Přidání nové komponenty [Nápověda](/komponenty/napoveda).
- Přidání klasických variant formulářových
  prvků [Textové pole](/komponenty/textove-pole), [Rozbalovací seznam](/komponenty/rozbalovaci-seznam).
- Rozšíření formulářových prvků o oznámení stavu validní hodnoty.
- Nové klasické a komplexní ikony.

### Změny

- Přepracování komponenty **Boční menu** do tříúrovňové navigace.
- Upravení přístupnosti komponent.
- Srovnání velikostí komponent do 8px stupnice.

## v3.3.0

### Novinky

- Přidání nové komponenty **Cookie lišta**.

### Opravy

- Opravení chování komponenty [Rozbalovací seznam](/komponenty/rozbalovaci-seznam) při změně hodnoty na výchozí.

## v3.2.0

### Novinky

- Přidání nové komponenty **Boční menu**.

### Rozšíření

- Přidání nových velikostí pro [Akordeon](/komponenty/akordeon), konkrétně `.gov-accordion--large`
  a `.gov-accordion--small`. Původní akordeon je nyní roven velikosti `large`.
- Přidána podpora ikon pro komponentu [Akordeon](/komponenty/akordeon).

### Změny

- Nahrazení komponent [Výběr data](/komponenty/vyber-data) a [Výběr času](/komponenty/vyber-casu) nativní podporou
  prohlížečů.
- Oddělení komponent určených pro Portál veřejné správy.
- Změna inicializace JavaScript komponent na specifické třídy s prefixem `gov-js` určené pouze pro navázání
  funkcionality.

Pro udržení dosavadní funkcionality je zapotřebí rozšířit definice komponent následovně:

| Původní definice               | Nová definice                                        | 
|--------------------------------|------------------------------------------------------|
| `[class="gov-sortable-table"]` | `[class="gov-sortable-table gov-js-sortable-table"]` | 
| `[class="gov-fileinput"]`      | `[class="gov-fileinput gov-js-fileinput"]`           | 
| `[class="gov-select"]`         | `[class="gov-select gov-js-select"]`                 | 
| `[class="gov-tabs"]`           | `[class="gov-tabs gov-js-tabs"]`                     | 
| `[class="gov-accordion"]`      | `[class="gov-accordion gov-js-accordion"]`           | 
| `[class="gov-calendar"]`       | `[class="gov-calendar gov-js-calendar"]`             | 
| `input, textarea`              | `[class="gov-js-input"]`                             |

## v3.1.2

### Opravy

- Oprava komponenty **Kalendář**. Chyba ve vykreslování pozic jednotlivých dnů v daném týdnu.

## v3.1.1

- Přidání autoformátu hodnoty pro komponentu [Výběr času](/komponenty/vyber-casu).
- Drobné úpravy stylů na základě Figma stylesheetu.

### Opravy

- Oprava komponenty [Výběr data](/komponenty/vyber-data). Při změně měsíce docházelo k zavírání celého kalendáře.
- Opravení chování komponenty [Rozbalovací seznam](/komponenty/rozbalovaci-seznam) při předvybrané možnosti.

## v3.1.0

- Uvedení nové komponenty [Výběr času](/komponenty/vyber-casu).
- Rozšíření komponenty [Rozbalovací seznam](/komponenty/rozbalovaci-seznam) o možnosti vícenásobného výběru.

### Opravy

- Opravena vynucená výchozí hodnota formulářového prvku `<select>`.

## v3.0.1

- U komponenty `gov-lang-switch` byly u `select` elementu nahrazeny třídy `gov-select` a `gov-select--lang` za
  třídu `gov-lang-switch__select`.
- Uvedení nové komponenty **Odznak**.
- Přidána validace formátu pro komponentu [Výběr data](/komponenty/vyber-data) při ručním vkládání.
- Oprava zobrazení komponent **Menu**, [Výběr data](/komponenty/vyber-data)
  a [Rozbalovací seznam](/komponenty/rozbalovaci-seznam).

## v3.0.0

- Kompletní přepracování design systému.

