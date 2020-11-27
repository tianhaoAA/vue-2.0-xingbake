<template>
  <div>
     <van-button @click="clickGoback">返回</van-button>
      我是咖啡
  </div>
</template>

<script>
export default {
     data(){
         return{

         }
     },
     methods:{
        clickGoback(){
            this.$router.go(-1)
        } 
     }
}
</script>

<style>

</style>