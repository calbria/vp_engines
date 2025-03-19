export type Category = 'repair' | 'tuning' | 'expertise'

export interface Project {
    id: string,
    //language: 'ru' | 'ua'
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
    relatedArticles?: string[]
    similarProjects?: string[]
}

// interface Text {
//   ru: string;
//   ua: string;
// }

// interface ContentSection {
//   text: Text;
//   image?: string;
// }

// interface ProjectData {
//   id: number;
//   slug: string;
//   featured: boolean;
//   showOnMain: boolean;
//   date: string; // Date to sort by
//   carBrand: string;
//   carModel: string;
//   carYear: string;
//   engine: string;
//   category: Category; // Project type (repair, tuning, expertise)

//   // Hero section (image only, title generated from other fields)
//   heroImage: string;

//   // Summary in two languages (required)
//   summary: Text;

//   // Card image (required)
//   cardImage: string;

//   // Sections of content (introduction, main, results, etc.)
//   introduction: ContentSection;
//   main: ContentSection[]; // Array of main sections
//   results: ContentSection;
//   gallery: string[]; // Image filenames for gallery

//   // Related projects and useful articles by ID
//   relatedProjectIds: number[]; // Array of related project IDs
//   usefulArticleIds: number[]; // Array of useful article IDs
// }