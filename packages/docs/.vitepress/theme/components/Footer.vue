<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<template>
  <footer class="py-12 mt-12 bg-secondary-800 text-secondary-500"  v-external-link>
    <section class="gov-container">
      <div class="flex justify-between">
        <ul class="gov-list--plain flex flex-col gap-10 pl-4 pr-4 [ lg:flex-row lg:gap-12 ]">
          <li>
            <h5 class="mb-4 text-xl">Informace</h5>
            <ul class="gov-list--plain flex flex-col gap-2">
              <li><a href="https://portal.gov.cz/tiraz/osobni-udaje-a-cookies" target="_blank"
                     class="gov-link inline-flex items-center gap-1 h-10 text-s !text-secondary-500">Zpracování
                osobních údajů a cookies</a>
              </li>
              <li><a href="https://portal.gov.cz/tiraz/prohlaseni-o-pristupnosti" target="_blank"
                     class="gov-link text-neutral-white inline-flex items-center gap-1 h-10 text-s !text-secondary-500">Prohlášení
                o přístupnosti</a></li>
            </ul>
          </li>
          <li>
            <h5 class="mb-4 text-xl">Máte dotaz? Napište nám</h5>
            <ul class="gov-list--plain flex flex-col gap-2">
              <li><a href="mailto:design@dia.gov.cz" target="_blank"
                     class="gov-link inline-flex items-center gap-1 h-10 text-s !text-secondary-500">design@dia.gov.cz</a>
              </li>
            </ul>
          </li>
          <li>
            <h5 class="mb-4 text-xl">Sledujte Český eGovernment</h5>
            <ul class="gov-list--plain flex flex-col gap-2">
              <li><a href="https://twitter.com/design_gov_cz"
                     target="_blank" rel="nofollow"
                     class="inline-flex items-center gap-1 h-10 text-s">
                <gov-icon
                    name="x-network" class="text-secondary-500 w-6"/>
              </a>
              </li>
            </ul>
          </li>
        </ul>
        <client-only>
          <gov-button @gov-click="scrollToTop" variant="secondary" type="outlined" inverse wcag-label="Na začátek stránky">
            <gov-icon name="chevron-up" slot="left-icon"/>
          </gov-button>
        </client-only>
      </div>
      <div
          class="flex flex-col gap-6 pt-6 mt-4 border-t border-secondary-500 [ md:flex-row md:justify-between md:items-center ]">
        <p class="text-xs text-secondary-500">
          &copy; 2023 Digitální a informační agentura. Toto dílo je licencováno pod <a
            href="https://joinup.ec.europa.eu/sites/default/files/custom-page/attachment/eupl_v1.2_cs.pdf"
            target="_blank" class="gov-link text-secondary-500">licencí EUPL v
          1.2  <gov-icon type="basic" name="box-arrow-up-right" class="w-3"></gov-icon></a><br/>Informace jsou poskytovány v souladu se zákonem č. 106/1999 Sb., o svobodném přístupu k
          informacím.
        </p>
        <span class="text-xs">Verze 4.0</span>
      </div>
    </section>
  </footer>
</template>
