<template>
  <div class="yhq">
    已收集
    <span>0</span> 张优惠券
    <a class="zn fr" href="http://m.shihuo.cn/app/html/shihuoMobile/souquan.html"></a>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.youhuiIndex .yhq {
  background: #f0f3f5;
  width: 100%;
  height: 0.37rem;
  font-size: 0.12rem;
  padding-top: 0.032rem;
  padding-bottom: 0.11rem;
  padding-left: 0.128rem;
  padding-right: 0.128rem;
}

.youhuiIndex .yhq span {
  font-size: 0.15rem;
}

.youhuiIndex .yhq .zn {
  display: block;
  font-size: 0.08rem;
  /* border: .005rem solid black;
    border-radius: 0.09rem; */
  width: 0.64rem;
  height: 0.18rem;
  float: right;
  line-height: 0.17rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/sqzn_2e60ac8.png)
    no-repeat;
  background-size: 100%;
}
</style>
