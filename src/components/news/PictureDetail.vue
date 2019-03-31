<template>
  <div class="pictureDetail">pictureDetail{{id}}</div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({}),
  methods: {
    getimageInfo() {
      // 获取描述信息
      this.$http.get("api/getimageInfo/" + this.id).then(({ data }) => {
        console.log(data)
        if (data.status != 0) return Toast.fail(data.message);
      });
    },
    getthumimages() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(({ data }) => {
        console.log(data)
        if (data.status != 0) return Toast.fail(data.message);
      });
    }
  },
  created() {
    this.getimageInfo();
    this.getthumimages();
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  }
};
</script>