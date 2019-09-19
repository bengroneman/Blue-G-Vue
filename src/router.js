
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/pages/About.vue';
import Contact from './views/pages/Contact.vue';
import Projects from './views/pages/Projects.vue';
import projectruggedwerx from './views/projects/projectRuggedwerx.vue';
import projectmaw from './views/projects/projectMaw.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            breadcrumb: [
                { name: '/home' }
            ]
        },
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
            breadcrumb: [
                { name: '/contact' }
            ]
        },
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            breadcrumb: [
                { name: '/about' }
            ]
        },
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
        children: [
            {
                path: '/ruggedwerx',
                name: 'ruggedwerx', 
                component: projectruggedwerx,
                meta: {
                    breadcrumb: [
                        { name: '/projects/ruggedwerx' }
                    ]
                },

            },
            {
                path: '/maw',
                name: 'maw', 
                component: projectmaw,
                meta: {
                    breadcrumb: [
                        { name: '/projects/maw' }
                    ]
                },

            },
        ],
        meta: {
            breadcrumb: [
                { name: '/projects' }
            ]
        },


    },
  ]
})
