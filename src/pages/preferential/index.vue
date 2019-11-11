<template>
  <div class="mainBox indexpage">
    <div class="youhuiIndex">
      <Top />
      <Yhq/>
      <List/>
        <div class="bg-color"></div>
        <More/>
        <Shop/>
    </div>
  </div>
</template>

<script>
import Top from "../../common/preferential/top";
import Yhq from "../../common/preferential/yhq";
import List from "../../common/preferential/list";
import More from "../../common/preferential/more";
import Shop from "../../common/preferential/shop"





export default {
  name: "preferential",
  components: {
    Top,
    Yhq,
    List,
    More,
    Shop
  }
};
</script>

<style lang="scss" scoped>
.mainBox.indexpage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding-bottom: 0.4rem;
}

.youhuiIndex {
  width: 100%;
  height: auto;
//   padding-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
}

.youhuiIndex .bg-color {
    background-color: #f0f3f5;
    height: .085rem;
}
</style>