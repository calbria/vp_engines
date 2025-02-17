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
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
        contentIntro:`

- ### Описание проблемы

   - Владелец автомобиля обратился  с жалобой на стук. 
   - Проверка цепей, муфт изменения фаз газораспределения результата не дало. Компьютерная диагностика видимых нарушений в работе - двигателя не показала. 
   -  При прослушивании двигателя с помощью фонендоскопа был локализован источник стука в районе коленвала около шестого - цилиндра. 
   - В масляном фильтре была обнаружена металлическая стружка серого и желтого цвета, что является характерным признаком повреждения вкладышей.

   Дальнейшая эксплуатация двигателя могла привести к более серьезным повреждениям, поэтому мы его разобрем для детальной дефектовки, установления причины выхода из строя и проведения ремонта.
        
- ### Особенности проекта

   - Двигатели BMW серии N отличаются высокой мощностью при малой массе. Для обеспечения надежности на производстве применяются элементы селективной сборки в части установки коленвала в блок. 
   - Сложностью данного проекта заключается в  восстановлении геометрии постели коленвала и обеспечение нужного зазора между коренными  вкладышами и шейками коленвала. Для этого потребовалось рассчитать моменты затяжки и размеры постели коленвала для станочных работ, а также толщину каждого вкладыша. Иначе говоря, воссоздать заводской процесс селективной сборки.

   Это возможно только при наличии измерительного оборудования с точностью до 0,001мм и инжинерных знаний.

`,
        videoID: '78IZ0B5HM_Y',
        videoText: 'В этом видео вы увидите процесс работы над проектом в деталях с подробными комментариями.',
        contentMain: '',
        contentResults: '',
        similarProjects: ['4', '5']
       
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
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
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
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
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
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
       content: 'Project 4 content'
    },
    {
        id: '5',
        featured: true,
        showOnMain: false,
        date: '2024-10-15', //to sort by date YYYY-MM-DD
        car: {
            brand: 'Porche',
            model: 'Cayen',
            year: 2016
        },
        engine: 'N54 B30-A',
        category:  'repair',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
       content: 'Project 5 content'
    },
    {
        id: '6',
        featured: false,
        showOnMain: false,
        date: '2024-10-15', //to sort by date YYYY-MM-DD
        car: {
            brand: 'Mersedes',
            model: 'ML 350',
            year: 2016
        },
        engine: 'OM-642',
        category:  'repair',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
       content: 'Project 6 content'
    },
    {
        id: '7',
        featured: false,
        showOnMain: false,
        date: '2024-10-15', //to sort by date YYYY-MM-DD
        car: {
            brand: 'Mersedes',
            model: 'GLE Coupe',
            year: 2016
        },
        engine: 'N54 B30-A',
        category:  'repair',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
       content: 'Project 7 content'
    },
    {
        id: '8',
        featured: false,
        showOnMain: false,
        date: '2024-10-15', //to sort by date YYYY-MM-DD
        car: {
            brand: 'Porche',
            model: 'Cayen',
            year: 2016
        },
        engine: 'N54 B30-A',
        category:  'repair',
        summary: 'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
        cardImg: '/images/img_977x726.png',
        destination: 'project', //to navigate to the project page `/projects/${project.id}`,
        heroImg: '/images/img_539x958.png',
       content: 'Project 8 content'
    },
]