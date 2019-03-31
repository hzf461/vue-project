<template>
  <van-swipe :autoplay="3000" class="swipe" indicator-color="white">
    <van-swipe-item v-for="item in swipeList" :key="item.img">
      <img :src="item.img || item.src" alt>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: ['swipeList']
}
</script>


<style lang="scss" scoped>
.swipe {
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
