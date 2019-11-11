<template>
  <div class="swiper-container jiukjiu">
    <div class="tit-block">
      <b>超值9块9</b>
      <span>24小时淘不停</span>
      <div class="fr">
        <a href="http://m.shihuo.cn/youhui/cabbage" class="kanqiu_href1">
          更多商品
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png"
            alt
          />
        </a>
      </div>
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide-active">
        <a href class="kanqiu_href">
          <div class="imgs">
            <img src alt />
          </div>
          <p class="name"></p>
          <p class="price">
            <span>¥</span>
          </p>
        </a>
      </div>
    </div>
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
.swiper-container {
  width: 100%;
  height: 0.95rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #fff;
  padding: 0.128rem;
}

.youhuiIndex .jiukjiu .tit-block b {
  color: #333;
  font-size: 0.14rem;
}

.fr {
  float: right;
}

.youhuiIndex .jiukjiu .tit-block span {
  color: #999;
  font-size: 0.12rem;
  padding-left: 0.064rem;
  vertical-align: bottom;
}

.youhuiIndex .jiukjiu .tit-block .fr a {
  color: #999;
  font-size: 0.12rem;
  padding-left: 0.064rem;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.19rem;
}

.youhuiIndex .jiukjiu .tit-block .fr img {
  margin-left: 0.05rem;
  width: 0.0475rem;
  height: 0.12rem;
  vertical-align: middle;
}

.youhuiIndex .jiukjiu .swiper-wrapper {
  margin-top: 0.064rem;
  margin-left: -0.085rem;
  position: relative;
  width: 100%;
  height: 0.48rem;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transform: translate3d(0px, 0px, 0px);
}

.youhuiIndex .jiukjiu .swiper-wrapper .swiper-slide {
  text-align: center;
  background: #fff;
  padding-left: 0.085rem;
  width: 0.70238rem;
  height: 100%;
  position: relative;
  flex-shrink: 0;
}

.youhuiIndex .jiukjiu .swiper-wrapper .swiper-slide .price {
  text-align: center;
  color: #ff4338;
  font-size: 0.15rem;
}
</style>
