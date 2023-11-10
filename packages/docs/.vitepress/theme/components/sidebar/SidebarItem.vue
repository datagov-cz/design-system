<script setup lang="ts">
import { computed } from "vue"
import type { DefaultTheme } from "vitepress/theme"
import { useSidebarControl } from "./sidebar"

const props = defineProps<{
	item: DefaultTheme.SidebarItem
	depth: number
}>()

const {
	collapsed,
	collapsible,
	isLink,
	isActiveLink,
	hasActiveLink,
	hasChildren,
	toggle,
} = useSidebarControl(computed(() => props.item))

const sectionTag = computed(() => (hasChildren.value ? "section" : `div`))

const linkTag = computed(() => (isLink.value ? "a" : "div"))

const textTag = computed(() => {
	return !hasChildren.value
		? "p"
		: props.depth + 2 === 7
			? "p"
			: `h${props.depth + 2}`
})

const itemRole = computed(() => (isLink.value ? undefined : "button"))

const classes = computed(() => [
	[`level-${props.depth}`],
	{ collapsible: collapsible.value },
	{ collapsed: collapsed.value },
	{ "is-link": isLink.value },
	{ "is-active": isActiveLink.value },
	{ "has-active": hasActiveLink.value },
])

function onItemInteraction(e: MouseEvent | Event) {
	if ("key" in e && e.key !== "Enter") {
		return
	}
	!props.item.link && toggle()
}

function onCaretClick() {
	props.item.link && toggle()
}
</script>

<template>
	<li class="!mb-0">
		<component :is="sectionTag" :class="classes">
			<div
				v-if="item.text"
				class="flex justify-between items-center gap-3 [ focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus-base focus-visible:outline-offset-1 focus-visible:rounded ]"
				:role="itemRole"
				v-on="
			item.items
			? { click: onItemInteraction, keydown: onItemInteraction }
			: {}
		"
				:tabindex="item.items && 0"
			>

				<a
					v-if="item.link"
					:tag="linkTag"
					class="block w-full h-full p-2 no-underline [ hover:bg-primary-200 ]"
					:href="item.link"
					:rel="item.rel"
					:target="item.target"
				>
          <template v-if="depth === 2">
            <p class="text-s flex flex-row gap-2 items-center">
              <gov-icon type="basic" name="chevron-right" class="w-3 h-3" ></gov-icon>
              {{item.text}}
            </p>
          </template>
          <template v-else>
            <component :is="textTag" class="text-s" v-html="item.text" />
          </template>
				</a>
				<component v-else :is="textTag" class="text-m" v-html="item.text" />

				<div
					v-if="item.collapsed != null"
					role="button"
					aria-label="toggle section"
					@click="onCaretClick"
					@keydown.enter="onCaretClick"
				>
					<gov-icon type="basic" name="chevron-down" class="w-4 h-4 grow-0 shrink-0 icon-right transition-transform" ></gov-icon>
				</div>
			</div>

			<ul v-if="item.items && item.items.length" class="!mb-0 gov-list--plain bg-neutral-white">
				<template v-if="depth < 5">
					<SidebarItem
						v-for="i in item.items"
						:key="i.text"
						:item="i"
						:depth="depth + 1"
					/>
				</template>
			</ul>
		</component>
	</li>
</template>
