<script setup lang="ts">
import CompositionStyle from '../components/CompositionStyle.vue'
import OptionsStyle from '../components/OptionsStyle.vue'
</script>

<template>
	<main>
		<CompositionStyle />
		<OptionsStyle />
	</main>
</template>

<style>
body {
	background-color: var(--c-bg);
	color: var(--c-content);
}
</style>
