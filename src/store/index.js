import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: {
      id: '',
      isLogin: false,
    },
    visibleSpinner: false,
  },
  actions: {

  },
  mutations: {
    visibleSpinner(state, action) {
      state.visibleSpinner = action;
    },
  }
});

export default store;
