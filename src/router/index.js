import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabBar/Home'
import vip from '@/components/tabBar/Vip'
import shopcar from '@/components/tabBar/ShopCar'
import search from '@/components/tabBar/Search'
import news from '@/components/news/News'
import picture from '@/components/news/Picture'
import buy from '@/components/news/Buy'
import feedback from '@/components/news/Feedback'
import newsdetail from '@/components/news/NewsDetail'
import pictureDetail from '@/components/news/PictureDetail'
import goods from '@/components/goods/GoodList'
import goodDetail from '@/components/goods/GoodDetail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/vip', component: vip },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
    { path: '/home/news', component: news },
    { path: '/home/picture', component: picture },
    { path: '/home/buy', component: buy },
    { path: '/home/feedback', component: feedback },
    { path: '/home/news/newsdetail', component: newsdetail },
    { path: '/home/picture/pictureDetail', component: pictureDetail },
    { path: '/home/goods', component: goods },
    { path: '/home/goods/goodDetail/:id', component: goodDetail },
  ]
})
