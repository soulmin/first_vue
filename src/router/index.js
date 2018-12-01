import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import contact from '@/components/contact'
import Add from '@/components/Add'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve=>require(['../components/Home.vue'],resolve)
    },
    {
      path: '/about.html',
      name: '关于我们',
      component: resolve=>require(['../components/About.vue'],resolve)
    },
    {
      path: '/contact.html',
      name: '联系我们',
      component: resolve=>require(['../components/contact.vue'],resolve)
    },
    {
      path: '/hr.html',
      name: '加入我们',
      component: resolve=>require(['../components/Add.vue'],resolve)
    }
  ]
})
