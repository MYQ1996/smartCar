import Vue from 'vue'
import Router from 'vue-router'
import 'font-awesome/css/font-awesome.css'
import HelloWorld from '@/pages/HelloWorld/HelloWorld'
import login from '@/pages/login/login'
import home from '@/pages/home/home'
import setUp from '@/pages/setUp/setUp'
import productDdetails from '@/pages/product-details/product-details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/productDdetails',
      name: 'productDdetails',
      component: productDdetails
    },
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/setUp',
      name: 'setUp',
      component: setUp
    }, {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
