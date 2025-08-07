import { ref, watchEffect } from 'vue'

export function useFetch(...args: Parameters<typeof fetch>) {
	const data = ref(null)
	const error = ref(null)

	const fetchData = (...args: Parameters<typeof fetch>) => {
		fetch(...args)
			.then((res) => res.json())
			.then((json) => (data.value = json))
			.catch((err) => (error.value = err))
	}

  watchEffect(() => {
    fetchData(...args)
  })

	return { data, error }
}
