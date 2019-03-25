<template>
  <div id="app">
    <van-nav-bar class="header" title="黑马程序员·前端14期"/>
    <!-- <transition
      enter-active-class="fadeInRight"
      leave-active-class="fadeOutLeft"
      :duration="{enter:800,leave:800}"
    >
      <router-view class="animated"></router-view>
    </transition>-->

    <transition>
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/vip" icon="gem-o">会员</van-tabbar-item>
      <van-tabbar-item to="/shopcar" icon="shopping-cart-o" info="50">购物车</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0
  }),
  created() {}
};
</script>

<style lang="scss" scoped>
#app {
  padding-top: 46px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #26a2ff;
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  transform: translateX(-100%);
  position: absolute;
  left: -200%;
  overflow-x: hidden;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>
