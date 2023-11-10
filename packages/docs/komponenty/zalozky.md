---
title: Záložky
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `tabs`<br>
Slouží k rychlé navigaci mezi obsahem ve stejném kontextu.

<div class="sample-content">
    <client-only>
        <gov-tabs wcag-label="Basic information about the gov.cz design system">
            <gov-tabs-item label="Legislation">
                <p>Sed ac dolor sit amet purus malesuada congue.</p>
            </gov-tabs-item>
            <gov-tabs-item label="Appeal options">
                <p>Duis pulvinar. In dapibus augue non sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis. Aliquam ornare wisi eu metus. Maecenas libero. Praesent id justo in neque elementum ultrices. Integer lacinia. Suspendisse nisl. Etiam egestas wisi a erat.</p>
            </gov-tabs-item>
            <gov-tabs-item label="Negotiating language">
                <p>Mauris metus. Fusce suscipit libero eget elit. Duis pulvinar. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Aenean id metus id velit ullamcorper pulvinar. Donec vitae arcu. Nunc dapibus tortor vel mi dapibus sollicitudin. Cras elementum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Quisque tincidunt scelerisque libero. Etiam dictum tincidunt diam. Maecenas lorem. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis viverra diam non justo. Sed convallis magna eu sem. Nulla pulvinar eleifend sem. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam erat volutpat. Sed ac dolor sit amet purus malesuada congue.</p>
            </gov-tabs-item>
            <gov-tabs-item label="Options for processing your application at a nearby office">
                <p>Nulla non lectus sed nisl molestie malesuada. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nunc tincidunt ante vitae massa. Nam sed tellus id magna elementum tincidunt.</p>
            </gov-tabs-item>
        </gov-tabs>
    </client-only>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-tabs--docs"
    documentationUrl="/komponenty/dokumentace/gov-tabs" />

## Použití

Záložky použijte v případě, že potřebujete zobrazit větší množství obsahu na malém místě. Zároveň veškerý obsah
neschovávejte do záložek. Takto schovaný obsah může uživatel přehlédnout. Pokud se o obsahu jednotlivých záložek mají
dozvědět i vyhledávače, musí mít každá záložka svou vlastní url.

## Označení záložek

Každá záložka má své označení, které:

- jasně popisuje, co je obsahem záložky
- je stručné *(maximálně 1–2 slova)*
- neobsahuje ikony

## Počet záložek maximálně

Zobrazujte 2–6 záložek. Tento počet je pevně stanoven, aby se udrželo nepoškozené uživatelské rozhraní a snížila se
kognitivní zátěž uživatele. Nepoužívejte pro případ pouze jedné záložky.

## Pořadí záložek

Záložky s podobným obsahem seskupujte vedle sebe.
