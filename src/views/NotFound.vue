<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
	<main>
		<h1>Page Not Found</h1>
		<p>Sorry, the page you are looking for does not exist.</p>
		<p>Go back to <router-link to="/">Home</router-link>.</p>

		<p>
			go back to previous page
			<button type="button" @click.prevent="$router.back()">Go back</button>
		</p>
	</main>
</template>
