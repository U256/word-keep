<script setup lang="ts">
const model = defineModel({ // v-model="model"
	required: true,
	default: 0,
	type: Number,
})
const title = defineModel('title', { // v-model:title="modelTitle"
	type: String,
	required: true,
})

function update() {
	model.value++
}
</script>

<template>
	<div class="nested">
		<p>"defineModel" Nested:</p>
		<div>
			<p>primitive state: {{ model }}</p>
			<button class="act" type="button" @click="update">increment</button>
			<button class="act" type="button" @click="model--">decrement</button>
		</div>
		<div>
			<label for="title-inp">
				title:
				<input type="text" id="title-inp" v-model="title" />
			</label>
		</div>
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
