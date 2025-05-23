<script setup lang="ts">
import { ref } from 'vue'
import ExpandableBlock from '@/shared/ExpandableBlock.vue'

const title = ref('Composition api title')

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
	Intl, // TODO: learn
	BigInt,
	console,
	Error,
]
</script>

<template>
	<ExpandableBlock :title class="will-be-merged-with-inner-class">
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
