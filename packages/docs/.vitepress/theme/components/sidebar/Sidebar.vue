<script setup lang="ts">
import {useSidebar} from "vitepress/theme"
import SidebarItem from "./SidebarItem.vue"
import {useAppSidebar} from "./sidebar"

const {sidebarGroups} = useSidebar()
const {isOpen, toggle} = useAppSidebar()
</script>

<template>
  <div role="button" @click="toggle" class="sidebar-backdrop duration-200 transition-opacity ease-in"
       :aria-hidden="isOpen ? 'false' : 'true'"
       :hidden="!isOpen"
       aria-label="Zavřít navigaci"
       aria-haspopup="true"
       aria-controls="side-navigation"
       :aria-expanded="isOpen"
       :class="[isOpen ? 'right-0 opacity-40' : undefined]"></div>
  <aside
      id="side-navigation"
      class="
		fixed duration-200 transition-all ease-in top-[68px] bottom-0 -left-72 block w-72 h-[calc(100vh-68px)] z-200 p-4 bg-neutral-white overflow-hidden
		[ md:-ml-10 ]
		[ lg:relative lg:top-auto lg:bottom-auto lg:left-auto lg:w-auto lg:h-auto lg:z-auto lg:ml-0 lg:p-0 lg:bg-transparent ]"
      :class="[isOpen ? '!left-0' : undefined]">
    <nav class="h-full overflow-y-auto pb-8 mb-16 ">
      <ul v-for="item in sidebarGroups" :key="item.text" class="main-nav !mb-0 gov-list--plain">
        <SidebarItem :item="item" :depth="0"/>
      </ul>
    </nav>
  </aside>
</template>
