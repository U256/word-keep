<script setup lang="ts">
import { ref } from 'vue'
import Counter from './CompositionCounter.vue'
import TodoList from './TodoList.vue'
import BasicForm from './BasicForm.vue'
import RefsAndLifecycle from './RefsAndLifecycle.vue'
import Styling from './CompositionStyling.vue'
import ApiHandling from './CompositionApiHandling.vue'
import CompositionStyle from './CompositionStyle.vue'
import CoundownBlock from './CoundownBlock.vue'

import OptionsStyle from './OptionsStyle.vue'

const isSplitted = ref(true)
</script>

<template>
	<main :class="['sandbox-view', { splitted: isSplitted }]">
		<button class="toggle" type="button" @click="isSplitted = !isSplitted">
			{{ isSplitted ? 'inline' : 'split' }} view
		</button>
		<!-- TODO: Form with submit btn control, options async load, dynamic validation etc. -->
		<!-- DFS, BFS, BinarySearch, Sliding -->

		<Counter />
		<TodoList />
		<BasicForm />
		<RefsAndLifecycle />
		<Styling />
		<ApiHandling />
		<CoundownBlock />
		<CompositionStyle />

		<OptionsStyle />
	</main>
</template>

<style>
html:has(.sandbox-view) {
	scrollbar-gutter: stable;
}
</style>

<style scoped>
.toggle {
	padding: 8px 16px;
	border-radius: 8px;
	margin: 10px 0;
	width: fit-content;
	align-self: end;
	@media (width <= 1280px) {
		display: none;
	}
}
.splitted .toggle {
	grid-column: 1/3;
	margin-left: auto;
}

.sandbox-view {
	display: flex;
	flex-direction: column;
}
.splitted {
	@media (width > 1280px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 20px;
	}
}
</style>
