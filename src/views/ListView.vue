<script setup lang="ts">
import { useSearchQuery } from '@/shared/composables/useSearchQuery'
import { routesConfig } from '@/shared/constants/routes'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = useSearchQuery()

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
	.list-page {
		display: flex;
		align-items: center;
	}
}
</style>
