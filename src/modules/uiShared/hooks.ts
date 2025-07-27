import { inject, watch, type Reactive } from 'vue'
import { STORE_NAME } from './constants'
import type { GlobalState } from './model'
import { type AccordionName } from '@/modules/uiShared/model'

export const useGlobalState = () => {
	const state = inject(STORE_NAME) as Reactive<GlobalState>

	watch(state, (newState) => {
		localStorage.setItem(STORE_NAME, JSON.stringify(newState))
	})

	return {
		...state,
		handleAccordionClick: (name: AccordionName, exactState?: boolean) => {
			const isOpenNow = state.activeAccordion.includes(name)
			const isOpening = exactState === true || !isOpenNow
			// const thisAccordionState = exactState
			if (state.accordionMode === 'onlyOne') {
				state.activeAccordion = isOpening ? [name] : []
			} else if (isOpening) {
				state.activeAccordion.push(name)
			} else {
				state.activeAccordion = state.activeAccordion.filter((name) => name !== name)
			}
      return isOpening
		},
	}
}
