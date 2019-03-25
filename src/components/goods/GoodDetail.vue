<template>
  <div class="goodDetail">
    <div class="panel">
      <swipe :swipeList="swipeList"></swipe>
    </div>
    <!-- 购买区域 -->
    <div class="panel">
      <h2 class="title">荣耀</h2>
      <hr>
      <div class="panel-body">
        <div class="price-group">
          市场价格:
          <span class="old">{{goodsinfo.market_price}}</span>
          销售价格:
          <span class="new">{{goodsinfo.sell_price}}</span>
        </div>
        <div class="stepper">
          <div class="number">购买数量:</div>
          <!-- 
            :min="1" 默认就是1 不添加也可以 
            plus 点击添加的时候触发 
            minus 点击减少的时候触发  
          -->
          <!-- <van-stepper v-model="value" integer class="number" :step="step"/> -->
        </div>
        <div class="btn-group">
          <van-button type="primary" size="small">立即购买</van-button>
          <!-- <van-button type="danger" :disabled="btnFlag" size="small" @click="addToCart">加入购物车</van-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swipe from "../common/swipe.vue";
import { Toast } from "vant";
export default {
  data: () => ({
    id: 0,
    swipeList: [],
    goodsinfo: {}
  }),
  methods: {
    // 获取轮播图
    getLunbotu() {
      let id = Number(this.$route.params.id) + 100;
      this.$http.get("api/getthumimages/" + id).then(({ data }) => {
        if (data.status != 0) return Toast.fail(data.message);
        this.swipeList = data.message;
        console.log(this.swipeList);
      });
    },
    // 获取描述
    getdesc() {
      this.$http.get("api/goods/getdesc/" + this.id).then(({ data }) => {
        if (data.status != 0) return Toast.fail(data.message);
        this.goodsinfo = data.message;
      });
    },
    addToCart(){

    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getLunbotu();
    this.getdesc();
  },
  components: {
    swipe
  }
};
</script>

<style lang="scss">
.goodDetail {
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    position: absolute;
    top: 327px;
    left: 138px;
    z-index: 20;
    opacity: 1;
  }
  .panel {
    width: 96%;
    border: 2px dashed #38f;
    border-radius: 6px;
    box-shadow: 0 0 3px #38f;
    margin: 0 auto;
    margin-top: 10px;
    .my-swiper {
      text-align: center;
      height: 166px;
      line-height: 166px;
      img {
        vertical-align: middle;
      }
    }
    .title {
      font-size: 16px;
      margin: 10px 0 10px 10px;
    }
    .panel-body {
      margin-left: 16px;
      margin-bottom: 10px;
      color: #8f8f94;
      font-size: 14px;
      .price-group {
        margin-bottom: 12px;
        .old {
          text-decoration: line-through;
          margin-right: 6px;
        }
      }
      .stepper {
        color: #8f8f94;
        font-size: 0;
        .number {
          display: inline-block;
          font-size: 14px;
          margin-right: 6px;
        }
      }
      .btn-group {
        margin-top: 10px;
      }
      p {
        margin-top: 10px;
      }
    }
  }
}
</style>
