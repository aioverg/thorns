import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'  //导入登录组件
import main from '../components/main'    //导入主页面组件
import purchase from '../components/content/purchase/purchase'
import purchaseRturn from '../components/content/purchasereturn/purchaseReturn'

Vue.use(Router)

export default new Router({
    mode: 'hash', //使用hash模式
    routes: [
        {  //登录
            path: '/',
            name: 'login',
            component: login
        },
        {  //主页面
            path: '/main',
            name: 'main',
            component: main,
            children: [
                {
                    path: '/main',
                    name: 'purchase',
                    component: purchase
                },
                {
                    path: '/purchasreturn',
                    name: 'purchaseRturn',
                    component: purchaseRturn
                }
            ]
        }
    ]
})