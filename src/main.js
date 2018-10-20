import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'


Vue.config.productionTip = false

Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('scroll', function() {
  slideNavbar();
});

function slideNavbar() {
  let top_of_page = 0;
  let navbar = document.getElementById("b-navigation-bar");
  let current_pos_on_page = navbar.scrollTop; 
  
  if(current_pos_on_page >= 200) {
    navbar.classList.add("navbar-slide");
  } else {
    navbar.classList.remove("navbar-slide");
  }
}







