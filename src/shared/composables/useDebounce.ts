import { watch, ref, type Ref } from 'vue'
import { debounce, throttle } from '@/shared/helpers/common'

export const useDebouncedValue = <T>(initialValue: T, delay: number = 300) => {
	const instantState = ref<T>(initialValue)
	const setValue = (n: T) => {
		instantState.value = n
	}

	const debouncedState = ref<T>(initialValue)
	const setDebounced = debounce((n: T) => {
		debouncedState.value = n
	}, delay)
	watch(instantState, (n) => setDebounced(n))

	return [debouncedState as Ref<T>, setValue, instantState as Ref<T>] as const
}

export const useThrottledValue = <T>(initialValue: T, delay: number = 300) => {
	const instantState = ref<T>(initialValue)
	const setValue = (n: T) => {
		instantState.value = n
	}

	const throttledState = ref<T>(initialValue)
	const setThrottled = throttle((n: T) => {
		throttledState.value = n
	}, delay)
	watch(instantState, (n) => setThrottled(n))

	return [throttledState as Ref<T>, setValue, instantState as Ref<T>] as const
}
