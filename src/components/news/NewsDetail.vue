<template>
  <div class="news_detail">
    <h3>{{info.title}}</h3>
    <div class="sub_head">
      <span class="fl">评论：{{info.add_time}}</span>
      <span class="fr">点击：{{info.click}}次</span>
    </div>
    <hr>
    <p class="content">{{info.content}}</p>
    <comment :id="id"></comment>
  </div>
</template>

<script>
import { Toast } from "vant";
import comment from "./Comment.vue";
export default {
  data: () => ({
    id: 0,
    info: {}
  }),
  created() {
    this.id = this.$route.query.id;
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$http.get("api/getnew/" + this.id).then(({ data }) => {
        if (data.status != 0) return Toast.fail(data.message);
        this.info = data.message;
      });
    }
  },
  components: {
    comment
  }
};
</script>

<style lang="scss" scoped>
.news_detail {
  padding: 0 8px;
  h3 {
    text-align: center;
    font-size: 16px;
  }
  .sub_head {
    overflow: hidden;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
}
</style>
