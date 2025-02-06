import { defineStore } from 'pinia'
import i18n from '@/i18n'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: (localStorage.getItem('language') as 'ru' | 'ua') || 'ru',
  }),
  actions: {
    setLanguage(lang: 'ru' | 'ua') {
      this.currentLanguage = lang
      localStorage.setItem('language', lang)
      i18n.global.locale.value = lang
    },
  },
})
