<script setup lang="ts">
import { watch, watchEffect } from 'vue'

const props = defineProps<{
	primitive: number
	obj: { a: number }
	reactive: { b: number }

	// можно передать cb так и даже получить преимущество в возможность получить результат или обработать async функцию
	// emits же лучше в сохранении стандартной сигнатуры у родителя, наприм @click, а не :click что странно.
	// Также emit интегрирован с v-model и отображается в devtools
	doSomething: (val: number) => number
}>()

defineEmits({
  // 'update-primitive': null, вообще отключает тип, "что угодно"

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	'update-primitive': (value: number) => true,

	// Events Validation
	submit: (value: number) => {
		const isValid = typeof value === 'number'
		// if not Valid parent will NOT get @submit event
		return isValid
	},
})

watch(
	() => props.primitive, // (Number) 0 - must be passed in () => x
	(val) => {
		console.log('primitive :', val)
	},
)
watchEffect(() => console.log('primitive watchEffect:', props.primitive))

// Proxy(Object) must be passed like this
watch(props.obj, (val) => {
	console.log('obj :', val)
})
watchEffect(() => console.log('obj watchEffect:', props.obj.a)) // props.obj DOES NOT WORK

// Proxy(Object) must be passed like this
watch(props.reactive, (val) => {
	console.log('reactive :', val)
})
watchEffect(() => console.log('reactive watchEffect:', props.reactive.b)) // props.reactive DOES NOT WORK
</script>

<template>
	<div class="nested">
		<p>Nested:</p>
		<div>
			<p>primitive state: {{ props.primitive }}</p>
			<button class="act" type="button" @click="$emit('update-primitive', -1)">
				decrease primitive
			</button>
			<button class="act" type="button" @click="props.doSomething(42)">do something</button>
		</div>
		<p>obj state: {{ props.obj }}</p>
		<p>reactive state: {{ props.reactive }}</p>
	</div>
</template>

<style scoped>
.nested {
	display: grid;
	gap: 14px;
	margin: 8px 0;
	border: 1px solid gray;
	border-radius: 8px;
	padding: 7px 14px;

	& > * {
		display: flex;
		flex-direction: row;
		width: fit-content;
		align-items: center;
		gap: 10px;
	}
}
.act {
	padding: 3px 10px;
}
</style>
