---
title: Responzivní webdesign
---
Návod pro tvorbu webů a webových aplikací tak, aby se jejich obsah správně zobrazoval na všech zařízeních.

## Úvod
V této části design systému jsou vysvětleny základní principy a návody, které je potřeba dodržovat pro vytvoření responzivního webu nebo webové aplikace.

### Co je responzivní webdesign?
Tato kapitola, se týká samotné realizace. Ujistěte se, že jste prošli všechny fáze, které vývoji předchází. Jedním z přístupu, který se problematice věnuje je [Human-centred design](https://www.designkit.org/ 'Externí odkaz na Human-centred design').

Responzivní webdesign (RWD) je přístup k vývoji webů a webových aplikací, který zohledňuje zařízení, na kterém je web nebo webová aplikace zobrazována. Díky tomuto přístupu je zaručené, že se bude web nebo webová aplikace zobrazovat správně na malých telefonech i na velkém stolním počítači.

Pro dosažení takového cíle je potřeba dodržování pravidel již od prvotních návrhů.

### Mobile first přístup
Jde o přístup, který říká, že návrh pro mobilní zařízení, který je nejtěžší, má být zpracován jako první. V procesu návrhu pro malá zařízení se objeví mnoho designových otázek a výzev. Pokud si všechny vzniklé otázky zodpovíte a vyřešíte výzvy, bude pro vás snazší vytvářet design pro další zařízení.

<img src="/_media/showcase/Mobile_first.png" width="500" alt="Doprovodný obrázek - mobile first">

#### Prioritizace obsahu
Důležité je, že mobile first přístup je přístupem založeným na obsahu. Na mobilním zařízení je nejvíce omezení. Mezi taková omezení patří velikost obrazovky, případně velikost kontejneru.

Obsah je nejdůležitější částí webu nebo webové aplikace. To je to, proč uživatelé navštíví web nebo použijí webovou aplikaci. Vzhledem k omezení, která mají malé obrazovky, je nutné obsah prioritizovat. Toto je skvělá příležitost, jak určit a umístit do popředí ten nejdůležitější obsah.

<img src="/_media/showcase/Content_prioritizing.png" width="500" alt="Doprovodný obrázek - prioritizace obsahu">

Návštěvník na mobilním zařízení může mít jinou potřebu, než návštěvník, který si web nebo webovou aplikaci zobrazuje doma na stolním počítači. Důležitý je celkový kontext, ve kterém se uživatel nachází. Proto, než začnete designovat pro různá zařízení, je potřeba definovat [uživatelské scénáře](https://kisk.phil.muni.cz/100metod/uzivatelsky-scenar 'Externí odkaz na uživatelské scénáře').

Myslet na uživatele mobilních zařízení, neznamená odstranění informací. Znamená to třídění informací na primární, sekundární a terciární obsah.

#### Proces navrhování s přístupem Mobile first
Ve chvíli, kdy znáte všechny uživatelské potřeby, můžete přejít k samotnému návrhu. Níže najdete pár tipů, jak na samotný návrh. Nejde o kompletní seznam, ale o ukázku toho, na co si dát při navrhování pozor.

1. **Inventura obsahu** – Tabulka nebo jiný, vhodný dokument, obsahující seznam stránek a komponent.
2. **Vizuální hierarchie** – Jednotlivé komponenty seřadíte na stránce dle jejich důležitosti (např. primární a sekundární [tlačítka](/komponenty/tlacitko)).
3. **Začněte navrhovat pro nejmenší obrazovky** – Navrhněte drátěný model pro nejmenší obrazovku (např. 320 px) a podle mřížky postupně obsah přizpůsobujte větším obrazovkám.
4. **Vizuální hierarchie** – Prsty jsou širší než kurzor myši, proto potřebují větší prvky, na které lze tapnout (kliknout). Interaktivní elementy musí být velké minimálně 1 cm x 1 cm.
5. **Absence** `:hover` – Na zařízeních, kde používáme kurzor myši, lze při návrhu počítat s vizuální změnou (např. změna barvy) po najetí kurzoru na aktivní element. Tento efekt u dotykových zařízení není. I bez tohoto efektu, musí být jasně vidět, že jde o aktivní prvek.
6. **Přemýšlejte jako byste navrhovali mobilní aplikaci** – Mobilní uživatelé používají gesta. Jde o zcela jiný pohyb, než je na stolním počítači. Jiným způsobem funguje i samotné menu. Přemýšlejte o rozbalitelných komponentách (např. [akordeon](/komponenty/akordeon).)
7. **Vyhněte se velkým grafikám a fotografiím** – Fotografie na šířku a složitá grafika se nezobrazují dobře.
8. **Testujte návrh na reálném zařízení** – Odstupte od stolního počítače a zobrazte si návrh na skutečném telefonu nebo tabletu. Jedině tak bude návrh dobrý na mobilních zařízeních. Toto umožní prototypovací nástroje, nebo nástroje pro testování v prohlížeči.

#### Navrhování drátěného modelu
V první fázi navrhování použijte tužku a papír. Iterujte k finální verzi, kterou chcete převést do digitální podoby.

Pro vytvoření drátěného modelu (wireframe) v digitální podobě lze využít mnoho dostupných nástrojů, např. Figma, Sketch, Adobe XD apod.

Ve vybraném nástroji si nastavte jako vychozí obrazovku mobilní zařízení s velikostí 320px (odpovídá typu zařízení Extra small). Toto rozlišení vychází z použité mřížky.

Jakmile je návrh pro nejmenší obrazovku hotov, můžete začít návrh přizpůsobovat větším typům zařízení.

#### Obrazovka mobilního telefonu

<img src="/_media/showcase/Mobile_view.png" width="500" alt="Doprovodný obrázek - mobilní zobrazení">

Výchozí obrazovka drátěného modelu. Mobile first přístup vás nutí přemýšlet, co uživatel opravdu potřebuje. Na obrazovku se vejde jen to nejnutnější. Je potřeba prioritizovat. Priority zásadně vychází z potřeb uživatele.

#### Obrazovka tabletu

<img src="/_media/showcase/Tablet_view.png" width="500" alt="Doprovodný obrázek - zobrazení na tabletu">

Jakmile je navržena obrazovka mobilního telefonu, lze přistoupit k návrhu pro tablet. Zde je možné přidávat další obsah dle priorit. Protože je více místa, může být rozhodování, co do rozhraní tabletu přidat, těžší než v případě mobilního telefonu.

#### Obrazovka stolního počítače

<img src="/_media/showcase/Desktop_view.png" width="500" alt="Doprovodný obrázek">

Nakonec přichází obrazovka stolního počítače. Na domovské stránce můžete zobrazovat všechny informace, které vaši uživatelé považují za důležité.
