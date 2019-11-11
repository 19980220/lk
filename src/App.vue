<template>
  <div id="app">
    <router-view></router-view>
    <tabBar/>
  </div>
</template>

<script>
import tabBar from "@/common/tabbar"
export default {

  name:"App",
  components:{
    tabBar
  }
}
</script>
<style lang="scss">
  #app{
  }
</style>
