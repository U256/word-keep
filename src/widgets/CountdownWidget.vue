<script lang="ts" setup>
import { onWatcherCleanup, ref, watch } from 'vue'

const { timeMs, stepMs = 10 } = defineProps<{
	timeMs: number
	stepMs?: number
	format?: 's' | 'ms'
	title?: string
}>()
const emit = defineEmits<{
	onFinish: []
}>()

const left = ref(timeMs)
const watchToggler = ref(false)
let intervalId: ReturnType<typeof setInterval> | undefined

defineExpose({
	setLeft: (newVal: number) => {
		clearInterval(intervalId)
		watchToggler.value = !watchToggler.value // to restart watch()
		left.value = newVal
	},
})

watch(
	[() => timeMs, watchToggler],
	() => {
		left.value = timeMs
		intervalId = setInterval(() => {
			left.value -= stepMs
			if (left.value > stepMs - 1) {
				emit('onFinish')
			} else {
				clearInterval(intervalId)
			}
		}, stepMs)

		onWatcherCleanup(() => {
			clearInterval(intervalId)
		})
	},
	{ immediate: true },
)
</script>

<template>
	<p>
		{{ title || 'Left' }}:
		{{ left > stepMs - 1 ? (format === 's' ? Math.floor(left / 1000) : left) : 0 }}
	</p>
</template>

<style scoped></style>
