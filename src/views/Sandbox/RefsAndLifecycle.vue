<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import ExpandableBlock from '@/shared/ExpandableBlock.vue'

const title = ref('RefsAndLifecycle')
const text = ref('')
const dynamicArgumentAttr = ref('aria-label')

// node refs
const pElementRef = ref<HTMLDivElement | null>(null)
onBeforeMount(() => {
	// no DOM nodes have been created yet
	// console.log('right before mount')
})
onMounted(() => {
	// component is now mounted.
	// console.log('mounted', JSON.stringify(pElementRef.value)) // mounted {}
	if (typeof pElementRef.value?.textContent === 'string')
		pElementRef.value.textContent = 'This content set directly by .textContent'
})
onBeforeUpdate(() => {
	// safe place to modify state
	console.log('called right before update')
})
onUpdated(() => {
	console.log('updated')
})
onUnmounted(() => {
	// right place to unmount listenters
	console.log('unmounted')
})

// TODO: error catching (onErrorCaptured) and onRenderTracked
</script>

<template>
	<ExpandableBlock :title>
		<p :[dynamicArgumentAttr]="'value for dynamic attr'">Paragraph with ref aria-label</p>

		<div>
			<p ref="pElementRef">hello</p>
		</div>
		<input type="text" v-model="text" />
	</ExpandableBlock>
</template>

<style scoped></style>
