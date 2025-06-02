<script setup lang="ts">
import ExpandableBlock from '@/shared/ExpandableBlock.vue'
import { parseError, type ParsedError } from '@/shared/helpers/errorHelpers'
import { ref, watch } from 'vue'

const title = ref('Api handling')

const todoId = ref(0)
const fetching = ref(false)
const error = ref<ParsedError | null>(null)
const todoData = ref(null)
async function fetchData() {
	todoData.value = null
	try {
		fetching.value = true
		error.value = null
		const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
		if (!res.status.toString().startsWith('2')) {
			throw new Error(res.status.toString())
		}
		todoData.value = await res.json()
	} catch (e) {
		error.value = parseError(e)
	} finally {
		fetching.value = false
	}
}

// watch
// 'watch'es with the same source are batched to avoid duplicate invocations
watch(
	todoId,
	async (val, prevVal) => {
		console.log({ val, prevVal })

		await fetchData()
	},
	{
		immediate: false, // call watcher immediately
		once: false,
	},
)

// unwatch is a callback that will stop effect from calling
const unwatch = watch([error, fetching], (arrOfWatched) => {
	console.log(arrOfWatched) // [null, false]
})

// getter style (in this case, getter combines data in object)
watch(
	() => ({ error: error.value, fetching: fetching.value }),
	(ctx) => {
		console.log(ctx) // {error: null, fetching: false}
	},
)
</script>

<template>
	<ExpandableBlock :title>
		<div>
			<p v-if="todoId === 0">Click fetch to request first todo</p>
			<p v-else>Todo id: {{ todoId }}</p>
			<button @click="todoId--">fetch prev todo</button>
			<button @click="todoId++">fetch next todo</button>
			<p v-if="fetching">loading...</p>
			<p v-else-if="error">{{ error.code }} {{ error.message }}</p>
			<p v-else-if="!todoData">click to fetch todo</p>
			<!-- v-else must immediately follow a v-if -->
			<pre v-else>{{ todoData }}</pre>
		</div>
	</ExpandableBlock>
</template>

<style scoped></style>
