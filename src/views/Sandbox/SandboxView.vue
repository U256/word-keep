<script setup lang="ts">
import Counter from './CompositionCounter.vue'
import TodoList from './TodoList.vue'
import BasicForm from './BasicForm.vue'
import RefsAndLifecycle from './RefsAndLifecycle.vue'
import Styling from './CompositionStyling.vue'
import ApiHandling from './CompositionApiHandling.vue'
import CompositionStyle from './CompositionStyle.vue'
import CoundownBlock from './CoundownBlock.vue'

import OptionsStyle from './OptionsStyle.vue'

</script>

<template>
	<main>
		<!-- TODO: $attrs to nested child -->
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
