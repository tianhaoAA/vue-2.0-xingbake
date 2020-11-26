<template>
<!-- 我的账户 -->
  <div>
    <div class="myAccount" v-if="!noLogin">
  <h1 class="title">  登录或创建一个新帐户 🌟 </h1>
  <van-tabs v-model="active" color='#00a862'>
  <van-tab title="登录">
     <account-login @loginSussess='loginSussess'></account-login>
  </van-tab>
  <van-tab title="注册">
    <account-register></account-register>
  </van-tab>
  <van-tab title="关于星享俱乐部">
    <account-star-club></account-star-club>
  </van-tab>
</van-tabs>
  </div>
  <div v-if="noLogin">
  登录成功
  </div>
  </div>
  
</template>

<script>

import AccountLogin from '@/components/myAccount/account-login'  //登录
import AccountRegister from '@/components/myAccount/account-register'  //注册
import AccountStarClub from '@/components/myAccount/account-star-club'  // 星享俱乐部

export default {
   components:{
     AccountLogin,
     AccountRegister,
     AccountStarClub
   },
    data(){
       return {
         active:0,
         noLogin:false
       }
    },
    methods:{
      loginSussess(){
        this.noLogin =true
      }
    },
    created(){
    this.noLogin = this.$store.state.isLogin
    // console.log(  this.$store.state.isLogin);
  }
}
</script>

<style lang='less' scoped>
.myAccount{
  .title{
    margin-left: 20px;
    font-size: 24px;
  } 
}
</style>