<template>
  
<div class="menus">
  <input type="text" style="width:100%" placeholder="请输入客户信息" class="inputInfo" v-model="searchcursom"  v-on:focus="focusCustomer()" v-on:blur="blurCustomer()" />
   <div v-show="show&&searchcursom.length>1" class="scroll">
     <ul ref="search">
     <li  v-for="(item, index) in list" :value="item" :key="index" @click="chooseCustomer(item)">{{item}}</li>
     <li  v-show="!list.length">没有查到数据</li>
   </ul>
   </div>
  

  <!-- <div> {{searchcursom}}</div> -->
</div>
</template>

<script>
 import Bscroll from 'better-scroll'
export default {
data(){
  return{
    searchcursom:'', //查询的关键词
    list:[ '河北省唐山市丰南区','河北省唐山市路北区','河北省唐山市高新区','河北省唐山市丰南区','河北省唐山市路北区','河北省唐山市高新区','河北省唐山市丰南区','河北省唐山市路北区','河北省唐山市高新区','河北省唐山市丰南区','河北省唐山市路北区','河北省唐山市高新区'], //查询返回来的数组
    show:false
  }
},

watch: {
  'searchcursom': {
    handler: function() {
      this.focusCustomer()
    }
  }
},
methods:{
  chooseCustomer(value){
    console.log(value);
    this.searchcursom=value
  },
  focusCustomer(){
    if(document.querySelector('input') == document.activeElement){
    // this.getSelectData(this.searchcursom.trim());
  }
    this.show =true
  // console.log(1);
  },
  blurCustomer(){
  
    this.show =false
      console.log(    this.searchcursom);
  // console.log(2);
  }
},

mounted() {
   this.scroll = new Bscroll(this.$refs.search,{
     click: true 
   })
  let that = this
  document.addEventListener('click',function(e){
    console.log(e);
    if(e.target.className != 'inputInfo'){
      that.$nextTick(() => {
        that.show = false;
      })
    }
  })
}
}
</script>

<style scoped lang='less'>
.menus{
  overflow: hidden;
}
.scroll{
    width: 100%;
  height: 150px;
  overflow-y:scroll;
}
.inputInfo{
  font-size: 18px;
}
ul{

  width: 100%;
  height: 100px;
  border: 1px solid #cccccc;
  // text-align: center;
  // overflow: hidden;
}
li {
  -webkit-app-region:no-drag;
    font-size: 18px;
  list-style-type:none
}
</style>