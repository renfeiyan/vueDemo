import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './js/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//使用mock模拟数据
require('./mock/mock');

Vue.use(ElementUI);
Vue.use(iView);
Vue.use(Vuex)
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.Dapi = process.env.NODE_ENV === 'production' ? '' : '/Dapi'  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
