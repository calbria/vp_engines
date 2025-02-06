import { defineStore } from 'pinia'
import { type Project } from '@/types/project'

const mockProjects: Project[] = [
    {
        id: '1',
        date: '2024-02-01', //to sort by date YYYY-MM-DD
        car: {
            brand: 'BMW',
            model: '730',
            year: 2020
        },
        engine: 'N54 B30-A',
        category:  'repair',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        heroImg: '/images/main_hero.png',
        link: (id: string) => `/projects/${id}`, //to navigate to the project page `/projects/${project.id}`
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
]

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: mockProjects,
  }),
  actions: {},
})

// export const useProjectsStore = defineStore('projects', {
//     state: () => ({
//       projects: [] as Project[], // Type the projects array
//       loading: false as boolean,
//       error: null as string | null,
//     }),
//     actions: {
//       async fetchProjects() { 
//         this.loading = true;
//         this.error = null;
  
//         try {
//           const response = await fetch('/api/projects'); // Replace with your API URL
//           if (!response.ok) throw new Error('Failed to fetch projects');
  
//           const data: Project[] = await response.json(); // Type the fetched data
//           this.projects = data;
//         } catch (err) {
//           this.error = (err as Error).message;
//         } finally {
//           this.loading = false;
//         }
//       },
//     },
//   });