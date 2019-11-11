<template>
  <div class="bg-color-all">
    <!-- 第六部分  第一部分 -->
    <div class="advert-radius">
      <a href="http://www.shihuo.cn/column/130.html" class="advert">
        <img
          src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png"
          alt="每日荐"
        />
      </a>
    </div>
    <!-- 第六部分  第二部分 -->
    <div class="menu-list swiper-container-horizontal swiper-container-free-mode" id="menu-list">
      <ul class="swiper-wrapper clearfix" style="transform: translate3d(0px, 0px, 0px);">
        <li data-id="999" class="swiper-slide on swiper-slide-active">
          <a href="javascript:void(0);">精选</a>
        </li>
        <li data-id="1" class="swiper-slide swiper-slide-next">
          <a href="javascript:void(0);">鞋类</a>
        </li>
        <li data-id="2" class="swiper-slide">
          <a href="javascript:void(0);">服饰</a>
        </li>
        <li data-id="3" class="swiper-slide">
          <a href="javascript:void(0);">数码</a>
        </li>
        <li data-id="4" class="swiper-slide">
          <a href="javascript:void(0);">兴趣</a>
        </li>
        <li class="swiper-slide"></li>
      </ul>
      <div class="tag-btn"></div>
    </div>
    <!-- 第六部分  第三部分 -->
    <div class="youhui-list" id="vue-js-list">
      <ul>
        <li>
          <a class="kanqiu_href2" href="http://m.shihuo.cn/youhui/564697.html">
            <div class="imgs">
              <span class="get_imgs">
                <img
                  src="http://shihuo.hupucdn.com/newsIndex11/201911/0715/bad32c1fab700189f35b185dc043448a.jpg?imageView2/0/w/600/h/600/interlace/1"
                  class="lazy"
                  data-original="http://shihuo.hupucdn.com/newsIndex11/201911/0715/bad32c1fab700189f35b185dc043448a.jpg?imageView2/0/w/600/h/600/interlace/1"
                />
              </span>
              <span class="top">置顶</span>
            </div>
            <div class="details_box">
              <h2>又到一年中最最最冷的时候！这份私藏的取暖秘籍拿好了~</h2>
              <p class="subtitle">精选取暖神器大集合</p>
              <div class="from">
                <div class="shop">天猫国际</div>
                <div class="date">2019-11-07</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="kanqiu_href2" href="http://m.shihuo.cn/youhui/565191.html">
            <div class="imgs">
              <span class="get_imgs">
                <img
                  src="http://shihuo.hupucdn.com/newsIndex11/201911/0816/a4d7d39b8176884dd7594c992c427b61.png?imageView2/0/w/600/h/600/interlace/1"
                  class="lazy"
                  data-original="http://shihuo.hupucdn.com/newsIndex11/201911/0816/a4d7d39b8176884dd7594c992c427b61.png?imageView2/0/w/600/h/600/interlace/1"
                />
              </span>
            </div>
            <div class="details_box">
              <h2>Columbia 2019AW 热压保暖羽绒服 WE0950 灰</h2>
              <p class="subtitle">到手价598元</p>
              <div class="from">
                <div class="shop">天猫商城</div>
                <div class="date">11分钟前</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="kanqiu_href2" href="http://m.shihuo.cn/youhui/565156.html">
            <div class="imgs">
              <span class="get_imgs">
                <img
                  src="http://shihuo.hupucdn.com/newsIndex11/201911/0814/52266b6034f30681cec2bff265985291.png?imageView2/0/w/600/h/600/interlace/1"
                  class="lazy"
                  data-original="http://shihuo.hupucdn.com/newsIndex11/201911/0814/52266b6034f30681cec2bff265985291.png?imageView2/0/w/600/h/600/interlace/1"
                />
              </span>
            </div>
            <div class="details_box">
              <h2>adidas Originals 拼色防风夹克</h2>
              <p class="subtitle">到手价369元</p>
              <div class="from">
                <div class="shop">京东商城</div>
                <div class="date">20分钟前</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="kanqiu_href2" href="http://m.shihuo.cn/youhui/565282.html">
            <div class="imgs">
              <span class="get_imgs">
                <img
                  src="http://shihuo.hupucdn.com/newsIndex11/201911/0821/3e4b0ebb6929e9f8cb77fb14950eee8c.png?imageView2/0/w/600/h/600/interlace/1"
                  class="lazy"
                  data-original="http://shihuo.hupucdn.com/newsIndex11/201911/0821/3e4b0ebb6929e9f8cb77fb14950eee8c.png?imageView2/0/w/600/h/600/interlace/1"
                />
              </span>
            </div>
            <div class="details_box">
              <h2>李宁卫衣男士羽毛球系列开衫长袖外套</h2>
              <p class="subtitle">仅需178</p>
              <div class="from">
                <div class="shop">天猫商城</div>
                <div class="date">27分钟前</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
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
.youhuiIndex .bg-color-all {
  background-color: #fff;
  width: 100%;
  height: auto;
}

