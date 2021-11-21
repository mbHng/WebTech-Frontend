import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ToDoList from '../views/ToDoList.vue'
import Settings from '../views/Settings'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toDoList',
    name: 'ToDoList',
    component: ToDoList
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
