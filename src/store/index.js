import Vue from 'vue'
import Vuex from 'vuex'
import { GET_SESSION_STORAGE, SET_SESSION_STORAGE } from "@/utils/sessionStorage.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:GET_SESSION_STORAGE('login') ||false
  },
  mutations: {
      // 设置是否登录
      SET_COM_LOGIN: (state, params) => {
        SET_SESSION_STORAGE("login", params);
        state.isLogin = params;
    },
  },
  actions: {
  },
  modules: {
  }
})
