<template>
  <aside class="page-menu">
      <!-- class="on"  -->
    <router-link  v-for="item in tabs" :key="item.id"
    :to="item.path"
    tag="a">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon" />
      </svg>
      {{item.text}}
    </router-link>
    <!-- <a class href>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-youhui" />
      </svg>
      优惠
    </a>
    <a class href>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faxian" />
      </svg>
      发现
    </a>
    <a class href>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiezi" />
      </svg>
      装备
    </a>
    <a class href>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo" />
      </svg>
      更多
    </a> -->
  </aside>
</template>
<script>
export default {
  data() {
    return {
      tabs: [{
          id:0,
          text:"首页",
          icon:"#icon-shouye",
          path:"/shouye"
      },
      {
          id:1,
          text:"优惠",
          icon:"#icon-youhui",
          path:"/preferential"
      },
      {
          id:2,
          text:"发现",
          icon:"#icon-faxian",
          path:"/find"
      },
      {
          id:3,
          text:"装备",
          icon:"#icon-xiezi",
          path:"/equip"
      },
      {
          id:4,
          text:"更多",
          icon:"#icon-gengduo",
          path:"/more"
      },
      ]
    };
  }
};
</script>
<style scoped>
.page-menu {
  box-shadow: 0 0 0.32rem 0.02667rem rgba(0, 0, 0, 0.51);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.96);
  display: flex;
  height: 0.36rem;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.page-menu a {
  display: inline-block;
  width: 20%;
  position: relative;
  padding-top: 0.22rem;
  padding-bottom: 0.001rem;
  font-size: 0.12rem;
}
.page-menu .active svg {
  color: red;
}
.page-menu .active{
  color: red;
}
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
 }
.page-menu a svg {
   font-size:.20rem ;
    display: block;
    position: absolute;
    top: .01rem;
    left: 50%;
    margin-left:-.10rem ;
}

</style>