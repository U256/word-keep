<script setup lang="ts">
import ChunkWrapper from '../ChunkWrapper.vue'
import { computed, ref } from 'vue'

const title = ref('Data bind')

// Input control
const manualInp = ref('')
function onInput(e: Event) {
  manualInp.value = (e?.target as HTMLInputElement)?.value ?? ''
}

const vModelInp = ref('')

// Hint
const isHintShown = ref(false)

// TodoBinds
interface Todo { id: number; text: string; done: boolean }
let lastId = 0
let hideCompleted = ref(false)
const newTodo = ref('')
const editTodoID = ref<number | undefined>()
function checkIfPickedTodo(todo: Todo) {
  return todo.id === editTodoID.value
}
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
function submitTodo() {
  if (editTodoID.value !== undefined) {
    const indexOfChanged = todos.value.findIndex(td => td.id === editTodoID.value)
    if (indexOfChanged >= 0) {
      todos.value[indexOfChanged]['text'] = newTodo.value
    }
    editTodoID.value = undefined;
  } else {
    todos.value.push({ id: lastId++, text: newTodo.value, done: false })
  }
  newTodo.value = ''
}
function removeTodo(todo: Todo) {
  todos.value = todos.value.filter(t => t !== todo)
}
function editTodo(todo: Todo) {
  editTodoID.value = todo.id;
  newTodo.value = todo.text;
}
</script>

<template>
  <ChunkWrapper :title class="data-bind">
    <div>
      <input type="text" :value="manualInp" @input="onInput" placeholder=":value + @input">
      <p>{{ manualInp || '...' }}</p>

      <br>

      <input type="text" v-model="vModelInp" placeholder="v-model auto bind">
      <p>{{ vModelInp || '...' }}</p>
    </div>

    <div>
      <label>
        <input type="checkbox" name="aaaa" v-model="isHintShown">
        toggle hint
      </label>

      <div v-if="isHintShown">
        hint on demand!
      </div>
    </div>

    <div>
      <form @submit.prevent="submitTodo">
        <input v-model="newTodo" required placeholder="new todo">
        <button type="submit">{{ editTodoID === undefined ? 'Add Todo' : "Update" }}</button>
      </form>
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done">
          <span :class="{ done: todo.done, active: checkIfPickedTodo(todo) }">{{ todo.text }}</span>
          <button @click="editTodo(todo)" style="transform: rotate(90deg)">
            <span style="font-size: 0.8em">&#9999;</span>
          </button>
          <button @click="removeTodo(todo)">x</button>
        </li>
      </ul>
      <button type="button" @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
    </div>
  </ChunkWrapper>
</template>

<style scoped>
.data-bind>div {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.3em;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--c-bg);
  }
}

ul {
  list-style-type: none;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

li {
  display: flex;
  align-items: center;
  gap: 6px;

  & button {
    line-height: 1;
    height: 1.4em;
    width: 1.4em;
  }

  .done {
    text-decoration: line-through;
  }

  .active {
    color: var(--c-accent)
  }
}
</style>
