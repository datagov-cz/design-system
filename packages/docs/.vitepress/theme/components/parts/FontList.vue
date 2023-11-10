<script setup lang="ts">
import type { PropType } from "vue"

interface TokenFont {
	name: string;
	description: string | null;
	size: string;
	definitions: {
		px: string;
		rem: string;
	};
}

const props = defineProps({
	fonts: Array as PropType<TokenFont[]>,
})

const tokens = [
	'.gov-text--[SIZE]',
	'var(--gov-text-[SIZE]-font-size)',
	'var(--gov-text-[SIZE]-line-height)',
	'var(--gov-text-[SIZE]-font-weight)',
	'var(--gov-text-[SIZE]-letter-spacing)',
];
</script>

<template>
	<table class="w-full">
		<thead>
			<tr>
				<th>Ukázka</th>
				<th>Popis</th>
				<th>Token</th>
			</tr>
		</thead>
		<tbody>
			<template v-for="font in props.fonts">
				<tr>
					<td>
						<div class="flex flex-col gap-2 items-start">
							<div :class="'gov-text--' + font.size">Aa</div>
							<code class="text-s">
								{{ font.definitions.rem }}
							</code>
							<code class="text-s">
								{{ font.definitions.px }}
							</code>
						</div>
					</td>
					<td class="w-[300px] min-w-[300px]">
						<p class="text-m">
							Font Size: {{ font.name }}
						</p>
						<template v-if="font.description">
							<p class="text-s">{{ font.description }}</p>
						</template>
					</td>
					<td>
						<div class="flex flex-col gap-2 items-start">
							<template v-for="token in tokens">
								<code class="text-s">
									{{ token.replace('[SIZE]', font.size) }}
								</code>
							</template>
						</div>
					</td>
				</tr>
			</template>
		</tbody>
	</table>
</template>
