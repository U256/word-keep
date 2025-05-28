<script setup lang="ts">
import { reactive, ref } from 'vue'
import ExpandableBlock from '@/shared/ExpandableBlock.vue'

const title = ref('Styling')

const isActive = ref(false)
const hasError = ref(false)

const classObject = reactive({
	'active-1': isActive.value,
	'text-danger': false,
}) /* ===>> class="active-1" */

const styleObject = reactive({
	marginRight: '13px',
	border: '1px solid gray',
	padding: 8,
})
const styleObject2 = reactive({
	opacity: 0.9,
})
const classArrTest = ref('active-1')
</script>

<template>
	<ExpandableBlock :title class="wrapper1">
		<div class="block">
			<button @click="isActive = !isActive">toggle <b>active</b> to {{ !isActive }}</button>
			<button @click="hasError = !hasError">toggle <b>error</b> to {{ !hasError }}</button>
		</div>

		<div class="block">
			<div :class="classObject">classObject</div>
			<div :class="[classArrTest]">classArrTest</div>
		</div>

		<div class="block" :class="{ accent: isActive, big: hasError }">
			static & dynamic classes mix
		</div>

		<div class="block" :style="[{ margin: '10px 0', fontSize: '14px' }, styleObject2, styleObject]">
			style objects will be merged [in array]
			<br />
			<p>iteration through object:</p>
			<div v-for="(value, key) in styleObject" :key="`${key}${value}`">
				{{ key }}: <b>{{ value }}</b>
			</div>
		</div>
	</ExpandableBlock>
</template>

<!-- <style>
.active-1 {
	color: var(--c-accent);
	font-weight: bold;
	font-size: 22px;
	text-decoration: underline;
}
</style> -->

<style scoped>
.wrapper1 {
	&:global(.content-inner) {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
}
.block {
	display: flex;
	gap: 12px;
}
.accent {
	color: var(--c-accent);
	font-style: italic;
}
.bright {
	color: var(--c-bright);
}
.pale {
	color: var(--c-pale);
}
.big {
	font-size: 22px;
}
</style>
