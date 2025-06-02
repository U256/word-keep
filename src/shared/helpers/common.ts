export const debounce = <F extends (...args: any) => any>(fn: F, delay: number) => {
	let timeoutId: ReturnType<typeof setTimeout> | null = null

	return ((...args: any) => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		timeoutId = setTimeout(() => {
			fn(...args)
			timeoutId = null
		}, delay)
	}) as F
}

/* eslint-disable prefer-rest-params */
export function throttle<F extends (...args: any) => any>(fn: F, delay: number) {
	let isThrottled = false
	let savedArgs: any[] | null = null
	let savedThis: any = null

	function wrapper() {
		if (isThrottled) {
			savedArgs = arguments as any
			// @ts-ignore
			savedThis = this as any
			return
		}

		// @ts-ignore
		fn.apply(this as any, arguments as any)
		isThrottled = true

		setTimeout(() => {
			isThrottled = false

			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs as any)
				savedArgs = savedThis = null
			}
		}, delay)
	}

	return wrapper as F
}
/* eslint-enable prefer-rest-params */
