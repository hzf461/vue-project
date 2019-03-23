<template>
  <div class="news">
    <router-link :to="'/home/news/newsdetail?id='+item.id" v-for="item in list" :key="item.id">
      <van-card :desc="item.content" :title="item.title" :thumb="item.img_url">
        <span slot="tags">{{item.add_time}}</span>
        <div slot="footer">点击{{item.click}}次</div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    list: []
  }),
  methods: {
    getList() {
      this.$http.get("api/getnewslist").then(({ data }) => {
        if (data.status != 0) return Toast.fail(data.message);
        this.list = data.message;
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss">
.news {
  width: 100%;
  overflow-x: hidden;
  .van-card {
    height: 80px;
  }
  .van-card__content,
  .van-card__thumb {
    height: 56px;
  }
}
</style>
