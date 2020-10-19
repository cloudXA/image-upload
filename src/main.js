import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:3000/", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

Vue.prototype.$ajax = service;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
