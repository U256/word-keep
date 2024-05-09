<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ColorPicker from '@/components/ColorPicker.vue';
</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
		<ColorPicker />
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/info">Info</RouterLink>
				<RouterLink to="/kit">Kit</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style scoped>
header {
	display: flex;
	place-items: center;
	padding-bottom: 1em;

	& img {
		width: 60px;
		height: auto;
	}
}

.logo {
	display: block;
	margin: 0 0.5em 0 0;
}

nav {
	width: 100%;
	text-align: center;
	flex: 1 0 auto;

}

nav a.router-link-exact-active {
	color: var(--c-bright);

	&:hover {
		background-color: transparent;
	}
}


nav a {
	display: inline-block;
	padding: 0 1rem;
}

nav a:not(:first-of-type) {
	border-left: 1px solid var(--c-accent);
}
</style>
