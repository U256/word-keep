<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import ChunkWrapper from '@/shared/ChunkWrapper.vue'


interface Todo { id: number; text: string; done: boolean }
let lastId = 0
const todos = ref<Todo[]>([
  { id: lastId++, text: 'Learn HTML', done: false },
  { id: lastId++, text: 'Learn JavaScript', done: false },
  { id: lastId++, text: 'Learn Vue', done: false }
])


// watch
const todoId = ref(0)
const todoData = ref(null)
async function fetchData() {
  if (todoId.value === 0) {
    return
  }

  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}
fetchData()
watch(todoId, fetchData)

// props
const title = ref('Composition api title')

// emits
// TODO: 
// emits end

const GLOBALS_ALLOWED = /* ONLY this globals are accessible in {{ binding }} */
  'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
  'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
  'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error'
</script>

<template>
  <ChunkWrapper :title class="will-be-merged-with-inner-class">
    <div>
      <p>list index:</p>
      <div v-for="({ id }, index) of todos" :key="id">
        id <b>{{ id }}</b>:
        {{ index }}{{ index < todos.length - 1 ? ', ' : '' }} </div>


          <p>loop by integer:</p>
          <span v-for="n in 10" :key="n">{{ n }}</span>
      </div>

      <div>
        <p v-if="todoId === 0">Click fetch to request first todo</p>
        <p v-else>Todo id: {{ todoId }}</p>
        <button @click="todoId++">fetch next todo</button>
        <p v-if="!todoData">loading...</p>
        <!-- v-else must immediately follow a v-if -->
        <pre v-else>{{ todoData }}</pre>
      </div>
  </ChunkWrapper>
</template>


<style scoped>
/*  */
</style>