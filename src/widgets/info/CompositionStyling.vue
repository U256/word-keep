<script setup lang="ts">
import { reactive, ref } from 'vue'
import ExpandableBlock from '@/shared/ExpandableBlock.vue'

const title = ref('Styling')

const classObject = reactive({
	'active-1': true,
	'text-danger': false,
}) /* ===>> class="active-1" */

const styleObject = reactive({
	marginRight: '13px',
	color: 'red',
})
const styleObject2 = reactive({
	opacity: 0.7,
})
const classArrTest = ref('active-1')
</script>

<template>
	<ExpandableBlock :title>
		<div>
			<button :style="styleObject">red button</button>

			<div :style="[styleObject, styleObject2, { margin: '10px 0', fontSize: '14px' }]">
				style objects can be merged [in array]
			</div>
		</div>

		<div>
			<div :class="classObject">classObject</div>
			<div :class="[classArrTest]">classArrTest</div>
		</div>

		<p>iteration through object:</p>
		<div v-for="(value, key) in styleObject" :key="`${key}${value}`">
			{{ key }}: <b>{{ value }}</b>
		</div>
	</ExpandableBlock>
</template>

<style scoped></style>
