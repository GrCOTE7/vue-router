import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/brazil', name: 'brazil', component: () => import('../views/Brazil.vue') },
  { path: '/hawaii', name: 'hawaii', component: () => import('../views/Hawaii.vue') },
  { path: '/jamaica', name: 'jamaica', component: () => import('../views/Jamaica.vue') },
  { path: '/panama', name: 'panama', component: () => import('../views/Panama.vue') },

  {
    path: '/about', name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
