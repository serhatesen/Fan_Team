import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import gsStore from '../views/teams/GalatasarayView.vue'
import kartalYuvasi from '../views/teams/BesiktasView.vue'
import feneriumView from '../views/teams/FenerbahceView.vue'
import trabzonSpor from '../views/teams/TrabzonsporView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gsStore',
    name: 'gsStore',
    component: gsStore
  },
  {
    path: '/kartalYuvasi',
    name: 'kartalYuvasi',
    component: kartalYuvasi
  },
  {
    path: '/fenerium',
    name: 'fenerium',
    component: feneriumView
  },
  {
    path:'/trabzonspor',
    name:'trabzonspor',
    component:trabzonSpor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
