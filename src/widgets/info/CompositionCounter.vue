<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import ExpandableBlock from '@/shared/ExpandableBlock.vue'

const title = ref('Counter')

const count = ref(0)
async function increment(e: Event) {
	// console.log(e);
	count.value++
	// console.log(document.querySelector('.mult')?.textContent) // 0
	await nextTick() /* To wait for the DOM update to complete after a state change */
	// console.log(document.querySelector('.mult')?.textContent) // 2
}
function multiply(val: number) {
	return val * 2
}

// Hint
const isHintShown = ref(false)

const attrName = ref<'data-name' | 'data-lastname'>('data-name')
watch(count, () => {
	attrName.value = count.value % 2 === 0 ? 'data-name' : 'data-lastname'
})
</script>

<template>
	<ExpandableBlock :title class="chunk" content-class="composition-counter">
		<div :title="multiply(count).toString()">
			value: <b>{{ count }}</b> calling <code>multiply</code> function in binding:
			<b class="mult">{{ multiply(count) }}</b>
		</div>

		<div :[attrName]="count">
			<button @click="increment">increment</button>

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
	</ExpandableBlock>
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
</style>
