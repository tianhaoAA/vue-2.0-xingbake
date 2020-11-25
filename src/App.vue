<template>
  <div id="app">
    <router-view/>
 <div style="height: 5rem;"></div>
<!-- <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar> -->
  <!-- 开启路由模式 -->
    <van-tabbar router  v-model="active">
    <van-tabbar-item to='/' icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon='shop-o' to='/stores'>门店</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='myAccount'>我的账户</van-tabbar-item>
    <van-tabbar-item icon='shopping-cart-o' to='menus'>菜单</van-tabbar-item>
    <van-tabbar-item  icon="more-o"  to='mores'>更多</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
data() {
    return {
      active: 0
    }
}
}
</script>


<style>

</style>
