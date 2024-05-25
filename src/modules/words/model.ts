export interface Word {
  id: string
  native: string
  original: string
  transcription: string | null | undefined
}

export interface WordListQuery {
	offset: number
	limit: number
	filter: string | null | undefined
}

export interface WordListResponse {
  data: Word[] | null
}
