<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import SandboxExpandableBlock from '@/views/Sandbox/SandboxExpandableBlock.vue'

const title = ref('Counter')

const count = ref(0)
async function increment(e: Event) {
	count.value++
	console.log(document.querySelector('.mult')?.textContent, e) // 0
	await nextTick() /* To wait for the DOM update to complete after a state change */
	console.log(document.querySelector('.mult')?.textContent) // 2
}
function multiply(val: number) {
	return val * 2
}

function addX(x: number) {
	count.value += x
}

// Hint
const isHintShown = ref(false)

const attrName = ref<'data-name' | 'data-lastname'>('data-name')
watch(count, () => {
	attrName.value = count.value % 2 === 0 ? 'data-name' : 'data-lastname'
})
</script>

<template>
	<SandboxExpandableBlock :title class="chunk" content-class="composition-counter" :name="'Counter'">
		<div :title="multiply(count).toString()">
			value: <b>{{ count }}</b> calling <code>multiply</code> function in binding:
			<b class="mult">{{ multiply(count) }}</b>
		</div>

		<div :[attrName]="count" class="btns">
			<button @click="increment" type="button">increment</button>

			<button type="button" @click="addX(3)">add 3</button>
			<button type="button" @click="addX(6)">add 6</button>
			<button type="button" @click="addX(-9)">remove 9</button>

			<!-- using inline js, which will be replaced by eventListener (automatically under the vue's hood) -->
			<button @click="count--">decrement</button>
		</div>

		<div>
			<label>
				<input type="checkbox" name="aaaa" v-model="isHintShown" />
				toggle hint
			</label>

			<div v-if="isHintShown">hint on demand!</div>
		</div>
	</SandboxExpandableBlock>
</template>

<style scoped>
.chunk {
	&:global(.content-inner) {
		display: grid;
		gap: 10px;
	}
}

.composition-counter button {
	margin-right: 0.5em;
	padding: 2px 7px;
	border-radius: 2px;
}

.btns {
	display: flex;
	flex-wrap: wrap;
	gap: 5px;

	& button {
		padding: 3px 10px;
		border-radius: 0.4em;
	}
}
</style>
