// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'animate.css/animate.css'
import moment from 'moment'
import store from './store'
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Icon, Card, Button, Tab, Tabs, Lazyload, Stepper, Switch, SubmitBar } from 'vant'

Vue
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Icon)
  .use(Card)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .use(Stepper)
  .use(Switch)
  .use(SubmitBar)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.filter('dateFormat', (time, pattern = 'YYYY-MM-DD hh:mm:ss') => {
  return moment(time).format(pattern)
})

axios.defaults.baseURL = 'http://localhost:5000/';  // 默认地址

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
