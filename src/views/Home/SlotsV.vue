<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  withCounter?: boolean
}>()

const count = ref(0)
</script>

<template>
	<div class="slotter">
		<p>Slots:</p>
		<slot :count="count">fallback content</slot>

    <div v-if="props.withCounter">
      <p>Counter: {{ count }}</p>
      <button @click="count++">Increment</button>
    </div>

		<!-- <slot name="afterContent"></slot> -->
		<div v-if="$slots.afterContent">
			<slot :text="'send this to parent'" name="afterContent"></slot>
		</div>
	</div>
</template>

<style scoped>
.slotter {
	margin-top: 8px;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 8px;
}
</style>
