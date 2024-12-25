
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',  {
  state: () => ({
    isAuthenticated: false,
    userRole: ''
  }),
  actions: {
    login(role: string) {
      this.isAuthenticated = true
      this.userRole = role
    },
    logout() {
      this.isAuthenticated = false
      this.userRole = ''
    }
  }

  
})
 