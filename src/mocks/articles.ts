import type { Article } from '@/types/article.d.ts';

export const mockArticles: Article[] = [
	{
		id: '1',
		slug: 'skolko-stoit-kapremont',
		preview: '/images/blog/preview.png',
		date: '25/01/2024',
		time: '10',
		tag: 'owners',
		title: 'Сколько стоит капремонт: за что вы платите',
		summary: 'Точного ответа на этот вопрос не существует. Сумма формируется из стоимости работ по восстановлению, стоимости станочных работ (если необходимо) и стоимости запчастей. Все составляющие зависят от конкретной модели двигателя и характера неисправностей.',
		content: '### Header 1',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['2', '3']
	},
	{
		id: '2',
		slug: 'electivnaya-sborka',
		preview: '/images/blog/preview.png',
		date: '10/07/2024',
		time: '15',
		tag: 'profi',
		title: 'Селективная сборка: подводные камни',
		summary: 'Современные двигатели обладают высокой мощностью при малой массе. Для обеспечения надежности на производстве применяются элементы селективной сборки',
		content: '### Header 2',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['1', '3']
	},
	{
		id: '3',
		slug: 'kontraktniy-dvigatel-ili-kapremont',
		preview: '/images/blog/preview.png',
		date: '17/01/2025',
		time: '8',
		tag: 'myths',
		title: 'Контрактный двигатель или капремонт',
		summary: 'Ответ зависит в первую очередь от понимания “лучше”: дешевле, быстрее или качественнее.',
		content: '### Header 3',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['1', '2']
	},
	{
		id: '4',
		slug: 'priznaki-neispravnosti-dvigatelia',
		preview: '/images/blog/preview.png',
		date: '22/03/2024',
		time: '5',
		tag: 'owners',
		title: 'Признаки неисправности двигателя',
		summary: 'Ответ зависит в первую очередь от понимания “лучше”: дешевле, быстрее или качественнее.',
		content: '### Header 4',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['2', '3']
	},
	{
		id: '5',
		slug: 'priznaki-neispravnosti-dvigatelia',
		preview: '/images/blog/preview.png',
		date: '22/03/2024',
		time: '12',
		tag: 'profi',
		title: 'Сборка мотора BMW N63',
		summary: 'Ответ зависит в первую очередь от понимания “лучше”: дешевле, быстрее или качественнее.',
		content: '### Header 5',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['1', '4']
	},
	{
		id: '6',
		slug: 'ranshe-bilo-luchshe',
		preview: '/images/blog/preview.png',
		date: '22/03/2024',
		time: '12',
		tag: 'myths',
		title: 'Раньше было лучше',
		summary: 'Ответ зависит в первую очередь от понимания “лучше”: дешевле, быстрее или качественнее.',
		content: '### Header 6',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['2', '5']
	},
	{
		id: '7',
		slug: 'slava-chugunu',
		preview: '/images/blog/preview.png',
		date: '07/05/2024',
		time: '12',
		tag: 'myths',
		title: 'Слава чугуну',
		summary: 'Ответ зависит в первую очередь от понимания “лучше”: дешевле, быстрее или качественнее.',
		content: '### Header 7',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['1', '6']
	},
	{
		id: '8',
		slug: 'slava-chugunu',
		preview: '/images/blog/preview.png',
		date: '23/08/2024',
		time: '7',
		tag: 'profi',
		title: 'Слава чугуну',
		summary: 'Ответ зависит в первую очередь от понимания “лучше”: дешевле, быстрее или качественнее.',
		content: '### Header 8',
		heroImg: '/images/img_539x958.png',
		// video?: string
		related: ['6', '7']
	},
]