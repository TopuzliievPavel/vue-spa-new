import Vue from 'vue'
import Vuex from 'vuex'
import listPagination from './modules/listPagination'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    listPagination
  },
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
