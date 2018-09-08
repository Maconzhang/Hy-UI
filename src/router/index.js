import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import HelloWorld3 from '@/components/HelloWorld3'
import index from '@/components/index'
import govWeb from '@/components/govWeb'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/hello',
    //   name: 'HelloWorld2',
    //   component: HelloWorld2
    // },
    // {
    //   path: '/hello3',
    //   name: 'HelloWorld3',
    //   component: HelloWorld3
    // },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/',
      name: '首页',
      component: govWeb
    },
    {
      path: '/liuBike',
      name: '小遛电单车',
      component: () => import('@/components/liuBike'),
    },
    {
      path: '/aboutUs',
      name: '关于我们',
      component: () => import('@/components/about'),
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
