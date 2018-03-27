
import Vue from 'vue'
import VueFire from 'vuefire'
import VueAgile from 'vue-agile'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueFire);
Vue.use(VueAgile);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