/* 第六部分  第一部分 */

.youhuiIndex .advert-radius {
  padding: 0 0.128rem;
  margin-bottom: 0.128rem;
}

.youhuiIndex .advert-radius .advert {
  display: flex;
  height: 0.64rem;
  width: 100%;
  display: block;
  overflow: hidden;
  border-radius: 0.32rem;
  color: #444;
  text-decoration: none;
}

.youhuiIndex .advert-radius .advert img {
  width: 100%;
  display: block;
}

/* 第六部分  第二部分 */

.youhuiIndex .menu-list {
  width: 100%;
  border-top: 0.005rem solid #f0f3f5;
  border-bottom: 0.005rem solid #f0f3f5;
  height: 0.375rem;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  transform: translateZ(0);
}

.swiper-wrapper {
  transform: translate3d(0px, 0px, 0px);
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
}

.youhuiIndex .menu-list li {
  width: 0.375rem;
  line-height: 0.375rem;
  height: 0.375rem;
  color: #333;
  padding-left: 0.128rem;
  padding-right: 0.128rem;
  text-align: center;
  background: #fff;
  width: auto;
  position: relative;
}

.youhuiIndex .menu-list li.on a {
  color: #ff4338;
  position: relative;
  border-bottom: 0.08rem solid #ff4338;
}

.youhuiIndex .menu-list li a {
  font-size: 0.13rem;
  color: #333;
  height: 0.375rem;
  line-height: 0.375rem;
  display: inline-block;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.youhuiIndex .menu-list .tag-btn {
  width: 0.485rem;
  height: 100%;
  background: rgba(255, 255, 255, 0.8)
    url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png)
    no-repeat;
  background-size: 100% auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

/* 第六部分  第三部分 */

.youhuiIndex .youhui-list {
  background: #fff;
  padding-top: 0.064rem;
  padding-left: 0.064rem;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.youhuiIndex .youhui-list ul {
  width: 100%;
  height: auto;
}

.youhuiIndex .youhui-list ul li {
  width: 100%;
  height: 1.09rem;
}

.youhuiIndex .youhui-list ul > li > a {
  width: 100%;
  height: 1.09rem;
  padding: 0.064rem;
  padding-left: 0;
  border-bottom: 0.005rem solid #e6e6e6;
  display: flex;
  color: #444;
  text-decoration: none;
}

.youhuiIndex .youhui-list ul > li > a .imgs {
  width: 30%;
  height: 0.962rem;
  float: left;
  position: relative;
}

.youhuiIndex .youhui-list ul > li > a .imgs .get_imgs {
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.youhuiIndex .youhui-list ul > li > a .imgs .get_imgs img {
  width: 100%;
  display: block;
}
.youhuiIndex .youhui-list ul > li > a .imgs .top {
  position: absolute;
  top: 0.064rem;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.04rem;
  color: #fff;
  font-size: 0.12rem;
  padding: 0.02rem 0.0425rem;
}

.youhuiIndex .youhui-list ul > li > a .details_box {
  width: 66%;
  position: relative;
  margin-left: 0.085rem;
  height: 0.96rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.youhuiIndex .youhui-list ul > li > a .details_box h2 {
  width: 100%;
  font-size: 0.15rem;
  color: #333;
  font-weight: 400;
  max-height: 0.35rem;
  /* overflow: hidden; */
  word-break: break-all;
  line-height: 0.175rem;
}

.youhuiIndex .youhui-list ul > li > a .details_box .subtitle {
  bottom: 0.2rem;
  left: 0;
  font-size: 0.128rem;
  color: #ff4338;
  line-height: 0.185rem;
}

.youhuiIndex .youhui-list ul > li > a .details_box .from {
  color: #999;
  font-size: 0.1rem;
}

.youhuiIndex .youhui-list ul > li > a .details_box .from .shop {
  float: left;
}

.youhuiIndex .youhui-list ul > li > a .details_box .from .date {
  float: right;
}
</style>
