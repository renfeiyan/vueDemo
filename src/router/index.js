import Vue from 'vue'
import Router from 'vue-router'
import drawerDemo from '@/components/drawer/drawerDemo'
import color from '@/components/colorPickDemo/color'
import cart from '@/components/cart/cartDemo'
import vuexD from '@/components/vuexDemo/vuexDemo'
import drawerSelf from '@/components/DrawerFile/drawerSelf'
import login from '@/components/backManage/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'drawerSelf',
      component: drawerSelf
    },{
      path: '/drawerSelf',
      name: 'drawerSelf',
      component: drawerSelf
    } ,{
      path: '/color',
      name: 'color',
      component: color
    }, {
      path: '/cart',
      name: 'cart',
      component: cart
    }, {
      path: '/vuexD',
      name: 'vuexD',
      component: vuexD
    },
    {
      path: '/drawerDemo',
      name: 'drawerDemo',
      component: drawerDemo
    },,
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
