import type { Progress } from '@/modules/progress/model'

export interface User {
	id: string
	name: string
	progress: Progress
	nativeLanguage: string
	learningLanguage: string
	preferredDayLearnCapacity: number
	repeatPassedDaysStrategy: number[] // 1 - yesterday, 2 - 2 days ago, etc.
	// preferredLearningMethod: "spaced-repetition" | "random"
}
