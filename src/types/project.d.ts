export type Category = 'repair' | 'tuning' | 'expertise'

export interface Project {
    id: string
    featured: boolean
    showOnMain: boolean
    date: string //to sort by date
    car: {
        brand: string
        model: string
        year: number
    }
    engine: string
    category:  Category
    summary: string
    cardImg: string
    destination: string //to navigate to the project page `/projects/${project.id}`
    contentIntro: string
    contentMain: string
    contentResults: string
     heroImg: string
    // description: string
    // features: string
    // disassembly: string
    // disassemblyImg: string
    // defectDetection: string
    // defectDetectionImg: string
    // spareParts: string
    // sparePartsImg: string
    // machineWork: string
    // machineWorkImg: string
    // qualityControl: string
    // qualityControlImg: string
    // assembly: string
    // assemblyImg: string
    // results: string
    // mechanicCost: number
    // engineerCost: number
    // machineCost: number
    // sparePartsCost: number
    // gallery: string[]
    // video?: string
    // startDate?: string; // Date when the project started
    // completionDate?: string; // Date when the project was completed
    // relatedArticles?: string[]
    similarProjects?: string[]
}