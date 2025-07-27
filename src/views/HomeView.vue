<script setup lang="ts">
import { useDebouncedValue, useThrottledValue } from '@/shared/composables/useDebounce'
import { ref, watchEffect } from 'vue'
const [debounced, , instant] = useDebouncedValue('', 300)
const [throttled, , inst] = useThrottledValue('', 1000)
watchEffect(() => {
	inst.value = instant.value
})

const rawHtml = ref(
	'<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue</a> ',
)

const isShown1 = ref(false)

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

		<div class="v-html">
			html in mustache: <span>{{ rawHtml }}</span>
			<br />
			v-html directive: <span v-html="rawHtml"></span>
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
</style>
