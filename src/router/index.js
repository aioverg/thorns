import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//通用路由
export const constantRouter = [
    {  //登录
        path: '/',
        name: 'login',
        component: () => import('../views/login')  //登录页面组件
    }
]

//需要权限的路由，异步路由，在./permission.js中
const createRouter = () => new Router({
    routes: constantRouter
})
const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher //改变用户登录重新载入路由
  }


export default router
