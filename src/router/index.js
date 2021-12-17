import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'
import Due from '../views/Due'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/today',
    name: 'Today',
    component: Today
  },
  {
    path: '/due',
    name: 'Due',
    component: Due
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
