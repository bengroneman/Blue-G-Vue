import Vue from 'vue'
import Vuex from 'vuex'
import front_page_content from './modules/front_page_content'
import { debug } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    front_page_content
  },
  // For development
  strict: debug
})
