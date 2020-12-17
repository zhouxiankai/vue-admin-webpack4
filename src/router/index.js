import Vue from 'vue'
import Router from 'vue-router'
import router from './routers'

Vue.use(Router)

const routers = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/home.vue'),
    children: router
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/login/index')
  }
]

export default new Router({
  mode: 'history',
  routes: routers
})
