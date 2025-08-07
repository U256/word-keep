<script setup lang="ts">
import FormChild from '@/views/Home/FormChild.vue'
import FormModelChild from '@/views/Home/FormModelChild.vue'
import { reactive, ref } from 'vue'

const primitiveState = ref(0)
const objState = ref({ a: 42 })
const reactiveState = reactive({ b: 0 })

// v-model component
const model = ref(0)
const modelTitle = ref('a')
</script>

<template>
	<div class="form">
		<p>form</p>
		<div class="row">
			<p>primitive state: {{ primitiveState }}</p>
			<button type="button" @click="primitiveState++">increase</button>
		</div>
		<div class="row">
			<p>obj state: {{ objState }}</p>
			<button type="button" @click="objState.a++">increase</button>
		</div>
		<div class="row">
			<p>reactive state: {{ reactiveState }}</p>
			<button type="button" @click="reactiveState.b++">increase</button>
		</div>

		<FormChild
      :do-something="(val) => {
        console.log('doSomething called with:', val)
        return val * 2
      }"
			:primitive="primitiveState"
			:obj="objState"
			:reactive="reactiveState"
			@update-primitive="(n) => (primitiveState += n)"
		/>

    <FormModelChild v-model="model" v-model:title="modelTitle" />
	</div>
</template>

<style lang="css" scoped>
.form {
	display: grid;
	gap: 8px;
	margin: 16px 0;
	border: 1px solid gray;
	border-radius: 8px;
	padding: 7px 14px;
}

.row {
	display: flex;
	align-items: center;
	gap: 10px;

	& > button {
		padding: 3px 10px;
	}
}
</style>
