<template>
  <div class="shopcar">
    <div class="car-group" v-for="(item) in list" :key="item.id">
      <div @click="switchClick(item.id,item.selected)" class="car-switch">
        <van-switch v-model="item.selected"/>
      </div>
      <div class="car-p">
        <van-card
          :num="item.count"
          :price="item.price * item.count"
          :title="item.title"
          :thumb="item.imgSrc"
        >
          <div slot="tags" class="bujin">
            <van-stepper @change="onChange(item.id,item.count)" v-model="item.count"/>
          </div>
        </van-card>
      </div>
    </div>
    <van-submit-bar :price="$store.getters.price * 100" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>
<script>
export default {
  data: () => ({
    list: JSON.parse(localStorage.getItem("car")) || []
  }),
  created() {},
  methods: {
    switchClick(id, val) {
      this.$store.commit("updateSelect", { id, flag: val });
    },
    onChange(id, num) {
      this.$store.commit("updateNum", { id, num });
    },
    onSubmit() {
      this.$store.commit("commitOrder");
      this.list = JSON.parse(localStorage.getItem("car")) || [];
    }
  }
};
</script>
<style lang="scss">
.shopcar {
  .car-group {
    display: flex;
    .car-switch {
      flex: 2;
      position: relative;
      .van-switch {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .car-p {
      flex: 8;
      .bujin {
        margin: 10px 0 12px;
      }
    }
  }
  .van-submit-bar {
    bottom: 50px;
  }
}
</style>
