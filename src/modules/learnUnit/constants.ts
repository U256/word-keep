import type { LearnUnit } from '@/modules/learnUnit/model'
import type { LearnWeight } from '@/modules/progress/model'

export const LEARN_UNIT_DEFAULT_WEIGHTS: Record<LearnUnit['type'], LearnWeight> = {
	word: 3,
	phrase: 8,
	grammar: 10,
	grammarPhrase: 8,
}
