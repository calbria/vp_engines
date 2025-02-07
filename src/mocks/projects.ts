import type {  Project } from '@/types/project'

export const mockProjects: Project[] = [
    {
        id: '1',
        featured: true,
        showOnMain: true,
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
        destination: 'project', //to navigate to the project page `/projects/${project.id}`
        content: 'Project 1 content'
       
    },
    {
        id: '2',
        featured: true,
        showOnMain: true,
        date: '2024-04-25', //to sort by date YYYY-MM-DD
        car: {
            brand: 'Audi',
            model: 'Q7',
            year: 2018
        },
        engine: 'CATA',
        category:  'tuning',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        destination: 'project', //to navigate to the project page `/projects/${project.id}`
       content: 'Project 2 content'
    },
    {
        id: '3',
        featured: true,
        showOnMain: true,
        date: '2025-02-01', //to sort by date YYYY-MM-DD
        car: {
            brand: 'BMW',
            model: '730',
            year: 2020
        },
        engine: 'N54 B30-A',
        category:  'expertise',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        destination: 'project', //to navigate to the project page `/projects/${project.id}`
       content: 'Project 3 content'
    },
    {
        id: '4',
        featured: true,
        showOnMain: false,
        date: '2025-02-01', //to sort by date YYYY-MM-DD
        car: {
            brand: 'VW',
            model: 'Passat',
            year: 2020
        },
        engine: 'N54 B30-A',
        category:  'repair',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        destination: 'project', //to navigate to the project page `/projects/${project.id}`
       content: 'Project 4 content'
    },
]