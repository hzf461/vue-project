<template>
  <div class="goodDetail">
    <div class="panel">
      <swipe :swipeList="swipeList"></swipe>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @after-leave="leave"
    >
      <div class="ball" v-show="flag"></div>
    </transition>
    <!-- 购买区域 -->
    <div class="panel">
      <h2 class="title">{{goodsinfo.title}}</h2>
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
          <van-stepper v-model="value" integer class="number"/>
        </div>
        <div class="btn-group">
          <van-button type="primary" size="small">立即购买</van-button>
          <van-button type="danger" :disabled="btnFlag" size="small" @click="addToCart">加入购物车</van-button>
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
    goodsinfo: {},
    value: 1, //this.$store.state.cart,
    flag: false,
    btnFlag: false
  }),
  methods: {
    // 获取轮播图
    async getLunbotu() {
      let id = Number(this.$route.params.id) + 100;
      this.$http.get("api/getthumimages/" + id).then(({ data }) => {
        if (data.status != 0) return Toast.fail(data.message);
        this.swipeList = data.message;
      });
    },
    // 加入购物车
    addToCart() {
      this.flag = !this.flag;
      this.btnFlag = true;
      let o = {
        id: this.id,
        count: this.value,
        title: this.goodsinfo.title,
        price: this.goodsinfo.sell_price,
        imgSrc: this.swipeList[0].src,
        selected: true
      };
      this.$store.commit("addCar", o);
    },
    // 获取价格 http://localhost:5000/api/goods/getinfo/1
    getinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        let {
          data: { status, message }
        } = result;
        if (status != 0) return Toast.fail(message);
        // this.goodsinfo.market_price = data.message.market_price;
        // this.goodsinfo.sell_price = data.message.sell_price;
        this.goodsinfo = message;
      });
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      let targetDOM = document
        .querySelector(".van-info")
        .getBoundingClientRect();
      let ballDOM = el.getBoundingClientRect();

      let x = targetDOM.left - ballDOM.left;
      let y = targetDOM.top - ballDOM.top;

      el.offsetTop;
      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all .5s";
      done();
    },
    afterEnter() {
      this.flag = !this.flag;
    },
    leave() {
      this.btnFlag = false;
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getLunbotu();
    this.getinfo();
  },
  components: {
    swipe
  },
  mounted() {}
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
    top: 361px;
    left: 129px;
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
