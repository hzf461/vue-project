<template>
  <div id="app">
    <!-- 头部 -->
    <van-nav-bar class="header" title="黑马程序员·前端14期"/>
    <!-- 中间 -->
    <router-view/>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="gem-o">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0
  })
};
</script>

<style lang="scss" scoped>
#app {
  .header {
    background-color: #26a2ff;
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
