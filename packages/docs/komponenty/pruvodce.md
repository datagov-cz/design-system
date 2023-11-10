---
title: Průvodce
---

<script setup>
import DocumentationLinks from '../.vitepress/theme/components/DocumentationLinks.vue'
</script>

angl. `wizard`<br>
Slouží k zjednodušení složitého procesu do jednotlivých kroků při vyplňování formuláře nebo vyřízení služby. 

<div class="sample-content p-6 gov-bg--secondary-200">
    <gov-wizard size="m" wcag-label="Aid application procedure">
        <gov-wizard-item variant="primary" label="Legislation" prefix="1" collapsible="true">
            <p>Mauris metus. Fusce suscipit libero eget elit. Duis pulvinar. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Aenean id metus id velit ullamcorper pulvinar. Donec vitae arcu. Nunc dapibus tortor vel mi dapibus sollicitudin. Cras elementum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Quisque tincidunt scelerisque libero. Etiam dictum tincidunt diam. Maecenas lorem. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis viverra diam non justo. Sed convallis magna eu sem. Nulla pulvinar eleifend sem. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam erat volutpat. Sed ac dolor sit amet purus malesuada congue.</p>
            <span slot="prefix">1</span>
        </gov-wizard-item>
        <gov-wizard-item variant="error" label="Appeal options" prefix="2" collapsible="true">
            <p>Mauris metus. Fusce suscipit libero eget elit. Duis pulvinar. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Aenean id metus id velit ullamcorper pulvinar. Donec vitae arcu. Nunc dapibus tortor vel mi dapibus sollicitudin. Cras elementum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Quisque tincidunt scelerisque libero. Etiam dictum tincidunt diam. Maecenas lorem. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis viverra diam non justo. Sed convallis magna eu sem. Nulla pulvinar eleifend sem. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam erat volutpat. Sed ac dolor sit amet purus malesuada congue.</p>
            <span slot="prefix">2</span>
        </gov-wizard-item>
        <gov-wizard-item variant="success" label="Negotiating language" prefix="3" collapsible="true">
            <p>Nulla non lectus sed nisl molestie malesuada. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nunc tincidunt ante vitae massa. Nam sed tellus id magna elementum tincidunt.</p><span slot="prefix">3</span></gov-wizard-item><gov-wizard-item variant="warning" label="Options for processing your application at a nearby office" prefix="4" collapsible="true"><p><strong>Lorem ipsum</strong> (zkráceně <strong>lipsum</strong>) je označení pro standardní pseudolatinský text užívaný v grafickém designu a navrhování jako <strong>demonstrativní výplňový text</strong> při vytváření <strong>pracovních ukázek grafických návrhů</strong> (např. <strong>internetových stránek</strong>, rozvržení časopisů či všech druhů <strong>reklamních materiálů</strong>). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.</p>
            <span slot="prefix">4</span>
        </gov-wizard-item>
    </gov-wizard>
</div>

<DocumentationLinks
    storybookUrl="/storybook/?path=/docs/components-wizard--docs"
    documentationUrl="/komponenty/dokumentace/gov-wizard" />

## Použití

Průvodce je komponenta, která uživatele provede jednotlivými kroky v předepsaném pořadí k dosažení výsledků dané služby. Využívá se k členění formuláře do kratších úseků. Dochází tak ke **zjednodušení složitého procesu**, jednotlivé kroky obsahují méně polí a celkově i méně informací, zároveň poskytnuté informace v předchozím kroku můžou ovlivnit kroky následující. 

Díky rozčlenění a vyšší jednoduchosti jednotlivých kroků se **snižuje kognitivní zátěž** při vyplňování formuláře. Uživatelé jsou méně zahlcení a zaměřují se pouze na to podstatné. **Snižuje se tím chybovost**, a zároveň se **zvyšuje rychlost vyplňování**.


## Doporučení

- Používejte průvodce všude, kde je **velký počet polí a hrozí zahlcení uživatele informacemi**. 

- **Používejte průvodce pro nové uživatele nebo méně časté procesy**. V zásadě používejte průvodce v situacích, kdy uživatelé pravděpodobně nebudou s procesem obeznámeni, buď proto, že nemají mnoho odborných znalostí nebo proto, že budou procházet procesem zřídka. 

- Dejte uživateli vždy jasnou informaci, **v jakém kroku se nachází a kolik kroků ho ještě čeká**.

- **Dodržujte posloupnost kroků**, kdy uživatelům nedovolíte vybrat další krok před dokončením předchozích kroků. 
