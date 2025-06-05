<script lang="ts" setup>
import { useCountdown, type CountdownConfig } from '@/shared/composables/useCountdown'
import { computed, type UnwrapRef } from 'vue'

const { timeMs, stepMs, format } = defineProps<{
	title?: string
	withoutDefaultControls?: boolean

	timeMs: UnwrapRef<CountdownConfig['timeMs']>
	stepMs?: UnwrapRef<CountdownConfig['stepMs']>
	format?: UnwrapRef<CountdownConfig['format']>
}>()

const emit = defineEmits<{
	onFinish: []
}>()

const { left, setLeft, pause, pauseAvailable, resume, resumeAvailable } = useCountdown({
	timeMs: computed(() => timeMs),
	stepMs: computed(() => stepMs),
	format: computed(() => format),
	onFinish: () => {
		emit('onFinish')
	},
})

defineExpose({
	setLeft: setLeft,
})
</script>

<template>
	<div class="cd-widget">
		<p>
			{{ title || 'Left' }}:
			{{ left }}
		</p>
		<button
			type="button"
			class="cd-control"
			v-if="!withoutDefaultControls"
			@click="pause"
			:disabled="!pauseAvailable"
		>
			pause
		</button>
		<button
			class="cd-control"
			type="button"
			v-if="!withoutDefaultControls"
			@click="resume"
			:disabled="!resumeAvailable"
		>
			resume
		</button>
		<slot></slot>
	</div>
</template>

<style>
.cd-widget {
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 16px 0;

	button {
		background-color: var(--c-accent);
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 8px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
}
</style>
