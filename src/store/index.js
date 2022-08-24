import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null,
    token: null,
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
