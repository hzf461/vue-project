import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home }
  ]
})
