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
	intro: string
	content: string
	heroImg: string
	videoID?: string
	videoText?: string
	related?: string[]
}
