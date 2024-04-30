<script setup lang="ts">
import { reactive, ref } from 'vue'
const title = ref`Composition api title`

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


interface Todo { id: number; text: string; }
let lastId = 0
const newTodo = ref('')
const todos = ref<Todo[]>([
  { id: lastId++, text: 'Learn HTML' },
  { id: lastId++, text: 'Learn JavaScript' },
  { id: lastId++, text: 'Learn Vue' }
])
function addTodo() {
  todos.value.push({ id: lastId++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter(t => t !== todo)
}
</script>

<template>
  <main class="wrapper">
    <p>{{ title }}</p>
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
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
          <button @click="removeTodo(todo)">x</button>
        </li>
      </ul>
    </div>
  </main>
</template>


<style scoped>
.wrapper {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 5px;
}
</style>