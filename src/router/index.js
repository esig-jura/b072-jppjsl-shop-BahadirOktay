import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '@/views/AccueilView.vue'
import ServiceClientView from '@/views/ServiceClientView.vue'
import FicheSabreView from '@/views/FicheSabreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AccueilView
    },
    {
      path: '/service-client',
      name: 'service-client',
      component: ServiceClientView
    },
    {
      path: '/sabre/:id',
      name: 'sabre',
      component: FicheSabreView
    }
  ]
})

export default router
