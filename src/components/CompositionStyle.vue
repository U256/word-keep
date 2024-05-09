<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import ChunkWrapper from './ChunkWrapper.vue'

const count = ref(0)
function increment() {
  count.value++
}

const manualInp = ref('')
function onInput(e: InputEvent) {
  manualInp.value = (e?.target as HTMLInputElement)?.value ?? ''
}

const vModelInp = ref('')

const isHintShown = ref(false)


interface Todo { id: number; text: string; done: boolean }
let lastId = 0
let hideCompleted = ref(false)
const newTodo = ref('')
const todos = ref<Todo[]>([
  { id: lastId++, text: 'Learn HTML', done: false },
  { id: lastId++, text: 'Learn JavaScript', done: false },
  { id: lastId++, text: 'Learn Vue', done: false }
])
const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})
function addTodo() {
  todos.value.push({ id: lastId++, text: newTodo.value, done: false })
  newTodo.value = ''
}
function removeTodo(todo: Todo) {
  todos.value = todos.value.filter(t => t !== todo)
}

// node refs
const pElementRef = ref<HTMLDivElement | null>(null)
onMounted(() => {
  // component is now mounted.
  console.log(pElementRef.value);
  pElementRef.value!.textContent = 'hello2'
})

// watch
const todoId = ref(0)
const todoData = ref(null)
async function fetchData() {
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

</script>

<template>
  <ChunkWrapper :title="title">
    <br>
    <div>
      <button @click="increment">count is: {{ count }}</button>
    </div>

    <br>
    <div>
      <input type="text" :value="manualInp" @input="onInput" placeholder=":value + @input">
      <br>
      <p>{{ manualInp || '...' }}</p>
      <br>
      <input type="text" v-model="vModelInp" placeholder="v-model auto bind">
      <br>
      <p>{{ vModelInp || '...' }}</p>
    </div>

    <br>
    <div>
      <label>
        <input type="checkbox" name="aaaa" v-model="isHintShown">
        toggle hint
      </label>

      <div v-if="isHintShown">
        hint on demand!
      </div>
    </div>

    <br>
    <div>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" required placeholder="new todo">
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done">
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button @click="removeTodo(todo)">x</button>
        </li>
      </ul>
      <button type="button" @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
    </div>

    <br>
    <div>
      <p ref="pElementRef">hello</p>
    </div>

    <br>
    <div>
      <p>Todo id: {{ todoId }}</p>
      <button @click="todoId++">fetch next todo</button>
      <p v-if="!todoData">loading...</p>
      <pre v-else>{{ todoData }}</pre>
    </div>

    <br>
    <div>
      <!-- <p>emit:</p> -->
    </div>
  </ChunkWrapper>
</template>


<style scoped>
ul {
  list-style-type: none;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.done {
  text-decoration: line-through;
}
</style>