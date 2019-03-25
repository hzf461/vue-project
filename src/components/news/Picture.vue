<template>
  <div class="picture">
    <van-tabs @click="getimages">
      <van-tab v-for="(item,index) in tabs" :key="index" :title="item.title">
        <router-link v-for="item in picArr" :key="item.id" :to="'/home/picture/pictureDetail?id='+item.id">
          <img v-lazy="item.img_url">
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    tabs: [],
    picArr: []
  }),
  methods: {
    getTabs() {
      this.$http.get("api/getimgcategory").then(({ data }) => {
        if (data.status != 0) return Toast.fail(data.message);
        let o = { id: 0, title: "全部" };
        data.message.unshift(o);
        this.tabs = data.message;
      });
    },
    getimages(i) {
      this.$http.get("api/getimages/" + i).then(({ data }) => {
        console.log(data);
        if (data.status != 0) return Toast.fail(data.message);
        this.picArr = data.message;
      });
    }
  },
  created() {
    this.getTabs();
    this.getimages(0);
  }
};
</script>

<style lang="scss">
.picture {
  .van-tabs__line {
    background-color: #26a2ff;
  }
}
</style>
