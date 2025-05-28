import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useSearchQuery = (key = 'search') => {
	const router = useRouter()
	const route = useRoute()
	const search = computed({
		get() {
			return route.query[key] ?? ''
		},
		set(val) {
			router.replace({ query: { [key]: val || undefined } })
		},
	})

  return search
}
