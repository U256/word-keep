<script setup lang="ts">
import { useDebouncedValue, useThrottledValue } from '@/shared/composables/useDebounce'
import { ref, watchEffect } from 'vue'
// import CompositionStyle from '@/widgets/CompositionStyle.vue'
const [debounced, , instant] = useDebouncedValue('', 300)
const [throttled, , inst] = useThrottledValue('', 1000)
watchEffect(() => {
	inst.value = instant.value
})

const rawHtml = ref(
	'<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue</a> ',
)

const isShown1 = ref(false)
</script>

<template>
	<main>
		<div>
			<input type="text" name="" v-model="instant" />
			<br />
			<p>debounced: {{ debounced }}</p>
			<p>throttled: {{ throttled }}</p>
		</div>

		<template v-if="isShown1">
			<p>By "template" it's possible to conditionally render</p>
			<p>more than 1 tag</p>
		</template>

		<span>{{ rawHtml }}</span>
		<br />
		<span v-html="rawHtml"></span>
	</main>
</template>

<style scoped></style>
