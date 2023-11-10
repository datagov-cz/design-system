<script setup lang="ts">
import { useAppSidebar } from "./sidebar/sidebar"

const { toggle, isOpen } = useAppSidebar()
</script>

<template>
	<header class="top-0 left-0 w-full z-200 bg-neutral-white border-b border-secondary-500 fixed ">
		<section class="gov-container !flex flex-row justify-between w-full items-center pl-4 pr-4 pt-2.5 pb-2.5 min-h-[60px] [ sm:pt-2.5 sm:pb-2.5 ]">
			<a href="/" class="table no-underline">
				<span class="flex items-center gap-2">
					<img src="/assets/layout/lev.svg" width="48" height="48" alt="" />
					<span class="m-0 text-xl text-primary-600 font-medium">Design systém</span>
					<gov-chip class="relative -top-2" size="xs" variant="success" inverse>4.0</gov-chip>
				</span>
			</a>
			<span class="block [ lg:hidden ]">
				<client-only>
          <gov-button
              variant="primary"
              type="outlined"
              size="l"
              @gov-click="toggle"
              wcag-has-popup="true"
              :wcag-expanded="isOpen"
              wcag-controls="side-navigation"
              :wcag-label="!isOpen ? 'Otevřít navigaci' : 'Zavřít navigaci'">
					<gov-icon type="basic" name="list"></gov-icon>
				</gov-button>
        </client-only>
			</span>
		</section>
	</header>
</template>
