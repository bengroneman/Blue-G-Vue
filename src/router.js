import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/pages/About.vue'
import Contact from './views/pages/Contact.vue'
import Projects from './views/pages/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
})
