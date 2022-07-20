import { createRouter, createWebHistory } from 'vue-router'
import router_employee from './router_employee'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/department',
      name: 'department',
      component: () => import('../components/department/department.vue')
    },
    ...router_employee
  ]
})

export default router
