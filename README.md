# Design systém Gov.cz **3.0.0**

Doporučujeme naklonovat repozitář z [code.gov.cz](https://code.gov.cz/gov-cz/gov-design-system).
```
git clone https://code.gov.cz/gov-cz/gov-design-system.git
```

### Základní struktura repozitáře
```
src
  - css
    - style.scss
    - print.scss
    - ...
  - js
    - scripts.js
    - ...
dist
- build
  - styles.min.css
  - print.min.css
  - scripts.min.js
- assets
  - fonts
  - icons
  - images
```

## Integrace

### Hostování již zkompilovaných souborů 
Ve složce `dist` jsou k dispozici kompletní zkompilované soubory k přímému použití. Stačí potřebné soubory pouze nalinkovat do svého zdrojového kódu.

### Zařazení do vlastního build procesu
Ve složce `src` jsou k dispozici kompletní zdrojová data celého design systému.

#### CSS (SCSS)
Zdrojový kód stylů je psán metodikou [BEM](https://www.vzhurudolu.cz/prirucka/bem) v preprocesorovým jazyce [Sass](https://sass-lang.com/).

Styly je možné jakkoliv rozšiřovat o vlastní komponenty které splňují požadavky samotného design systému. Zásadně **NEDOPORUČUJEME** jakékoliv změny ve zdrojových datech z důvodů následných aktualizací při rozšiřování a oprav chyb.

> Pro správnou funkčnost je zapotřebí definovat následující SCSS proměnné
```sass
$domain: './'; // Absolutní či relativní cesta k assetům.
$versionKey: ''; // Náhodný řetězec či timestamp k invalidaci cache prohlížeče.
```

#### JavaScript
Zdrojové kódy scriptů jsou psány v [ES6](https://www.w3schools.com/js/js_es6.asp) a nejsou závislé na žádných knihovnách třetích stran. Dle povahy vašeho projektu a cílové skupině vyhodnoťte možnou kompilaci do [ES5](https://www.w3schools.com/js/js_es5.asp).

## Základní struktura HTML template

Pro správné zobrazení je nutné dodržovat následující základní strukturu HTML:

```html
<!DOCTYPE html>
<html lang="cs" class="js-no">
<head>
    <title>Titulek stránky</title>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" media="screen" href="/build/styles.min.css">
    <link rel="stylesheet" media="print" href="/build/print.min.css">
</head>
<body>
    <!-- Content -->
    <!-- JS -->
    <script src="/build/scripts.min.js"></script>
</body>
</html>
```

## Podporované prohlížeče

Weby a aplikace MV jsou optimalizovány pro prohlížeče:

- Edge - poslední 3 verze
- Chrom - posledních 10 verzí
- Firefox - posledních 10 verzí
- Safari - poslední 3 verze
- iOS - poslední 3 verze
- Android - verze 6 a novější
