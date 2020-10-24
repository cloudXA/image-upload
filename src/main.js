import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

const service = axios.create({
  baseURL: "http://8.129.106.56/api/", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

Vue.prototype.$ajax = service;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
