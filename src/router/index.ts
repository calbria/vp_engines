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
      layout: 'default'
    },
  },
  {
    path: '/services',
    name: 'services',
    redirect: 'repair',
    meta: {
      breadcrumb: 'services',
      layout: 'default'
    },
    children: [
      {
        path: 'repair',
        name: 'repair',
        component: () => import('../views/RepairView.vue'),
        meta: {
          breadcrumb: 'repair',
          layout: 'default'
        },
      },
      {
        path: 'tuning',
        name: 'tuning',
        component: () => import('../views/TuningView.vue'),
        meta: {
          breadcrumb: 'tuning',
          layout: 'default'
        },
      },
      {
        path: 'expertise',
        name: 'expertise',
        component: () => import('../views/ExpertiseView.vue'),
        meta: {
          breadcrumb: 'expertise',
          layout: 'default'
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
      layout: 'default'
    },
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
          breadcrumb: 'about',
          layout: 'default'
        },
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('../views/BlogView.vue'),
        meta: {
          breadcrumb: 'blog',
          layout: 'default'
        },

      },
      {
        path: 'blog/:slug',
        name: 'article',
        component: () => import('../views/BlogArticleView.vue'),
        props: true,
        meta: {
          breadcrumb: '',
          layout: 'default'
        },
      },

      {
        path: 'working-process',
        name: 'working-process',
        component: () => import('../views/ProcessView.vue'),
        meta: {
          breadcrumb: 'working-process',
          layout: 'default'
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
      layout: 'default'
    },
  },
  {
    path: '/projects/:slug',
    name: 'project',
    component: () => import('../views/ProjectView.vue'),
    props: true,
    meta: {
      breadcrumb: '',
      layout: 'default'
    },
  },
  {
    path: '/contact',
    name: 'contacts',
    component: () => import('../views/ContactView.vue'),
    meta: {
      breadcrumb: 'contacts',
      layout: 'default'
    },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
    meta: {
      breadcrumb: 'privacy',
      layout: 'default'
    },
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      layout: 'default'
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: {
      requiresAuth: true,
      role: 'admin',
      layout: 'admin'
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: () => import('../views/Error404View.vue'),
    meta: {
      layout: 'default'
    },
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
