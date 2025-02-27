export type Tag = 'owners' | 'profi' | 'myths'

export interface Article {
	id: string
	slug: string
  preview: string
  date: string
  time: string
  tag: Tag
  title: string
  summary: string
	content: string
	heroImg: string
	video?: string
	related?: string[]
}
