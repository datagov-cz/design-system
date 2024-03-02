# Design systém gov.cz pro potřeby data.gov.cz
Toto není [oficiální repozitář pro Design systém Gov.cz](https://code.gov.cz/gov-cz/gov-design-system).
Pro více informací prosím navštivte [oficiální dokumentaci](https://designsystem.gov.cz/).

# Lokální sestavení a vývojářský mód
Nejprve je třeba nainstalovat balíčky.
```shell
npm ci
```
Následně je možné si vybrat jeden z dalších příkazů.
Příkazy spouští přímo [nx](https://nx.dev/), který je použitý pro správu toho repositáře.

## Spuštěná vývojového módu
```shell
npx nx run core:serve
```

## Sestavení
```shell
npx nx run core:build
```
