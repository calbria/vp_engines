import type { Project } from '@/types/project'

export const mockProjects: Project[] = [
  {
    id: '1',
    slug: 'bmw730-n54-repair',
    featured: true,
    showOnMain: true,
    date: '2024-02-01', //to sort by date YYYY-MM-DD
    carBrand: 'BMW',
    carModel: '730',
    carYear: '2020',
    engine: 'N54 B30-A',
    category: 'repair',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentIntro: `
### Описание проекта
- #### Основные проблемы

   Владелец автомобиля обратился  с жалобой на стук. 
   Проверка цепей, муфт изменения фаз газораспределения результата не дало. Компьютерная диагностика видимых нарушений в работе - двигателя не показала. 
   При прослушивании двигателя с помощью фонендоскопа был локализован источник стука в районе коленвала около шестого - цилиндра. 
   В масляном фильтре была обнаружена металлическая стружка серого и желтого цвета, что является характерным признаком повреждения вкладышей.

   *Дальнейшая эксплуатация двигателя могла привести к более серьезным повреждениям, поэтому мы его разобрем для детальной дефектовки, установления причины выхода из строя и проведения ремонта.*
        
- #### Особенности проекта

   Двигатели BMW серии N отличаются высокой мощностью при малой массе. Для обеспечения надежности на производстве применяются элементы селективной сборки в части установки коленвала в блок. 
   Сложностью данного проекта заключается в  восстановлении геометрии постели коленвала и обеспечение нужного зазора между коренными  вкладышами и шейками коленвала. Для этого потребовалось рассчитать моменты затяжки и размеры постели коленвала для станочных работ, а также толщину каждого вкладыша. Иначе говоря, воссоздать заводской процесс селективной сборки.

   *Это возможно только при наличии измерительного оборудования с точностью до 0,001мм и инжинерных знаний.*

`,
    videoID: '78IZ0B5HM_Y',
    videoText:
`
### Видеоматериалы

В этом видео вы увидите процесс работы над проектом в деталях с подробными комментариями.

`,
    contentMain: `
### Этапы работ
- #### 1. Разборка

    При разборке были обнаружены
    повреждения шестой шатунной шейки коленвала,
    шатунные вкладыши были разрушены, 
    повреждена нижняя головка шатуна шестого цилиндра.
        
    Все внутренние поверхности деталей были покрыты толстым слоем нагара, что свидетельствует о надлежащем техобслуживании двигателя.
    
	![Разборка](/images/img_3x4.png)

- #### 2. Дефектовка
    - Детальная дефектовка  показала: 
      деформации коленвала не позволяют его восстановить, так как в процессе эксплуатации возможно образование микротрещин и разрушение детали.
      геометрия постели коленвала имеет критическую деформацию в местах установки вкладышей
      остальные детали  не имеют существенных отклонений от номинальных значений.
        
      Решение:заменить коленвал на новый оригинальный и восстановить геометрию постели коленвала по сформированному нами техзаданию на координатно-расточном станке.
      
		![Дефектовка](/images/img_3x4.png)

- #### 3. Подбор запчастей   
    При разборке были обнаружены : 
    повреждения шестой шатунной шейки коленвала.
    шатунные вкладыши были разрушены
    повреждена нижняя головка шатуна шестого цилиндра.
    
    Все внутренние поверхности деталей были покрыты толстым слоем нагара, что свидетельствует о надлежащем техобслуживании двигателя.
    
	![Подбор запчастей](/images/img_3x4.png)
`,
    contentResults: `
### Итоги
Владелец автомобиля обратился  с жалобой на стук.

Проверка цепей, муфт изменения фаз газораспределения результата не дало. Компьютерная диагностика видимых нарушений в работе - двигателя не показала. 

При прослушивании двигателя с помощью фонендоскопа был локализован источник стука в районе коленвала около шестого - цилиндра. 

В масляном фильтре была обнаружена металлическая стружка серого и желтого цвета, что является характерным признаком повреждения вкладышей.
`,
    gallery: [
      '/images/project_1/img_1.jpg',
      '/images/project_1/img_2.jpg',
      '/images/project_1/img_3.jpg',
      '/images/project_1/img_4.jpg',
      '/images/project_1/img_5.jpg',
      '/images/project_1/img_6.jpg',
    ],
    similarProjects: ['4', '5'],
		relatedArticles: ['1', '2']
  },
  {
    id: '2',
    slug: 'slug-2',
    featured: true,
    showOnMain: true,
    date: '2024-04-25', //to sort by date YYYY-MM-DD
		carBrand: 'Audi',
    carModel: 'Q7',
    carYear: '2018',
    engine: 'CATA',
    category: 'tuning',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentMain: 'Project 2 content',
    contentIntro: '',
    contentResults: '',
  },
  {
    id: '3',
    slug: 'slug-3',
    featured: true,
    showOnMain: true,
    date: '2025-02-01', //to sort by date YYYY-MM-DD
		carBrand: 'BMW',
    carModel: '730',
    carYear: '2020',
    engine: 'N54 B30-A',
    category: 'expertise',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentMain: 'Project 3 content',
    contentIntro: '',
    contentResults: '',
  },
  {
    id: '4',
    slug: 'slug-4',
    featured: true,
    showOnMain: false,
    date: '2025-02-01', //to sort by date YYYY-MM-DD
		carBrand: 'VW',
    carModel: 'Passat',
    carYear: '2020',
    engine: 'N54 B30-A',
    category: 'repair',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentMain: 'Project 4 content',

    contentIntro: '',
    contentResults: '',
  },
  {
    id: '5',
    slug: 'slug-5',
    featured: true,
    showOnMain: false,
    date: '2024-10-15', //to sort by date YYYY-MM-DD
		carBrand: 'Porche',
    carModel: 'Cayen',
    carYear: '2016',
    engine: 'N54 B30-A',
    category: 'repair',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentMain: 'Project 5 content',
    contentIntro: '',
    contentResults: '',
  },
  {
    id: '6',
    slug: 'slug-6',
    featured: false,
    showOnMain: false,
    date: '2024-10-15', //to sort by date YYYY-MM-DD
		carBrand: 'Mersedes',
    carModel: 'ML 350',
    carYear: '2016',
    engine: 'OM-642',
    category: 'repair',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentMain: 'Project 6 content',
    contentIntro: '',
    contentResults: '',
  },
  {
    id: '7',
    slug: 'slug-7',
    featured: false,
    showOnMain: false,
    date: '2024-10-15', //to sort by date YYYY-MM-DD
		carBrand: 'Mersedes',
    carModel: 'GLE Coupe',
    carYear: '2016',
    engine: 'N54 B30-A',
    category: 'repair',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentMain: 'Project 7 content',
    contentIntro: '',
    contentResults: '',
  },
  {
    id: '8',
    slug: 'slug-8',
    featured: false,
    showOnMain: false,
    date: '2024-10-15', //to sort by date YYYY-MM-DD
		carBrand: 'Porche',
    carModel: 'Cayen',
    carYear: '2016',
    engine: 'N54 B30-A',
    category: 'repair',
    summary:
      'Владелец автомобиля обратился с жалобой на стук.  В масляном фильтре была обнаружена металлическая стружка. В результате капитального ремонта двигатель работает как новый.',
    cardImg: '/images/img_977x726.png',
    destination: 'project', //to navigate to the project page `/projects/${project.id}`,
    heroImg: '/images/img_539x958.png',
    contentMain: 'Project 8 content',
    contentIntro: '',
    contentResults: '',
  },
]
