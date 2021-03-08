import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('@/views/index.vue')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'index',
  component: Index
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '/' : '/',
  routes
})

export default router