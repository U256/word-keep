export type AccordionName =
	| 'Counter'
	| 'TodoList'
	| 'BasicForm'
	| 'RefsAndLifecycle'
	| 'Styling'
	| 'ApiHandling'
	| 'CoundownBlock'
	| 'CompositionStyle'
	| 'OptionsStyle'

export interface GlobalState {
	accordionMode?: 'onlyOne' | 'multiple'
	activeAccordion: AccordionName[]
}
