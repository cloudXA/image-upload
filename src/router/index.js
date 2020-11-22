import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/index.vue'
import Upload from '../components/upload/upload.vue'
import Test from '../components/slot_demo/test.vue'
import Demo from '../demo/slot-scope/index.vue'
import Advanced from '../demo/advanced/index.vue'
import Cat from '../cat/index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path: '/advanced',
    name: 'advanced',
    component: Advanced
  },
  {
    path: '/cat',
    name: 'cat',
    component: Cat
  }
  
]

export default new Router({
  routes
})