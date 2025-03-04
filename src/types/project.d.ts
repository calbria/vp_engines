export type Category = 'repair' | 'tuning' | 'expertise'

export interface Project {
    id: string,
    slug: string,
    featured: boolean
    showOnMain: boolean
    date: string //to sort by date
		carBrand: string
		carModel: string
		carYear: string
    engine: string
    category:  Category
    summary: string
    cardImg: string
    destination: string //to navigate to the project page `/projects/${project.id}`
    contentIntro: string
    contentMain: string
    contentResults: string
     heroImg: string
    gallery?: string[]
     videoID?: string,
     videoText?: string
    // startDate?: string; // Date when the project started
    // completionDate?: string; // Date when the project was completed
    relatedArticles?: string[]
    similarProjects?: string[]
}