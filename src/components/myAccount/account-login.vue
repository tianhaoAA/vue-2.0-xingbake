<template>
  <div>
  <div>
      <account-header></account-header>
    <div class="login">
      <van-field
        label="手机号"
        v-model.trim="loginForm.mobile"
        placeholder="请输入手机号"
      ></van-field>
      <van-field
        label="验证码"
        v-model.trim="loginForm.code"
        placeholder="请输入验证码"
      >
        <van-button
          slot="button"
          v-show="show"
          size="small"
          type="primary"
          @click="clickSendCode"
          >发送验证码</van-button
        >
        <van-button
          slot="button"
          size="small"
          type="primary"
          v-show="!show"
          class="count"
          >倒计时 {{ count }} s</van-button
        >
      </van-field>
      <van-button
        style="width: 100%; margin-top: 10px"
        type="primary"
        @click="clickLogin"
        >登录</van-button
      >

      <div class="login_footer">
        <div class="title_footer">加入星享俱乐部</div>
        <p>
          只需几分钟，便可成功注册星享俱乐部帐户，成为“星”会员，立即开启集星之旅。
        </p>
        <van-button
          round
          style="width: 80px; height: 30px; margin-top: 30px"
          type="primary"
          >注册</van-button
        >
      </div>
    </div>
  </div>

  
  </div>
</template>

<script>
import AccountHeader from "@/components/myAccount/account-header"; //头部
import { Toast } from "vant";
import { login } from "@/api/user.js";
export default {
  components: {
    AccountHeader,
  },
  data() {
    return {
      loginForm: {
        mobile: "13888888888", //手机号
        code: "246810", //验证码
      },
      show: true, //有没有发送验证码
      count: null, //倒计时
      timer: null, //清除定时器
    };
  },
  methods: {
    // 发送验证码
    clickSendCode() {
      if (!this.loginForm.mobile) {
        Toast.fail("请输入手机号");
        return false;
      }
      if (!/^1[3-9]\d{9}$/.test(this.loginForm.mobile)) {
        // 如果手机号不满足正则
        Toast.fail("手机号格式不正确");
        return false;
      }
      const TIME_COUNT = 10;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // 登录
    async clickLogin() {
      if (!this.loginForm.mobile) {
        Toast.fail("请输入手机号");
        return;
      }
      if (!this.loginForm.code) {
        Toast.fail("请输入验证码");
        return;
      }
      if (!/^1[3-9]\d{9}$/.test(this.loginForm.mobile)) {
        // 如果手机号不满足正则
        Toast.fail("手机号格式不正确");
        return false;
      }
      if (!/^\d{6}$/.test(this.loginForm.code)) {
        Toast.fail("验证码必须为6位数字");
        return false;
      }
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      try {
        const data = {
          mobile: this.loginForm.mobile,
          code: this.loginForm.code,
        };
        const result = await login(data);
        console.log("登录响应回来的数据", result);
        if (result.data.err_code === 1) {
          Toast.fail("验证码错误")
        } else if (result.data.err_code === 0) {
          // 表示登录成功
          this.$emit('loginSussess')
          this.$store.commit('SET_COM_LOGIN',true)
            Toast.clear()
        }
        
      } catch (error) {
        Toast.fail("服务器连接超时");
      }
    },
  },
  
};
</script>

<style scoped lang="less">
.login {
  margin-top: 10px;
  .login_footer {
    box-sizing: border-box;
    padding-top: 30px;
    margin-top: 100px;
    padding-left: 10px;
    width: 100%;
    height: 265px;
    background: url("../../assets/static/images/account-join/account-join-bg.png")
      no-repeat;
    background-size: cover;
    .title_footer {
      color: #fff;
    }
    P {
      font-size: 16px;
      color: #d8d8d8;
    }
  }
}
</style>