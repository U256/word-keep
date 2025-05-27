<script setup lang="ts">
import ExpandableBlock from '@/shared/ExpandableBlock.vue'
import FormBase from '@/shared/FormBase.vue'
import { computed, ref, reactive } from 'vue'

const title = ref('Data bind')

// FORM
const manualInput1 = ref('')
function onInput(e: Event) {
	manualInput1.value = (e?.target as HTMLInputElement)?.value ?? ''
}

const vModelInput2 = ref('')
const vModelInput3 = ref('')
const vModelDoneInput4 = ref(false)
const vModelSelectInput4 = ref('')

interface FormT {
	input1: string
	input2: string
	input3: string
	'is-done': boolean
	select: string
}
const model = reactive<FormT>({} as FormT) // useless, type filler
const registerName = (key: keyof FormT) => key

function handleSubmit(data: FormT) {
	console.log('from top: ', data)
}

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
function checkIfPickedTodo(todo: Todo) {
	return todo.id === idOfTodoInEdit.value
}
const todos = ref<Todo[]>([
	{ id: lastId++, text: 'Learn HTML', done: true },
	{ id: lastId++, text: 'Learn JavaScript', done: true },
	{ id: lastId++, text: 'Learn Vue', done: false },
])
const filteredTodos = computed(() => {
	return isCompletedHidden.value ? todos.value.filter((t) => !t.done) : todos.value
})
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
	idOfTodoInEdit.value = todo.id
	newTodo.value = todo.text
}
</script>

<template>
	<ExpandableBlock :title class="data-bind">
		<FormBase @submit="handleSubmit" class="form-1" :model :with-submit="true" :label="`422`">
			<input
				type="text"
				:name="registerName('input1')"
				:value="manualInput1"
				@input="onInput"
				placeholder=":value + @input"
			/>
			<p>{{ manualInput1 || '...' }}</p>

			<!-- with .trim modifier -->
			<input
				type="text"
				:name="registerName('input2')"
				v-model.trim="vModelInput2"
				placeholder="v-model auto bind"
			/>
			<p>{{ vModelInput2 || '...' }}</p>

			<span>Multiline message is:</span>
			<p style="white-space: pre-line">{{ vModelInput3 || '---' }}</p>
			<textarea
				v-model="vModelInput3"
				:name="registerName('input3')"
				placeholder="add multiple lines"
			></textarea>
			<br />
			<br />

			<div>
				<input
					type="checkbox"
					id="checkbox-item-1"
					:name="registerName('is-done')"
					v-model="vModelDoneInput4"
				/>
				<label for="checkbox-item-1">{{ vModelDoneInput4 }}</label>
			</div>
			<br />
			<div>
				<div>Selected: {{ vModelSelectInput4 }}</div>

				<select v-model="vModelSelectInput4" :name="registerName('select')">
					<option disabled value="">Select one</option>
					<option>A</option>
					<option>B</option>
					<option>C</option>
				</select>
			</div>

			<br />
			<button>submit</button>
		</FormBase>

		<div>
			<form @submit.prevent="submitTodo">
				<input v-model="newTodo" required placeholder="new todo" />
				<button type="submit">{{ idOfTodoInEdit === undefined ? 'Add Todo' : 'Update' }}</button>
			</form>
			<ul>
				<li v-for="todo in filteredTodos" :key="todo.id">
					<input type="checkbox" v-model="todo.done" />
					<span :class="{ done: todo.done, active: checkIfPickedTodo(todo) }">{{ todo.text }}</span>
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
.form-1 {
	border: 1px solid gray;
	margin: 0 -4px 16px -4px;
	padding: 9px 4px;
}

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
		color: var(--c-accent);
	}
}
</style>
