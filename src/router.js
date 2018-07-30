import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RuggedWerxProject from './views/RuggedWerxProject.vue'
import BlueGDevProject from './views/BlueGDevProject.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ruggedwerx',
      name: 'ruggedWerx',
      component: RuggedWerxProject
    },
    {
      path: '/bluegdev',
      name: 'bluegdev',
      component: BlueGDevProject
    }
  ]
})
