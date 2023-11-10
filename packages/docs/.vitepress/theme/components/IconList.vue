<script setup lang="ts">
import { basicIcons, complexIcons } from "../../../../core/src/components/gov-icon/list.js"
</script>

<template>
	<h3>Komplexní</h3>
	<ul class="gov-list--plain flex flex-wrap gap-6">
		<template v-for="icon in complexIcons">
			<li class="flex flex-col items-center gap-4 w-[140px] bg-secondary-100 p-4 rounded hover:bg-secondary-300">
				<gov-icon :type="icon.split('/')[0]" :name="icon.split('/')[1]"></gov-icon>
				<span class="text-s text-center">{{ icon.split("/")[1] }}</span>
			</li>
		</template>
	</ul>
	<h3>Základní</h3>
	<ul class="gov-list--plain flex flex-wrap gap-6">
		<template v-for="icon in basicIcons">
			<li class="flex flex-col items-center gap-4 w-[140px] bg-secondary-100 p-4 rounded hover:bg-secondary-300">
				<gov-icon :type="icon.split('/')[0]" :name="icon.split('/')[1]"></gov-icon>
				<span class="text-s text-center">{{ icon.split("/")[1] }}</span>
			</li>
		</template>
	</ul>
</template>
