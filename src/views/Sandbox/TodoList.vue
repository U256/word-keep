<script setup lang="ts">
import ExpandableBlock from '@/views/Sandbox/SandboxExpandableBlock.vue'
import { computed, ref } from 'vue'

const title = ref('TODO list data bind')

// TodoBinds
interface Todo {
	id: number
	text: string
	done: boolean
}
let lastId = 0
let isCompletedHidden = ref(false)
const newTodo = ref('')
const idOfTodoInEdit = ref<number | undefined>()

const todos = ref<Todo[]>([
	{ id: lastId++, text: 'Learn HTML', done: true },
	{ id: lastId++, text: 'Learn JavaScript', done: true },
	{ id: lastId++, text: 'Learn Vue', done: false },
])
const filteredTodos = computed(() => {
	return isCompletedHidden.value ? todos.value.filter((t) => !t.done) : todos.value
})

function checkIfPickedTodo(todo: Todo) {
	return todo.id === idOfTodoInEdit.value
}
function submitTodo() {
	if (idOfTodoInEdit.value !== undefined) {
		const indexOfChanged = todos.value.findIndex((td) => td.id === idOfTodoInEdit.value)
		if (indexOfChanged >= 0) {
			todos.value[indexOfChanged]['text'] = newTodo.value
		}
		idOfTodoInEdit.value = undefined
	} else {
		todos.value.push({ id: lastId++, text: newTodo.value, done: false })
	}
	newTodo.value = ''
}
function removeTodo(todo: Todo) {
	todos.value = todos.value.filter((t) => t !== todo)
}
function editTodo(todo: Todo) {
	const isSelected = idOfTodoInEdit.value === todo.id
	idOfTodoInEdit.value = isSelected ? undefined : todo.id
	newTodo.value = isSelected ? '' : todo.text
}
</script>

<template>
	<ExpandableBlock :title class="data-bind" :name="'TodoList'">
		<div>
			<form @submit.prevent="submitTodo">
				<input v-model="newTodo" required placeholder="new todo" />
				<button type="submit">{{ idOfTodoInEdit === undefined ? 'Add Todo' : 'Update' }}</button>
			</form>
			<ul>
				<li
					v-for="todo in filteredTodos"
					:key="todo.id"
					class="todo"
					:data-selected="checkIfPickedTodo(todo) ? 'true' : undefined"
					:data-done="todo.done"
				>
					<input type="checkbox" v-model="todo.done" />
					<span :class="'text'">{{ todo.text }}</span>
					<button @click="editTodo(todo)" style="transform: rotate(90deg)">
						<span style="font-size: 0.8em">&#9999;</span>
					</button>
					<button @click="removeTodo(todo)">x</button>
				</li>
			</ul>
			<button type="button" @click="isCompletedHidden = !isCompletedHidden">
				{{ isCompletedHidden ? 'Show all' : 'Hide completed' }}
			</button>
		</div>
	</ExpandableBlock>
</template>

<style scoped>
.data-bind > div {
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

.todo {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 4px 12px;
	width: fit-content;

	& button {
		line-height: 1;
		height: 1.4em;
		width: 1.4em;
	}

	&[data-selected='true'] {
		color: var(--c-accent);

		background-color: beige;
	}

	&[data-done='true'] {
		.text {
			text-decoration: line-through;
		}
	}
}
</style>
