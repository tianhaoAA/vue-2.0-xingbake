import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'  //首页
import Stores from '@/views/stores.vue'  //门店
import MyAccount from '@/views/myAccount.vue'  //我的账户

import Menus from '@/views/menus/index.vue'  //菜单
import MenusDrinks from '@/views/menus/drinks.vue'  //饮料
import MenusFood from '@/views/menus/food.vue'  //美食
import MenusCoffee from '@/views/menus/coffee.vue'  //美食
import MenusShop from '@/views/menus/shop.vue'  //美食


import Mores from '@/views/mores.vue'  //更多



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home //首页
  },
  {
    path: '/stores',
    name: 'stores',
    component: Stores //门店
  },
  {
    path: '/myAccount',
    name: 'myAccount',
    component: MyAccount //我的账户
  },

  {
    path: '/menus',
    name: 'menus',
    component:Menus, //菜单
  },
  {
    path: '/mores',
    name: 'mores',
    component: Mores //更多
  
  },
  {
    path: '/menus/drinks',
    name:'drinks',
    component: MenusDrinks //饮料
  },
  {
    path: '/menus/food',
    name:'food',
    component: MenusFood //美食
  },
  {
    path: '/menus/coffee',
    name:'coffee',
    component: MenusCoffee //咖啡
  },
  {
    path: '/menus/shop',
    name:'shop',
    component: MenusShop //商店
  },

]

const router = new VueRouter({
  routes
})

export default router
