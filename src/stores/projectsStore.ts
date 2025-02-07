import { defineStore } from 'pinia'
import { mockProjects } from '@/mocks/projects'
import type { Category, Project } from '@/types/project'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: mockProjects as Project[],
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async fetchProjects() {
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
    },
  },
  getters: {
    allProjects: (state) => {
      return state.projects
    },
    projectsByCategory: (state) => (category: Category) => {
    const filteredProjects = state.projects.filter(prj => prj.category === category)
    return filteredProjects 
    },
    mainProjects: (state) => {
      const categories = ['repair', 'tuning', 'expertise']
      return categories.map((category) =>
        state.projects.find((prj) => prj.category === category && prj.showOnMain),
      )
    },
    bestProjects: (state) => {},

    similarProjects: (state) => {},
  },
})
