<template>
  <div class="top_bar">
    <div class="searchBox">
      <form id="searchform" action="#">
        <div class="search">
          <input
            type="search"
            class="input"
            name="search"
            placeholder="搜索全网低价好券"
            id="searchVal"
            value
          />
        </div>
      </form>
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
.youhuiIndex .top_bar {
  background-color: #f0f3f5 !important;
  border: 0 !important;
  position: relative;
  z-index: 19 !important;
  height: 0.48rem;
  width: 100%;
  /* position: fixed;
    top: 0; */
  text-align: center;
}

.youhuiIndex .top_bar .searchBox {
  width: 100%;
  height: 0.45rem;
  left: 0;
  background-color: #f0f3f5 !important;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  padding-top: 0.064rem;
  padding-bottom: 0.064rem;
  position: absolute;
  z-index: 1;
  text-align: center;
}

#searchform {
  width: 100%;
  height: 100%;
}

.search {
  width: 100%;
  height: 100%;
  background: #fff url(http://sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) 0.1rem center no-repeat;
  background-size: 0.15rem;
  color: #999;
  border-radius: 0.02rem;
}

.searchBox .search .input {
  width: 100%;
  border: 0;
  background: 0 0;
  color: #666;
  font-size: .15rem;
  height: 100%;
  outline: 0;
  text-align: left;
  padding: 0 10% 0 13%;
  float: left;
  box-sizing: border-box;
}
</style>
