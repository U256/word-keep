import type { Day } from '@/modules/day/model'

/**
 * Relative learning "weight".
 * 1 for already known words, 3-4 for new words, 5 for hard words, 8 for phrases.
 */
export type LearnWeight = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface Progress {
	dayN: number
	dayProgressPercent: number
	repeatProgressPercent: number
	learnedDays: Day[]
}
