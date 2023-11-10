<script setup lang="ts">
import type { PropType } from "vue"

export interface TokenColor {
	name: string;
	description: string | null;
	hex: string;
	tokens: string[];
}

const props = defineProps({
	colors: Array as PropType<TokenColor[]>,
})
</script>

<template>
	<table class="w-full">
		<thead>
			<tr>
				<th>Ukázka</th>
				<th>Název</th>
				<th>Token</th>
			</tr>
		</thead>
		<tbody>
			<template v-for="(color, i) in props.colors">
				<tr>
					<td class="w-[160px]">
						<div>
							<div class="w-full h-16 rounded" :style={backgroundColor:color.hex}></div>
							<code class="bg-transparent">
								{{ color.hex }}
							</code>
						</div>
					</td>
					<td>
						<p>{{ color.name }}</p>
						<template v-if="color.description">
							<p class="notes">{{ color.description }}</p>
						</template>
					</td>
					<td>
						<div class="flex flex-col gap-2 items-start">
							<template v-for="token in color.tokens">
								<code>
									{{ token }}
								</code>
							</template>
						</div>
					</td>
				</tr>
			</template>
		</tbody>
	</table>
</template>
