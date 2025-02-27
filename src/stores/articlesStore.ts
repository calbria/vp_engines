import { defineStore } from "pinia";
import { mockArticles } from "@/mocks/articles.ts";
import { type Tag, Article } from '@/mocks/articles.ts'

export const useArticlesStore = defineStore('articles', {
	state: () => ({
		articles: mockArticles as Article[],
		loading: false as boolean,
    error: null as string | null,
	}),
	actions: {
		//async function
		fetchArticles() {
			if(this.articles.length) return
			console.log('Fetch articles')
			this.articles = mockArticles
			//         this.loading = true;
      //         this.error = null;
      //         try {
      //           const response = await fetch('/api/articles'); // Replace with your API URL
      //           if (!response.ok) throw new Error('Failed to fetch articles');
      //           const data: Article[] = await response.json(); // Type the fetched data
      //           this.articles = data;
      //         } catch (err) {
      //           this.error = (err as Error).message;
      //         } finally {
      //           this.loading = false;
      //         }
		}
	},
	getters: {
		allArticles: (state) => {
			return state.articles
		},
		articlesByTag: () => {}
	}
})