import type { LearnUnit } from "@/modules/learnUnit/model"

export interface Day {
  id: string
  date: Date
  wordsToLearn: LearnUnit['id'][]
  wordsLearned: LearnUnit['id'][]
  weightCapacity: number
} 