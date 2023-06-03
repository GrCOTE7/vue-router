import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Brazil from '@/views/Brazil.vue'
import Hawaii from '@/views/Hawaii.vue'
import Jamaica from '@/views/Jamaica.vue'
import Panama from '@/views/Panama.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/brazil', name: 'brazil', component: Brazil },
  { path: '/hawaii', name: 'hawaii', component: Hawaii },
  { path: '/jamaica', name: 'jamaica', component: Jamaica },
  { path: '/panama', name: 'panama', component: Panama },
  
  { path: '/about', name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
