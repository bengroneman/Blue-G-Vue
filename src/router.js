import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/pages/About.vue';
import Contact from './views/pages/Contact.vue';
import projectruggedwerx from './views/projects/projectRuggedwerx.vue';
import projectmaw from './views/projects/projectMaw.vue';
import projecttopline from './views/projects/projectTopline.vue';
import projectCatalogRequest from './views/projects/projectCatalogRequest.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
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
        path: '/projects/ruggedwerx',
        name: 'ruggedwerx', 
        component: projectruggedwerx
    },
    {
        path: '/projects/maw',
        name: 'maw', 
        component: projectmaw
    },
    {
        path: '/projects/topline',
        name: 'topline', 
        component: projecttopline
    },
    {
        path: '/projects/catalog-request',
        name: 'catalog-request', 
        component: projectCatalogRequest
    }
  ]
});
