
import { defineStore } from 'pinia'

const password = 'pass123'
export const useUserStore = defineStore('user',  {
  state: () => ({
    isAuthenticated: false,
    userRole: ''
  }),
  actions: {
    login(role: string, pass: string) {
			if(role === 'admin' && pass === password) {
				this.isAuthenticated = true
				this.userRole = role
			} else {
				this.isAuthenticated = false
				this.userRole = ''
			}
    },
    logout() {
      this.isAuthenticated = false
      this.userRole = ''
    }
  }

  
})
 