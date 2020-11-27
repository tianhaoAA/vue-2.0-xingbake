<template>
 <div>
    <div class="menus">
    <div class="titleName">
       菜单
    </div>

  <div class="tabs" v-if="this.$route.path==='/menus'">
  <van-tabs v-model="active" color='#00a862'>
  <van-tab title="季度精选" ></van-tab>
  <van-tab title="饮料" to="/menus/drinks"></van-tab>
  <van-tab title="美食"  to="/menus/food">美食</van-tab>
  <van-tab title="咖啡产品"  to="/menus/coffee">咖啡产品</van-tab>
  <van-tab title="商店" to="/menus/shop">商店</van-tab>

  
</van-tabs>
  </div>
  </div>
  <div class="boxImg">
      <img src="../../assets/static/images/featured/2019spring/banner-1-mobile.jpg" alt="">
  </div>
 <div class="boxInnerText" v-for="(item,index) in 3" :key="index">
     <div class="h2">
    星巴克玩味冰调™，开启轻盈一夏
  </div>
  <p>这一季，我们带着探索与发现的好奇心，来一场视觉与味觉的双重碰撞。</p>
  <p>玩味冰调作为今夏全新的产品品类登场，</p>
  <p>以鸡尾酒为灵感，突破茶与咖啡的传统定义，精心调制出富于层次感的全新饮品
    。零脂、真材实料、不添加化学合成色素和甜味剂，满足身为潮人的你,对“美味”和“零负担”
    的双重标准。</p>
    <img  class="img335" src="../../assets/static/images/featured/2019spring/featured-2-mobile.jpg" alt="">
 </div>
 <!-- 所新品 -->
      <div class="orNewProducts"> 所有新品</div>
     <div class="products" v-for="(index) in 5" :key="index">
          <div class="productsText">
             <img src="../../assets/static/images/featured/2019spring/blueberry-passion-pearl-fizz.jpg" alt="">
            <div class="productitle"> 蓝莓星空 </div>
          </div>
         <div class="productsText">
            <img src="../../assets/static/images/featured/2019spring/citrus-mint-mojito.jpg" alt="">
         <div class="productitle">  橘香茉吉托 </div>
         </div>
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
        //   console.log(this.$route.path);
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
  .boxImg{
    margin-top: 10px;
    width: 100%;
    height: 439px;

    img{
      width: 100%;
      height: 100%;
    }
  }
  .boxInnerText{
    text-align: center;
    padding: 10px;
    font-size: 16px;
    .h2{
      font-size: 20px;
    }
    .img335{
      margin-top: 10px;
      width: 100%;
      height: 335px;
    }
  }
  .products{
    // flex-direction: column;
    margin-bottom: 30px;
    width: 100%;
    display: flex ;
    justify-content: space-around;
    // text-align: center;
    font-size: 16px;
    img{
      width: 150px;
      height: 100px;
    }
    .productsText{
      display: flex ;
      justify-content: center;
      flex-direction: column;
      .productitle{
        margin-top: 20px;
      text-align: center; 
    }
    }
    
  }
  .orNewProducts{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }
</style>