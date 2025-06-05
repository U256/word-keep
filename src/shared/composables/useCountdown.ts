import { computed, onWatcherCleanup, ref, watch, type Ref } from 'vue'

export interface CountdownConfig {
	timeMs: Ref<number>
	onFinish: () => void
	stepMs?: Ref<number | undefined>
	format?: Ref<'s' | 'ms' | undefined>
}

export const useCountdown = (config: CountdownConfig) => {
	const { timeMs, onFinish, format } = config
	const stepMs = computed(() => config?.stepMs?.value ?? 10)

	const left = ref(timeMs.value)
	const watchToggler = ref(false)
	const intervalId = ref<ReturnType<typeof setInterval> | undefined>()
	const isFinished = computed(() => left.value < stepMs.value - 1)

	const stop = () => {
		if (intervalId.value) {
			clearInterval(intervalId.value)
			intervalId.value = undefined
		}
	}
	const start = () => {
		intervalId.value = setInterval(() => {
			left.value -= stepMs.value
			if (left.value < stepMs.value - 1) {
				onFinish()
				stop()
			}
		}, stepMs.value)
	}

	watch(
		[timeMs, watchToggler],
		() => {
			left.value = timeMs.value
			start()

			onWatcherCleanup(() => {
				clearInterval(intervalId.value)
				intervalId.value = undefined
			})
		},
		{ immediate: true },
	)

	return {
		left: computed(() =>
			left.value > stepMs.value - 1
				? format?.value === 's'
					? Math.floor(left.value / 1000)
					: left.value
				: 0,
		),
		pause: stop,
		pauseAvailable: computed(() => !!intervalId.value && !isFinished.value),
		resume: () => {
			if (!intervalId.value) {
				start()
			}
		},
		resumeAvailable: computed(() => !intervalId.value && !isFinished.value),
		setLeft: (newVal: number) => {
			clearInterval(intervalId.value)
			watchToggler.value = !watchToggler.value // for re-triggering the watcher
			left.value = newVal
		},
	}
}
