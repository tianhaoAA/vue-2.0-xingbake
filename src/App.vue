<template>
  <div id="app">
    <router-view/>
 <div style="height: 2rem;"></div>
  <!-- 开启路由模式 -->
    <van-tabbar router  v-model="active">
    <van-tabbar-item to='/' icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon='shop-o' to='/stores'>门店</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='myAccount'>我的账户</van-tabbar-item>
    <van-tabbar-item icon='shopping-cart-o' to='/menus'>菜单</van-tabbar-item>
    <van-tabbar-item  icon="more-o"  to='/mores'>更多</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
data() {
    return {
      active: 0
    }
},
created(){
  if( this.$route.path==='/'){
    this.active =0

  }else if ( this.$route.path==='/stores'){
    this.active =1
  }
  else if ( this.$route.path==='/myAccount'){
    this.active =2
  }
  else if ( this.$route.path==='/menus'){
    this.active =3
  }else if ( this.$route.path==='/mores'){
    this.active =4
  }
//  console.log( '当前的路由',  this.$route.path);
}
}
</script>


<style>

</style>
