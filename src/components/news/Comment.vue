<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" v-model="msg"></textarea>
    <van-button type="danger" size="large" @click="postComments">发表评论</van-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="index">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{ item.content }}</div>
      </div>
    </div>
    <van-button type="danger" size="large" plain @click="flag && getMore()">{{flag?'加载更多':'没有数据了'}}</van-button>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data: () => ({
    msg: "",
    comments: [],
    pageindex: 1,
    flag: true
  }),
  methods: {
    // 发表评论事件函数
    postComments() {
      if (!this.msg.trim()) return Toast.fail("评论不能为空");
      this.$http
        .post("api/postcomment/" + this.id, { content: this.msg })
        .then(({ data }) => {
          if (data.status != 0) return Toast.fail(data.message);
          Toast.success("添加评论成功");
          let o = {
            user_name: "匿名用户",
            content: this.msg.trim(),
            add_time: new Date()
          };
          this.comments.unshift(o);
          this.msg = "";
        });
    },
    // 页面加载获取评论
    getList() {
      this.$http
        .get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`)
        .then(({ data }) => {
          if (data.status != 0) return Toast.fail(data.message);
          if (!data.message.length) {
            this.flag = false;
            console.log("没有数据了");
          }
          this.comments = this.comments.concat(data.message);
        });
    },
    getMore() {
      this.pageindex++;
      this.getList();
    }
  },
  created() {
    this.getList();
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.comment {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    width: 100%;
    height: 85px;
    padding: 0;
    margin-top: 5px;
    padding-left: 3px;
    // border: 1px solid #000;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
