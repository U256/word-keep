<script lang="ts">
import ExpandableBlock from '@/views/Sandbox/SandboxExpandableBlock.vue'

export default {
	components: {
		ExpandableBlock,
	},
	data() {
		return {
			count: 0,
			title: 'Options style title',
		}
	},
	methods: {
		increment() {
			this.count++
		},
	},
	mounted() {
		// ref are not explicitly defined in options API
		;(this.$refs as any).pElementRef.textContent = 'changed via ref text content'
	},
}
</script>

<template>
	<ExpandableBlock :name="'OptionsStyle'" :title="title">
		<p>{{ title }}</p>
		<div>
			<button @click="increment">count is: {{ count }}</button>
		</div>
		<p ref="pElementRef">hello</p>
	</ExpandableBlock>
</template>

<style scoped>
.wrapper {
	padding: 20px;
	margin: 10px 0;
	border: 1px solid rgba(128, 128, 128, 0.2);
	border-radius: 5px;
}
</style>
