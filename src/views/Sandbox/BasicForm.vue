<script setup lang="ts">
import ExpandableBlock from '@/views/Sandbox/SandboxExpandableBlock.vue'
import FormBase from '@/shared/FormBase.vue'
import { ref } from 'vue'

const title = ref('Form bind')

const manualInput1 = ref('')
function onInput(e: Event) {
	manualInput1.value = (e?.target as HTMLInputElement)?.value ?? ''
}

const vModelInput2 = ref('')
const vModelInput3 = ref('')
const vModelDoneInput4 = ref(false)
const vModelSelectInput4 = ref('')
const checkedNames = ref([])
const radioName = ref('')
const checkNames = ['Jack', 'John', 'Mike']

interface FormT {
	input1: string
	input2: string
	input3: string
	'is-done': boolean
	select: string
}
const registerName = (key: keyof FormT) => key

function handleSubmit(data: FormT) {
	console.log('from top: ', data)
}
</script>

<template>
	<ExpandableBlock :title class="data-bind" :name="'BasicForm'">
		<FormBase @submit="handleSubmit" class="form-1" :with-submit="true" :label="`422`">
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
			<div>Checked names: {{ checkedNames }}</div>
			<div class="checks">
				<template v-for="checkItem of checkNames" :key="checkItem">
					<label :for="checkItem">
						<input type="checkbox" :id="checkItem" :value="checkItem" v-model="checkedNames" />
						Jack
					</label>
				</template>
			</div>
			<br />
			<div>Radio name: {{ radioName }}</div>
			<div class="checks">
				<template v-for="checkItem of checkNames" :key="checkItem">
					<label :for="`rad-${checkItem}`">
						<input type="radio" :id="`rad-${checkItem}`" :value="checkItem" v-model="radioName" />
						Jack
					</label>
				</template>
			</div>
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

.checks {
	display: flex;
	gap: 20px;
	margin: 6px 0 30px;
}
</style>
