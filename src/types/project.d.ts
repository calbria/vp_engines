

export interface Project {
    id: string
    date: string //to sort by date
    car: {
        brand: string
        model: string
        year: number
    }
    engine: string
    category:  'repair' | 'tuning' | 'expertise'
    summary: string
    cardImg: string
    heroImg: string
    link: (id: string) => string //to navigate to the project page `/projects/${project.id}`
    description: string
    features: string
    disassembly: string
    disassemblyImg: string
    defectDetection: string
    defectDetectionImg: string
    spareParts: string
    sparePartsImg: string
    machineWork: string
    machineWorkImg: string
    qualityControl: string
    qualityControlImg: string
    assembly: string
    assemblyImg: string
    results: string
    mechanicCost: number
    engineerCost: number
    machineCost: number
    sparePartsCost: number
    gallery: string[]
    video?: string
    startDate?: string; // Date when the project started
    completionDate?: string; // Date when the project was completed
    relatedArticles?: string[]
    similarProjects?: string[]
}