import { computed, onMounted, ref, watch, watchEffect, watchPostEffect } from "vue"
import { useMediaQuery } from "@vueuse/core"
import { useData } from "vitepress"
import { HASH_RE, normalize } from "vitepress/dist/client/shared"

export const inBrowser = typeof document !== "undefined"

function isActive(currentPath, matchPath, asRegex = false) {
	if (matchPath === undefined) {
		return false
	}
	currentPath = normalize(`/${currentPath}`)
	if (asRegex) {
		return new RegExp(matchPath).test(currentPath)
	}
	if (normalize(matchPath) !== currentPath) {
		return false
	}
	const hashMatch = matchPath.match(HASH_RE)
	if (hashMatch) {
		return (inBrowser ? location.hash : "") === hashMatch[0]
	}
	return true
}

function hasActiveLink(path, items) {
	if (Array.isArray(items)) {
		return items.some((item) => hasActiveLink(path, item))
	}
	return isActive(path, items.link)
		? true
		: items.items
			? hasActiveLink(path, items.items)
			: false
}

const containsActiveLink = hasActiveLink

export function useSidebarControl(item) {
	const { page } = useData()
	const collapsed = ref(false)
	const collapsible = computed(() => {
		return item.value.collapsed != null
	})
	const isLink = computed(() => {
		return !!item.value.link
	})
	const isActiveLink = ref(false)
	const updateIsActiveLink = () => {
		isActiveLink.value = isActive(page.value.relativePath, item.value.link)
	}
	watch([page, item], updateIsActiveLink)
	onMounted(updateIsActiveLink)
	const hasActiveLink = computed(() => {
		if (isActiveLink.value) {
			return true
		}
		return item.value.items
			? containsActiveLink(page.value.relativePath, item.value.items)
			: false
	})
	const hasChildren = computed(() => {
		return !!(item.value.items && item.value.items.length)
	})
	watchEffect(() => {
		collapsed.value = !!(collapsible.value && item.value.collapsed)
	})
	watchPostEffect(() => {
		;
		(isActiveLink.value || hasActiveLink.value) && (collapsed.value = false)
	})

	function toggle() {
		if (collapsible.value) {
			collapsed.value = !collapsed.value
		}
	}

	return {
		collapsed,
		collapsible,
		isLink,
		isActiveLink,
		hasActiveLink,
		hasChildren,
		toggle,
	}
}
const isOpen = ref(false);

export const useAppSidebar = () => {
	const isAbove1024 = useMediaQuery("(min-width: 1024px)")
	const isSidebarEnabled = computed(() => isAbove1024.value);

	watch(isOpen, (value) => {
		value ? document.body.classList.add('block-scroll') : document.body.classList.remove('block-scroll');
	})

	function open() {
		isOpen.value = true;
	}
	function close() {
		isOpen.value = false;
	}
	function toggle() {
		isOpen.value ? close() : open();
	}

	return { is1024: isAbove1024, isSidebarEnabled, isOpen, open, close, toggle }
}
