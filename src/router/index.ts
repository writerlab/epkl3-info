import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // component: Home,
    redirect: '/tabs/peserta'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        component: Home,
        redirect: '/tabs/home'
      },
      {
        path: 'peserta',
        component: () => import('@/views/Peserta.vue')
      },
      {
        path: 'instansi',
        component: () => import('@/views/Instansi.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
