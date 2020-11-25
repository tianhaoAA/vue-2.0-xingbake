import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'//引入 rem 适配
import Vant from 'vant'
import 'vant/lib/index.css';
import axios from '@/utils/request' // 引入封装的request.js
// axios.defaults.baseURL='/api'
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
