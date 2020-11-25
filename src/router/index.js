import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'  //首页
import Stores from '@/views/stores.vue'  //门店
import MyAccount from '@/views/myAccount.vue'  //我的账户
import Menus from '@/views/menus.vue'  //菜单
import Mores from '@/views/mores.vue'  //更多

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stores',
    name: 'stores',
    component: Stores
  },
  {
    path: '/myAccount',
    name: 'myAccount',
    component: MyAccount
  },
  {
    path: '/menus',
    name: 'menus',
    component: Menus
  },
  {
    path: '/mores',
    name: 'mores',
    component: Mores
  },

]

const router = new VueRouter({
  routes
})

export default router
