// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'animate.css/animate.css'
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Icon, } from 'vant'

Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Icon)

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
