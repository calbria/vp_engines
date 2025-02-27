import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      breadcrumb: 'home',
      icon: 'home',
    },
  },
  {
    path: '/services',
    name: 'services',
    redirect: 'repair',
    meta: {
      breadcrumb: 'services',
    },
    children: [
      {
        path: 'repair',
        name: 'repair',
        component: () => import('../views/RepairView.vue'),
        meta: {
          breadcrumb: 'repair',
        },
      },
      {
        path: 'tuning',
        name: 'tuning',
        component: () => import('../views/TuningView.vue'),
        meta: {
          breadcrumb: 'tuning',
        },
      },
      {
        path: 'expertise',
        name: 'expertise',
        component: () => import('../views/ExpertiseView.vue'),
        meta: {
          breadcrumb: 'expertise',
        },
      },
    ],
  },

  {
    path: '/company',
    name: 'company',
    redirect: 'about',
    meta: {
      breadcrumb: 'company',
    },
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
          breadcrumb: 'about',
        },
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('../views/BlogView.vue'),
        meta: {
          breadcrumb: 'blog',
        },

      },
      {
        path: 'blog/:slug',
        name: 'article',
        component: () => import('../views/BlogArticleView.vue'),
        props: true,
        meta: {
          breadcrumb: '',
        },
      },

      {
        path: 'working-process',
        name: 'working-process',
        component: () => import('../views/ProcessView.vue'),
        meta: {
          breadcrumb: 'working-process',
        },
      },
    ],
  },


  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: {
      breadcrumb: 'projects',
    },
  },
  {
    path: '/projects/:slug',
    name: 'project',
    component: () => import('../views/ProjectView.vue'),
    props: true,
    meta: {
      breadcrumb: '',
    },
  },
  {
    path: '/contact',
    name: 'contacts',
    component: () => import('../views/ContactView.vue'),
    meta: {
      breadcrumb: 'contacts',
    },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
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
      role: 'admin',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: () => import('../views/Error404View.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach((to, from) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && to.name !== 'login') {
    if (!userStore.isAuthenticated) {
      return { name: 'login' }
    } else if (to.meta.role && userStore.userRole !== to.meta.role) {
      return { name: 'home' }
    } else return true
  } else return true
})

export default router
