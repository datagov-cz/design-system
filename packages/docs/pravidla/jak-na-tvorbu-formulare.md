---
title: Jak na tvorbu formuláře
---

## Použití
Formulář použijte, pokud potřebujete získat od uživatelů nějaké informace. Při navrhování formuláře je důležité myslet na jeho strukturu.

### Složení formulářů
**Formulářové komponenty**

Formulář se může skládat z následujících komponent:
1. Označení *(Label)* – krátké označení, které by mělo vyjadřovat, jaké informace se mají do pole vyplnit. Zarovnáváme doleva.
2. Pole pro vyplnění *(Field)* – místo, kam uživatelé vkládají text, nebo kde provádějí výběr.
3. Zástupný text *(Placeholder text)* – dává informaci, jak by pole mělo být používáno *(např. “Začněte psát”)*. Používejte pouze tam, kde je třeba objasnění, snažte se jej nepoužívat nadměrně.
4. Nápověda *(Help text)* – poskytuje pomoc při vyplňování pole. Text nápovědy je nepovinný.
5. Akce *(Action)* – umožňuje uživatelům odeslat formulář.
6. Validace *(Validation)* – zajišťuje, aby údaje odeslané uživatelem odpovídaly přijatelným parametrům.

<img src="/_media/showcase/form_schema.png" alt="Doprovodný obrázek - schéma formuláře" style="max-width: 600px" />

## Logika výběrových formulářových komponent
**[Vypínač (Toggle)](/komponenty/vypinac)** lze použít pro jednu možnost, kterou může uživatel zapnout nebo vypnout.

**[Přepínač (Radio button)](/komponenty/prepinac)** se používá v případě dvou nebo více možností, které se navzájem vylučují a uživatel musí zvolit pouze jednu volbu. Jinými slovy, klepnutím na nevybraný přepínač zrušíte volbu libovolného jiného dříve vybraného přepínače *(vybrané volby)*.

**[Zaškrtávací pole (Checkbox)](/komponenty/zaskrtavaci-pole)** se používá v případě jedné *(např. Souhlas se zpracováním osobních údajů)* nebo více možností a uživatel může vybrat libovolný počet možností, včetně nuly, jedné nebo několika. Jinými slovy, každé zaškrtávací pole je nezávislé na všech ostatních zaškrtávacích polích v seznamu, takže zaškrtnutím jednoho pole se nezruší ostatní zaškrtnuté.

U polí, ve kterých je požadován jediný výběr a existuje mnoho možností, je vhodné použít **[Rozbalovací seznam (Select box)](/komponenty/rozbalovaci-seznam)**.

<img src="/_media/showcase/schema_inputy.png" alt="Doprovodný obrázek - schéma formulářových prvků" style="max-width: 600px" />

## Obecná pravidla pro tvorbu formulářů
### Udržte formulář krátký
Při navrhování formulářů buďte co nejpřísnější. Přemýšlejte u každého pole jakou hodnotu údaje přinesou - co získáte shromažďováním daných informací?

- Formulář maximálně zjednodušte – ať obsahuje co nejméně polí
- V případě potřeby rozdělte formulář do více kroků
- Při strukturování formuláře zvažte jeho kontext – pokud spolu informace souvisí, je možné jich na stránku umístit víc
- Jednotlivé kroky formuláře musí vždy obsahovat související informace – kroky pojmenujte srozumitelně tak, aby z názvu bylo patrné, co je jejich obsahem

### Povinná a nepovinná pole
- Požadujte po uživatelích pouze ty údaje, které jsou bezprostředně potřebné pro spuštění služby
- Pro nepovinné údaje je potřeba tyto pole označit jako nepovinné *(nepovinný údaj)*
- Povinná pole se neoznačují hvězdičkou

### Začněte tím, že se zeptáte
- Je to pro nás cenné?
- Je to tak cenná informace, že pokud ji uživatel neposkytne, je nutné mu zabránit v pokračování?

### Označení pole *(Label)*
Každé formulářové pole má přiřazené výstižné označení.
- Označení je umístěno ideálně nad daným polem, případně nalevo od pole *(zarovnané na levý prapor)*
- Označení je krátké, srozumitelné a výstižné
- Dvojtečka za označení pole nepatří
- Označení neumisťujte dovnitř pole, jakmile uživatel začne psát, označení zmizí, což je pro snadné vyplňování matoucí

### Nápověda *(Help text)*
Text nápovědy je relevantní informace, která pomáhá uživateli při vyplňování pole
- Používejte vždy tam, kde lze předpokládat komplikace s vyplněním pole
- Vyhněte se nadměrnému užívání u jednoznačných údajů *(např. jméno, příjmení, ulice, atp.)*
- Textem v nápovědě musí být jednoznačně sděleno, co konkrétně má uživatel v daném poli vyplnit nebo zvolit, případně k čemu tento údaj slouží (např. u pole pro heslo uveďte: “minimálně 6 znaků, jedno velké písmeno, jedno číslo”)

### Zástupný text *(Placeholder text)*
Zástupný text je text, který zmizí poté, co uživatel začne psát/vkládat údaje do textového pole. Používejte pouze tam, kde je třeba objasnění, snažte se jej nepoužívat nadměrně.
- Neměl by obsahovat zásadní informace o tom, jaká data má uživatel vyplnit
- V případě, že jde o zásadní informace pro vyplnění, nabízí se použití nápovědy
- Piště jako přímý příkaz bez interpunkce *(např. “Začněte psát”)*

## Chyby a validace
### Validace
Vyplněné údaje ověřujte průběžně, ještě před odesláním samotného formuláře, pro uživatele je těžké zorientovat se na stránce, pokud se vyskytlo více chyb současně

### Přehled o chybách
- Zobrazujte v horní části stránky tak, aby byl viditelný, když se stránka aktualizuje a ihned jej dokázala přečíst pomocná zařízení
- Přidejte nadpis, který uživatele na chybu/y upozorní
- V přehledu použijte odkaz, který povede na každé pole, kde byla zaznamenána chyba

### Chybové hlášky
- Pište tak, aby uživatel pochopil, proč se chyba vyskytla a jak ji má odstranit
- Vkládejte do prvku `<label>` k dané položce
- Zobrazujte pod vyplňovaným polem

### Zvýraznění chyb
Pro zvýraznění chybové hlášky použijte červenou barvu

## Odeslání formuláře
Na tlačítku pro odeslání formuláře použijte textaci, která jasně říká, co se s formulářem stane *(např. “Odeslat”, “Přihlásit” atp.)*.
Podívejte se na popis komponenty [Tlačítko](/komponenty/tlacitko).
