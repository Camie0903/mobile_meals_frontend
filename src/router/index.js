import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
