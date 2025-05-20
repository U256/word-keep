<script setup lang="ts">
import { routesConfig } from '@/shared/constants/routes'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const search = computed({
	get() {
		return route.query.search ?? ''
	},
	set(search) {
		router.replace({ query: { search } })
	},
})

function handleSearch() {
	// router.push(`/list/${search.value}`)
	router.push({ name: routesConfig.LIST_ITEM.name, params: { id: search.value.toString() } })
}
</script>

<template>
	<div class="list-page">
		<h1>This is a list page</h1>
		<form @submit.prevent="handleSearch">
			<input type="text" v-model="search" placeholder="Query search" />
		</form>
	</div>
</template>

<style>
@media (min-width: 1024px) {
	.list-page > {
		display: flex;
		align-items: center;
	}
}
</style>
