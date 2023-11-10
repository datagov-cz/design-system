# Cookie lišta
angl. `Cookie bar`<br>
Slouží pro získání souhlasu s ukládáním cookies od uživatelů webu. Pokud webová stránka zpracovává jiné než nezbytně nutné údaje pro vlastní fungování, je povinna k tomu získat souhlas uživatele.

## Ukázka
[responsive-view-container]

<!-- tabs:start -->
#### ** Cookie lišta **
[](PATTERN_LAB_PATH/patterns/organisms--04-gov-cookies-gov-cookie-bar/organisms--04-gov-cookies-gov-cookie-bar.rendered.html?iframe ':include :type=iframe width=100% height=350px')
#### ** Nastavení souhlasů **
[](PATTERN_LAB_PATH/patterns/organisms--04-gov-cookies-gov-cookie-modal/organisms--04-gov-cookies-gov-cookie-modal.rendered.html?iframe&revealModal ':include :type=iframe width=100% height=600px')
<!-- tabs:end -->

[/responsive-view-container]
> [Dokumentace k použití cookie lišty je k dispozici zde](PATTERN_LAB_PATH/?p=organisms-gov-cookie-bar ":ignore").

## Použití
Tato lišta je navržena pro použití na spodní části home page webu. Umožňuje uživateli jednoznačně přijmout všechny cookies, odmítnout všechny cookies nebo si vybrat konkrétní skupiny, které chce přijmout. Pro podrobné nastavení cookies navazuje modální okno, kde má uživatel možnost výběru.

## Obecná pravidla
Při implementaci je nutné dbát [zákonu č. 374/2021 Sb.](https://www.zakonyprolidi.cz/cs/2021-374), kterým se mění zákon č. 127/2005 Sb. o elektronických komunikacích. Z této novelizace vyplývá:

- Provozovatel webové stránky je povinen účastníky prokazatelně informovat o rozsahu a účelu zpracování údajů.
- Provozovatel musí umožnit odmítnutí cookies, které nejsou nezbytné pro provozování webu.
- Provozovatel je povinen získat prokazatelný aktivní souhlas uživatele s rozsahem a účelem zpracování cookies.
- Cookie lišta nesmí zakrývat celý web a bránit tak v přístupu na stránku.

## Platforma pro správu souhlasu s cookies
Pro správu souhlasů na vašem webu můžete využít navrženou platformu pro projekty v rámci gov.cz.<br>[Návod na implementaci cookies lišty](dokumentace/komponenty/cookie-bar).
