<script setup lang="ts">
import { reactive, ref } from 'vue'
import ExpandableBlock from '@/views/Sandbox/SandboxExpandableBlock.vue'
import TheText from '@/shared/TheText.vue'

const title = ref('Composition api title')
const blockAttributes = reactive({
	'data-test': 'composition-block',
	'aria-label': 'composition-block',
})

interface Todo {
	id: number
	text: string
	done: boolean
}
let lastId = 0
const todos = ref<Todo[]>([
	{ id: lastId++, text: 'Learn HTML', done: false },
	{ id: lastId++, text: 'Learn JavaScript', done: false },
	{ id: lastId++, text: 'Learn Vue', done: false },
])

const GLOBALS_ALLOWED = [
	/* ONLY this globals are accessible in {{ binding }} */
	Infinity,
	undefined,
	NaN,
	isFinite,
	isNaN,
	parseFloat,
	parseInt,
	decodeURI,
	decodeURIComponent,
	encodeURI,
	encodeURIComponent,
	Math,
	Number,
	Date,
	Array,
	Object,
	Boolean,
	String,
	RegExp,
	Map,
	Set,
	JSON,
	Intl,
	BigInt,
	console,
	Error,
]
</script>

<template>
	<!-- for {} attributes is v-bind="obj"; v-bind:id is for one "key" - id -->
	<ExpandableBlock
		:title
		v-bind="blockAttributes"
		class="will-be-merged-with-inner-class"
		:name="'CompositionStyle'"
	>
		<!-- #beforeTitle is a shorthand for v-slot:beforeTitle -->
		<template #beforeTitle>
			<TheText :size="'small'" :color="'bright'">content in slot "beforeTitle"</TheText>
		</template>

		<div>
			<p>list index:</p>
			<div v-for="({ id, text }, index) of todos" :key="id">
				<b>{{ text }}</b
				>: {{ index }}{{ index < todos.length - 1 ? ', ' : '' }}
			</div>

			<p>loop by integer:</p>
			<span v-for="n in 10" :key="n">{{ n }}</span>
		</div>
	</ExpandableBlock>
</template>

<style scoped>
div {
	/* border: 1px solid red; */
}
</style>
