<script setup lang="ts">
import {
	onBeforeMount,
	onBeforeUpdate,
	onMounted,
	onUnmounted,
	onUpdated,
	ref,
	watchEffect,
	watchPostEffect,
} from 'vue'
import ExpandableBlock from '@/views/Sandbox/SandboxExpandableBlock.vue'
import { useGlobalState } from '@/modules/uiShared/hooks'

const title = ref('RefsAndLifecycle')
const text = ref('')
const dynamicArgumentAttr = ref('aria-label')

const state = useGlobalState()
function log(...args: any[]) {
	if (state.activeAccordion.includes('RefsAndLifecycle')) {
		console.log(...args)
	}
}

// node refs
const pElementRef = ref<HTMLDivElement | null>(null)
onBeforeMount(() => {
	// no DOM nodes have been created yet
	// log('right before mount')
})
onMounted(() => {
	// component is now mounted.
	log('mounted', JSON.stringify(pElementRef.value)) // mounted {}
	if (typeof pElementRef.value?.textContent === 'string')
		pElementRef.value.textContent = 'This content set directly by .textContent'
})
onBeforeUpdate(() => {
	// safe place to modify state
	log('called right before update')
})

const inp = ref<HTMLInputElement | null>(null)
watchEffect(() => {
	// fires immediately
	log('instant value changed:', inp.value?.value)
})

watchPostEffect(() => {
	// analogue to { immediate: true }
	// fires after DOM update
	log('DOM updated with:', inp.value?.value)
})

onUpdated(() => {
	log('updated')
})
onUnmounted(() => {
	// right place to unmount listenters
	log('unmounted')
})

// TODO: error catching (onErrorCaptured) and onRenderTracked
</script>

<template>
	<ExpandableBlock :title :name="'RefsAndLifecycle'">
		<p :[dynamicArgumentAttr]="'value for dynamic attr'">Paragraph with ref aria-label</p>

		<div>
			<p ref="pElementRef">hello</p>
			<br />
			<input type="text" name="test" ref="inp" />
		</div>
		<input type="text" v-model="text" />
	</ExpandableBlock>
</template>

<style scoped></style>
