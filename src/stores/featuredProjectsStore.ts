

// export const useFeaturedProjectsStore = defineStore('featuredProjects',  {
//   state: () => ({
// featuredProjectsList: []
 // }),
 // actions: {
    // async load() {
    //use localStorage.getItem('language') to load proper version
    // await responce from API
    //   this.featuredProjectsLis = 
    //   
    // },
    // logout() {
    //   this.isAuthenticated = false
    //   this.userRole = ''
    // }
 // }

  
//})

import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

import type { Project } from '@/types/Project'; // Define your type

export const useFeaturedProjectsStore = defineStore('projects', () => {
  const projectsRu = ref<Project[]>([]);
  const projectsUa = ref<Project[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const currentLanguage = ref(localStorage.getItem('lang') || 'ru');

    async function fetchProjects(lang: 'ru' | 'ua') {
        isLoading.value = true;
        error.value = null;
        try {
            const response = await fetch(`/api/projects?lang=${lang}`); // Replace with your API
            const data = await response.json();
            if (lang === 'ru') {
              projectsRu.value = data;
          } else {
              projectsUa.value = data;
          }
        } catch (err) {
            error.value = 'Failed to load projects';
        } finally {
            isLoading.value = false;
        }
    }
        // Computed property to return the correct list based on the selected language
        const projects = computed(() => {
          return currentLanguage.value === 'ru' ? projectsRu.value : projectsUa.value;
      });
  
      // Watch for language changes and fetch the correct list
      watch(currentLanguage, (newLang) => {
          localStorage.setItem('lang', newLang); // Save the language preference
          if ((newLang === 'ru' && projectsRu.value.length === 0) || 
              (newLang === 'ua' && projectsUa.value.length === 0)) {
              fetchProjects(newLang);
          }
      });

    return { projects, isLoading, error, fetchProjects };
});