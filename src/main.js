import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueParticles from 'vue-particles';
import Slick from 'vue-slick';
import vueResource from 'vue-resource';

// Pass in some secrets
require('dotenv').config();

Vue.config.productionTip = false;

Vue.use(VueParticles);
Vue.use(Slick);
Vue.use(vueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

