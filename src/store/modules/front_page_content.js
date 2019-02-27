import shop from '../../api/shop'

// init state
const state = {
  all: []
}

// getters
const getters = {}

//actions
const actions = {
  getAllFrontPageContent ({ commit }) {
    shop.getContent(contents => {
      commit('setContent', contents)
    })
  }
}

// mutations
const mutations = {
  setContent (state, contents) {
    state.all = contents
  }
  // Any other mutation functiosn we might need
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}