import type { LearnWeight } from '@/modules/progress/model'

export interface LearnUnit {
	id: string
	type: 'word' | 'phrase' | 'grammar' | 'grammarPhrase'
	native: string[]
	description?: string
	original: string[]
	transcription: string[] | null | undefined
	weight: LearnWeight
}
