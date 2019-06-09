import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueParticles from 'vue-particles';
import Slick from 'vue-slick';
import * as firebase from 'firebase';
import _ from 'lodash';

const firebaseConfig = {
    apiKey: "aAIzaSyA5Tv18HxXxR9VtOtO-7gBVJQ6HXAxAT6Q",
    authDomain: "bluegdev.firebaseapp.com",
    databaseURL: "https://bluegdev.firebaseio.com",
    projectId: "bluegdev",
    storageBucket: "bluegdev.appspot.com",
    messagingSenderId: "706410623152",
    appId: "1:706410623152:web:7df7354e5a8d0968"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);  // "[DEFAULT]"

Vue.use(VueParticles);
Vue.use(Slick);
Vue.use(firebase);
Vue.use(_);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

