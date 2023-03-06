import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: '/D3',
    name: 'D3',
    component: () => import("@/views/D3/index.vue")
  },
  {
    path: '/Echart',
    name: 'Echart',
    component: () => import("@/views/Echart/index.vue")
  },
  {
    path: '/G2',
    name: 'G2',
    component: () => import("@/views/G2/index.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
