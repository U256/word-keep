<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { RouterLink } from 'vue-router'

const route = useRoute()

onBeforeRouteUpdate(async (to, from) => {
	console.log('onBeforeRouteUpdate', to, from)
})
watch(
	() => route.params.id,
	(newId, oldId) => {
		console.log(newId, oldId)
		// react to route changes...
	},
)
</script>

<template>
	<main class="item-page">
		<h1>Item</h1>
		<p>Item ID: {{ $route.params.id }}</p>

		<div class="navigation">
			<RouterLink :to="`/list/${Number($route.params.id) + 1}`">To the next</RouterLink>
			<br />
			<RouterLink to="/list">To the list</RouterLink>
		</div>
	</main>
</template>

<style scoped>
.item-page {
	padding: 1rem;
}
.navigation {
	margin-top: 18px;
}
</style>
