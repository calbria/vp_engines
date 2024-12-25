import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/repair',
    name: 'repair',
    component: () => import('../views/RepairView.vue'),
  },
  {
    path: '/tuning',
    name: 'tuning',
    component: () => import('../views/TuningView.vue'),
  },
  {
    path: '/expertise',
    name: 'expertise',
    component: () => import('../views/ExpertiseView.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: {
      requiresAuth: true,
      role: 'admin'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: () => import('../views/Error404View.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from) => {
  const userStore = useUserStore();
  if(to.meta.requiresAuth && to.name !== 'login') {
    if(!userStore.isAuthenticated) {
      return { name: 'login'}
    } else if(to.meta.role && userStore.userRole !== to.meta.role) {
      return { name: 'home'}
    } else return true
    
  } else return true
})

export default router
