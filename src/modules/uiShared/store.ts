import { reactive } from 'vue'
import type { GlobalState } from './model'
import { STORE_NAME } from './constants'

const saved = localStorage.getItem(STORE_NAME)

export const globalState = reactive<GlobalState>(saved
	? JSON.parse(saved)
	: {
			accordionMode: 'multiple',
			activeAccordion: [],
		})

export { type GlobalState, STORE_NAME }
