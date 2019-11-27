import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//通用路由
export const constantRouter = [
    {  //登录
        path: '/',
        name: 'login',
        component: () => import('../components/login')  //登录页面组件
    },
    {  //主页面
        path: '/main',
        name: 'main',
        component: () => import('../components/main'),  //主页面组件
        children: [
            {
                path: '/main',
                name: 'purchase',
                component: () => import('../components/content/purchase/purchase')  //商品采购
            },
            {
                path: '/purchasreturn',
                name: 'purchaseRturn',
                component: () => import('../components/content/purchasereturn/purchaseReturn')  //采购退货
            },
            {
                path: '/sell',
                name: 'sell',
                component: () => import('../components/content/sell/sell')  ////商品销售
            },
            {
                path: '/sellreturn',
                name: 'sellReturn',
                component: () => import('../components/content/sellreturn/sellReturn')  //销售退货
            },
            {
                path: '/inventory',
                name: 'inventory',
                component: () => import('../components/content/inventory/inventory')  //库存盘点
            },
            {
                path: '/analysis/contrast',
                name: 'contrast',
                component: () => import('../components/content/analysis/contrast')  //进销对比
            },
            {
                path: '/analysis/procurementstatistics',
                name: 'procurementStatistics',
                component: () => import('../components/content/analysis/procurementStatistics')  //采购统计
            },
            {
                path: '/analysis/salesstatistics',
                name: 'salesStatistics',
                component: () => import('../components/content/analysis/salesStatistics')  //销售统计
            },
            {
                path: '/settlement/customercollection',
                name: 'customerCollection',
                component: () => import('../components/content/settlement/customerCollection')  //客户收款
            },
            {
                path: '/settlement/customerreconciliation',
                name: 'customerReconciliation',
                component: () => import('../components/content/settlement/customerReconciliation')  //客户对账
            },
            {
                path: '/settlement/grossprofit',
                name: 'grossProfit',
                component: () => import('../components/content/settlement/grossProfit')  //毛利统计
            },
            {
                path: '/settlement/supplierreconciliation',
                name: 'supplierReconciliation',
                component: () => import('../components/content/settlement/supplierReconciliation')  //供应商对账
            },
            {
                path: '/settlement/supplierremittance',
                name: 'supplierRemittance',
                component: () => import('../components/content/settlement/supplierRemittance')  //供应商汇款
            },
        ]
    }
]

//需要权限的路由，异步路由
export const asyncRouter = [
    //{
    //    path: '/main',
    //    name: 'main',
    //    component: () => import('../components/main'),  //主页面组件
    //    children: [
            {
                path: '/system/warehousemanagement',
                name: 'warehouseManagement',
                component: () => import('../components/content/system/warehouseManagement'),  //仓库管理
                //meta: { power:true }
            },
            {
                path: '/system/commoditymanagement',
                name: 'commodityManagement',
                component: () => import('../components/content/system/commodityManagement'),  //商品管理
                //meta: { power:true }
            },
            {
                path: '/system/suppliermanagement',
                name: 'supplierManagement',
                component: () => import('../components/content/system/supplierManagement'),  //供应管理
                //meta: { power:true },
            },
            {
                path: '/system/customermanagement',
                name: 'customerManagement',
                component: () => import('../components/content/system/customerManagement'),  //客户管理
                //meta: { power:true }
            },
            {
                path: '/system/privilegemanagement',
                name: 'privilegeManagement',
                component: () => import('../components/content/system/privilegeManagement'),  //权限管理
                //meta: { power:true }
            }
    //    ]
    //}
]

const createRouter = () => new Router({
    routes: constantRouter
})
const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher //改变用户登录重新载入路由
  }

router.addRoutes(asyncRouter)

export default router
