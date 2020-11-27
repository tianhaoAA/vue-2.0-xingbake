<template>
  <div class="menus">
    <div class="titleName">
       菜单
    </div>

  <div class="tabs" v-if="this.$route.path==='/menus'">
  <van-tabs v-model="active" color='#00a862'>
  <van-tab title="季度精选" >内容 1</van-tab>
  <van-tab title="饮料" to="/menus/drinks"></van-tab>
  <van-tab title="美食"  to="/menus/food">美食</van-tab>
  <van-tab title="咖啡产品"  to="/menus/coffee">咖啡产品</van-tab>
  <van-tab title="商店" to="/menus/shop">商店</van-tab>
  <!-- <router-view/> -->
</van-tabs>
  </div>
  </div>
</template>

<script>
export default {
      data(){
        return{
          active:0
        }
      },
      created(){
          console.log(this.$route.path);
      }
}
</script>

<style lang='less' scoped>
.menus{
  .titleName{
    font-size: 28px;
    color: #000;
    font-weight: 700;
    margin-top: 20px;
    margin-left: 15px;
  }
  .tabs{
    margin-left: 7px;
  }
}
</style>