<script setup lang="ts">
import {useData} from "vitepress"
import Sidebar from "./sidebar/Sidebar.vue"
import Footer from "./Footer.vue"
import Header from "./Header.vue"
import Block from "./Block.vue"
import NotFound from "./NotFound.vue"
import {ref, watch} from "vue"
import {useAppSidebar} from "./sidebar/sidebar"
import Infobar from "./Infobar.vue";

const {close} = useAppSidebar()

if (typeof window !== "undefined") {
  window.GOV_DS_CONFIG = {
    iconsPath: "/assets/icons",
    iconsLazyLoad: false,
  }
  setTimeout(() => {
    document.documentElement.classList.remove('dark')
    document.documentElement.setAttribute('lang', 'cs')
  }, 200)
}

const {page} = useData()
const isComponentDocumentation = ref(false)
watch(page, () => {
      close()
      isComponentDocumentation.value = page.value.relativePath.includes("komponenty/dokumentace")
    },
)
isComponentDocumentation.value = page.value.relativePath.includes("komponenty/dokumentace")
</script>

<template>
  <Header/>
  <template v-if="page.filePath.includes('index')">
    <div class="pt-[68px]">
      <Infobar/>
    </div>
  </template>
  <div class="gov-container min-h-screen" :class="!page.filePath.includes('index') ? 'pt-[68px]': undefined">
    <NotFound v-if="page.isNotFound"/>
    <div class="gov-layout" v-else>
      <div class="gov-layout__section gov-layout__section-aside-left">
        <div class="gov-layout-column !w-64 [ lg:pt-8 ]">
          <Sidebar/>
        </div>
        <div class="gov-layout-column max-w-[902px] [ lg:pt-8 ]">
          <main :class="isComponentDocumentation ? 'gov-content--documentation' : undefined">
            <template v-if="!isComponentDocumentation">
              <h1 class="mb-4 pl-0 pr-0 text-5xl [ md:pl-8 md:pl-8 ]">
                {{ page.title }}
              </h1>
            </template>
            <Block v-responsive-table v-external-link>
              <Content/>
            </Block>
          </main>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>
