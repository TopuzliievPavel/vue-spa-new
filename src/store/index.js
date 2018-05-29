import Vue from 'vue'
import Vuex from 'vuex'
import listPagination from './modules/listPagination'
import auth from './modules/authentication'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    listPagination,
    auth
  },
  state: {
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
