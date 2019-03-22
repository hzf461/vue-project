import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabBar/Home'
import vip from '@/components/tabBar/Vip'
import shopcar from '@/components/tabBar/ShopCar'
import search from '@/components/tabBar/Search'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/vip', component: vip },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
  ]
})
