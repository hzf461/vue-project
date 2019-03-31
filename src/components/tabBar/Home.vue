<template>
  <div class="home">
    <swipe :swipeList="swipeList"></swipe>
    <div class="demo-icon">
      <div class="van-tab__pane">
        <router-link to="/home/news" class="van-col van-col--6">
          <img src="/static/images/menu1.png" alt>
          <span>新闻资讯</span>
        </router-link>
        <router-link to="/home/picture" class="van-col van-col--6">
          <img src="/static/images/menu2.png" alt>
          <span>图片分享</span>
        </router-link>
        <router-link to="/home/goods" class="van-col van-col--6">
          <img src="/static/images/menu3.png" alt>
          <span>商品购买</span>
        </router-link>
        <router-link to="/home/feedback" class="van-col van-col--6">
          <img src="/static/images/menu4.png" alt>
          <span>留言反馈</span>
        </router-link>
        <router-link to="/home/newList" class="van-col van-col--6">
          <img src="/static/images/menu5.png" alt>
          <span>视频专区</span>
        </router-link>
        <router-link to="/home/newList" class="van-col van-col--6">
          <img src="/static/images/menu6.png" alt>
          <span>联系我们</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import swipe from "../common/swipe";
// import func from "./vue-temp/vue-editor-bridge";
export default {
  data: () => ({
    swipeList: []
  }),
  created() {
    this.loadSwipe();
  },
  methods: {
    async loadSwipe() {
      // this.$http.get("http://localhost:5000/api/getlunbo").then(({ data }) => {
      //   if (data.status != 0) return Toast.fail("数据请求失败");
      //   this.swipeList = data.message;
      // });
      let { data } = await this.$http.get("api/getlunbo");
      if (data.status != 0) return Toast.fail("数据请求失败");
      this.swipeList = data.message;
    }
  },
  components: {
    swipe
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}
.demo-icon {
  font-size: 0;
  .van-col {
    float: none;
    text-align: center;
    height: 100px;
    display: inline-block;
    vertical-align: middle;
  }
  .van-col span {
    display: block;
    padding: 0 5px;
    font-size: 12px;
    line-height: 14px;
  }
  .van-icon {
    font-size: 32px;
    margin: 15px 0;
    color: #323233;
  }
  .van-tab__pane {
    padding-top: 10px;
  }
  .van-col--6 {
    width: 33.333%;
    img {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }
  }
}
</style>
