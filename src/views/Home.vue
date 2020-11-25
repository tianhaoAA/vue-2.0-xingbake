<template>
  <!-- 首页 -->
  <div class="home">
    <div class="title">心情惬意，来杯咖啡吧 ☕</div>
    <div>
      <van-swipe class="swiper" :autoplay="3000">
        <!-- 轮播图区域 -->
        <van-swipe-item>
          <img
            src="../assets/static/images/featured/2019spring/kv-5-icecream.jpg"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="../assets/static/images/featured/2019spring/kv-3-mobile.jpg"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="../assets/static/images/featured/2019spring/kv-cake-2-mobile.jpg"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="../assets/static/images/featured/2019spring/kv-bev-1-mobile.jpg"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 图片区域 -->
    <div class="boxImgs">
      <div class="boxImgs_item">
        <img src="../assets/static/images/pages/tmall-0325-cn.jpg" alt="" />
      </div>
      <div class="boxImgs_item">
        <img
          src="../assets/static/images/pages/homepage-career-cn.jpg"
          alt=""
        />
      </div>
      <div class="boxImgs_item">
        <img src="../assets/static/images/pages/tmall-0325-cn.jpg" alt="" />
      </div>
    </div>
    <!-- 标题 -->
    <div class="club">
      <div class="clubTitle">星享俱乐部</div>
      <div class="text">开启您的星享之旅，星星越多、会员等级越</div>
      <div class="text">
        高、好礼越丰富。 <span class="textMore">了解更多></span>
      </div>
    </div>
    <div class="clubImg">
      <img
        src="../assets/static/images/sbux-rewards/01-new-rewards-title-mobile.png"
        alt=""
      />
    </div>
    <!-- 登录注册 -->
    <div class="loginOrRegister">
      <van-button round type="info" style="margin-right: 5px; height: 30px"
        >登录</van-button
      >
      <van-button round type="info" style="height: 30px">注册</van-button>
    </div>

    <div class="footer_Img">
      <div class="title_Img">
        <div class="titleName">星巴克精选</div>
        <p>在星巴克天猫旗舰店发现更多咖啡心意</p>
      </div>
    </div>

    <!-- 礼卡区域 -->
    <div class="cardBox">
      <div class="cardBox_item">
        <div><strong>会员星礼包</strong></div>
        <div>星享卡新升级</div>
        <div>更多心意好礼</div>
        <div>了解更多 ›</div>
        <img src="../assets/static/images/homepage/tmall-card-01.png" alt="">
      </div>
       <div class="cardBox_item">
        <div><strong>星礼卡</strong></div>
        <div>用一份心礼</div>
        <div>让心意相随</div>
        <div>了解更多 ›</div>
         <img src="../assets/static/images/homepage/tmall-card-02.png" alt="">
      </div>
       <div class="cardBox_item">
        <div><strong>电子产品券</strong></div>
        <div>心意</div>
        <div>从这一杯开始</div>
        <div>了解更多 ›</div>
         <img src="../assets/static/images/homepage/tmall-eticket.png" alt="">
      </div>
       <div class="cardBox_item">
        <div><strong>咖啡生活</strong></div>
        <div>星巴克</div>
        <div>用心制作</div>
        <div>了解更多 ›</div>
         <img src="../assets/static/images/homepage/tmall-reserve.png" alt="">
      </div>
    </div>

    <!-- 1921 派克街 | 咖啡星讲堂 -->
  <div class="box_1921">
        <div class="title_1921"> 1912 派克街 | 咖啡星讲堂</div>
        <div  class="title_1921"> 了解更多星巴克咖啡文化</div>
  </div>
     
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.home {
  overflow: hidden;
  .title {
    padding-top: 10px;
    padding-left: 20px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
  }
  .swiper {
    margin-top: 10px;
    width: 100%;
    height: 470px;
    van-swipe-item {
      width: 100%;
      height: 470px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .boxImgs {
    padding: 0 10px;
    .boxImgs_item {
      width: 100%;
      height: 200px;
      margin-top: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .club {
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    .clubTitle {
      // text-align: center;
      font-size: 22px;
      font-weight: 700;
    }
    .text {
      margin-top: 10px;
      font-size: 16px;
      .textMore {
        color: #c2a661;
      }
    }
  }
  .loginOrRegister {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    van-butto {
      height: 20px;
    }
  }
  .clubImg {
    width: 100%;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .footer_Img {
    .title_Img {
      text-align: center;
      .titleName {
        font-size: 18px;
        color: #000;
      }
      P {
        font-size: 18px;
      }
    }
  }
  .cardBox {
    width: 100%;
    padding: 20px 20px;
    display: flex;
    flex-wrap: wrap;
    .cardBox_item {
      position: relative;
      padding-top: 50px;
      margin-right: 20px;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      width: 40%;
      height: 160px;
      text-align: center;
      font-size: 12px;
      box-shadow: 0 0 10px rgba(0, 204, 204, 0.5);
      img{
        width: 100px;
        height: 72px;
        position: absolute;
        left: 50%;
        top: 0;
        margin-top: -36px;
        margin-left: -50px;
      }
    }
    .cardBox_item div:nth-child(1){
      margin-bottom: 15px;
    }
     .cardBox_item div:nth-child(2){
      color: rgba(0,0,0,.56);
    }
     .cardBox_item div:nth-child(3){
      color: rgba(0,0,0,.56);
      margin-bottom: 50px;
    }
      .cardBox_item div:nth-child(4){
        color: #c2a661;
    }
  }
  .box_1921{
    margin-top: 40px;
    .title_1921{
      text-align: center;
      font-size: 18px;
        margin-top: 20px;
    }
  }
  .box_1921  .title_1921:nth-child(1){
    font-weight: 400;
    font-size: 20px;
  
  }
    .box_1921  .title_1921:nth-child(2){
     color: rgba(0,0,0,.56);
        font-size: 16px;
  }
}
</style>