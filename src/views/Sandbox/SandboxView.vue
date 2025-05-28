<script setup lang="ts">
import { ref } from 'vue'

import Counter from './CompositionCounter.vue'
import DataBind from './CompositionDataBind.vue'
import RefsAndLifecycle from './RefsAndLifecycle.vue'
import Styling from './CompositionStyling.vue'
import ApiHandling from './CompositionApiHandling.vue'
import CompositionStyle from './CompositionStyle.vue'

import OptionsStyle from './OptionsStyle.vue'

const rawHtml = ref(
	'<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue</a> ',
)

const isShown1 = ref(false)
</script>

<template>
	<main>
		<!-- TODO: Countdown -->
		<!-- TODO: $attrs to nested child -->

		<Counter />
		<DataBind />
		<RefsAndLifecycle />
		<Styling />
		<ApiHandling />
		<CompositionStyle />

		<OptionsStyle />

		<template v-if="isShown1">
			<p>By "template" it's possible to conditionally render</p>
			<p>more than 1 tag</p>
		</template>

		<span>{{ rawHtml }}</span>
		<br />
		<span v-html="rawHtml"></span>
	</main>
</template>
