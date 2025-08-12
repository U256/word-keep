<script setup lang="ts">
import { useDebouncedValue, useThrottledValue } from '@/shared/composables/useDebounce'
import FormV from '@/views/Home/FormV.vue'
import FallthroughV from '@/views/Home/FallthroughV.vue'
import SlotsV from '@/views/Home/SlotsV.vue'
import { ref, watchEffect, defineAsyncComponent, defineComponent, h } from 'vue'
const [debounced, , instant] = useDebouncedValue('', 300)
const [throttled, , inst] = useThrottledValue('', 1000)
watchEffect(() => {
	inst.value = instant.value
})

const rawHtml = ref(
	'<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue</a> ',
)

const isShown1 = ref(false)

const isAsyncShown = ref(false)
const AsyncComp = defineAsyncComponent({
	loader: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000))
		return await import('./AsyncV.vue')
	},
	delay: 10, // Delay before showing the loading component. Default: 200ms.
	loadingComponent: defineComponent({
		render: () => h('div', 'Loading...'),
	}),
	// hydrate: hydrateOnVisible({ rootMargin: '100px' })
	// hydrate: hydrateOnMediaQuery('(max-width:500px)')
})

const throwErr = () => {
	// Is there a way to catch error in a component?
	throw new Error('This is a test error')
}
</script>

<template>
	<main>
		<div class="lag">
			<input type="text" name="" v-model="instant" />
			<p>debounced: {{ debounced }}</p>
			<p>throttled: {{ throttled }}</p>
		</div>

		<template v-if="isShown1">
			<p>By "template" it's possible to conditionally render</p>
			<p>more than 1 tag</p>
		</template>

		<button type="button" class="bb" @click="throwErr">throw an error</button>

		<FormV />

		<div class="second">
			<FallthroughV data-label="dataLabel" data-whatever="whatever" />

			<SlotsV>
				<template #afterContent="bProps">before slot _ _ {{ bProps.text }}</template>
				<span>default slot content</span>
			</SlotsV>
			<SlotsV with-counter>
				<template #afterContent="bProps">before slot _ _ {{ bProps.text }}</template>
				<template #default="defaultProps">
					<span>default slot content, bind from children: {{ defaultProps.count }}</span>
				</template>
			</SlotsV>
		</div>

		<div class="v-html">
			html in mustache: <span>{{ rawHtml }}</span>
			<br />
			v-html directive: <span v-html="rawHtml"></span>
		</div>

		<div>
			<p>Async:</p>
			<button type="button" @click="isAsyncShown = true">show!</button>
			<AsyncComp v-if="isAsyncShown" />
		</div>
	</main>
</template>

<style scoped>
.lag {
	width: fit-content;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.bb {
	display: block;
	margin-top: 20px;
	background-color: rgba(155, 53, 53, 0.093);
	padding: 10px;
	border-radius: 5px;
	cursor: pointer;
	color: black;
}
.v-html {
	margin-top: 20px;
	background-color: rgba(53, 155, 53, 0.093);
	padding: 10px;
	border-radius: 5px;
}

.second {
	margin: 20px 0;
}
</style>
