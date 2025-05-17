<script setup lang="ts">
// defineProps({
//   title: String
// })
defineProps<{
	title?: string
}>()
</script>

<template>
	<div class="wrapper">
		<!-- $attrs.class is a way to explicitly define where to pass an external class -->
		<slot name="beforeTitle"></slot>
		<h2 v-if="title">{{ title }}</h2>
		<slot>fallback content</slot>
	</div>
</template>

<style scoped>
.wrapper {
	display: grid;
	gap: 1em;
	padding: 1.3em;
	margin: 0.7em 0;
	border: 1px solid rgba(128, 128, 128, 0.2);
	border-radius: 0.3em;
	background: var(--c-bg-section);
}
</style>
