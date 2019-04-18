import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import Slick from 'vue-slick'


Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(Slick)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

