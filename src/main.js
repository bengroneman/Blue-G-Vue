import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import 'vuetify/dist/vuetify.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueFormGenerator from "vue-form-generator";


// Add in vue fontawesome
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Must have for Vuetify to work throughout the app
window.Vuetify = require('vuetify')

window.jquery = require('jquery')

// Must use to instantiate vuetify
Vue.use(Vuetify, {
    iconfont: 'mdi'
})

Vue.use(VueFormGenerator);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
