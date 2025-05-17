<script setup lang="ts">
import { ref } from 'vue'
import ChunkWrapper from '@/shared/ChunkWrapper.vue'

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

const GLOBALS_ALLOWED =
	/* ONLY this globals are accessible in {{ binding }} */
	'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
	'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
	'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error'
</script>

<template>
	<ChunkWrapper :title class="will-be-merged-with-inner-class">
		<div>
			<p>list index:</p>
			<div v-for="({ id }, index) of todos" :key="id">
				id <b>{{ id }}</b
				>: {{ index }}{{ index < todos.length - 1 ? ', ' : '' }}
			</div>

			<p>loop by integer:</p>
			<span v-for="n in 10" :key="n">{{ n }}</span>
		</div>
	</ChunkWrapper>
</template>

<style scoped>
/*  */
</style>
