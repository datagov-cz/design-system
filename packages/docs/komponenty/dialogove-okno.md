---
title: Dialogové okno
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue';
import { ref, onMounted } from "vue";

const displayModal = ref(false);
</script>

angl. `modal`<br>

Je typem modálního okna, které se zobrazuje před obsahem aplikace a poskytuje důležité informace.

<gov-button 
    @gov-click="displayModal = true" 
    variant="primary" 
    size="m" 
    type="solid" 
    wcag-label="Open dialog box for more information" 
    class="sample-content pt-0 pb-4">
    Zobrazit dialogové okno
</gov-button>
<gov-modal label="Design systém gov.cz" wcag-close-label="Close dialog box with more information" :open="displayModal" @gov-close="displayModal = false">
    <p>Mauris metus. Fusce suscipit libero eget elit. Duis pulvinar. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem </p>
</gov-modal>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-modal--docs"
    documentationUrl="/komponenty/dokumentace/gov-modal" />

## Použití

Dialogová okna jsou v principu rušivá, proto je potřeba je používat střídmě a pouze pro krátké a přímé dialogy s
uživatelem, které zahrnují podstatné informace a akce.

### Vhodným použitím dialogového okna je např.

- Potvrzení nenávratné akce pomocí vzájemně se vylučujících tlačítek, typicky dvou či tří, jen vzácně vícero. Např:
  Opravdu si přejete tento soubor smazat?
- Vhodné pro průvodce / wizarda, který vysvětlí problematiku krok za krokem. Složitější proces se rozloží do
  samostatných kratších kroků.
- Pro poskytnutí rozšířených informací při využití rozcestníku dlaždic.

<figure>
  <img src="/_media/showcase/tile.png" width="290" alt="Doprovodný obrázek - zobrazení dlaždice webu k vyvolání modálního okna" />
  <figcaption>Dlaždice funguje jako rozcestník mezi službami.</figcaption>
</figure>

<figure>
  <img src="/_media/showcase/modal.png" width="500" alt="Doprovodný obrázek - náhled modálního okna" />
  <figcaption>Po kliknutí na dlaždici se zobrazí dialogové okno s rozšířenou informací.</figcaption>
</figure>

## Zobrazení

Při zobrazení dialogového okna dochází k deaktivaci všech funkcí aplikace, aby pozornost uživatele byla soustředěna
pouze na dialogové okno. Tato deaktivace ostatních funkcí aplikace je graficky podpořena zašednutím či ztlumením
okolního prostoru pro větší fokus na dialogové okno.

## Dialogovému oknu se vyhněte, když:

- Se jedná o systémově nenaléhavé informace *(např. přihlášení k newsletteru, vyplnění názoru na webové stránky apod.)*.
- Je potřeba komplexního rozhodování a prostor dialogového okna by nenabídl dostatek informací k akci.
- Hrozí přerušení důležitých procesů, např. platby.  


