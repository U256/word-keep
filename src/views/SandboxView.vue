<script setup lang="ts">
import { ref } from 'vue'

import Counter from '@/widgets/info/CompositionCounter.vue'
import DataBind from '@/widgets/info/CompositionDataBind.vue'
import RefsAndLifecycle from '@/widgets/info/RefsAndLifecycle.vue'
import Styling from '@/widgets/info/CompositionStyling.vue'
import ApiHandling from '@/widgets/info/CompositionApiHandling.vue'
import CompositionStyle from '@/widgets/CompositionStyle.vue'

import OptionsStyle from '@/widgets/OptionsStyle.vue'

const rawHtml = ref(
	'<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue</a> ',
)
</script>

<template>
	<main>
		<Counter />
		<DataBind />
		<RefsAndLifecycle />
		<Styling />
		<ApiHandling />
		<CompositionStyle />

		<OptionsStyle />

		<span>{{ rawHtml }}</span>
		<br />
		<span v-html="rawHtml"></span>
	</main>
</template>
