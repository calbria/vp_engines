import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useLanguageStore = defineStore('language', () => {
    const currentLanguage  = ref<'ru' | 'ua'>(localStorage.getItem('language') as 'ru' | 'ua')
    watch(currentLanguage, (newLang) => {
        localStorage.setItem('language', newLang)
    })
    return { currentLanguage }
})