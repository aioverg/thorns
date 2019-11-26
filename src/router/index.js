import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'  //登录页面组件
import main from '../components/main'    //主页面组件
import purchase from '../components/content/purchase/purchase'  //商品采购
import purchaseRturn from '../components/content/purchasereturn/purchaseReturn'  //采购退货
import sell from '../components/content/sell/sell'  //商品销售
import sellReturn from '../components/content/sellreturn/sellReturn'  //销售退货
import inventory from '../components/content/inventory/inventory'  //库存盘点
import contrast from '../components/content/analysis/contrast'  //进销对比
import procurementStatistics from '../components/content/analysis/procurementStatistics'  //采购统计
import salesStatistics from '../components/content/analysis/salesStatistics'  //销售统计
import grossProfit from '../components/content/settlement/grossProfit'  //毛利统计
import customerCollection from '../components/content/settlement/customerCollection' //客户收款
import customerReconciliation from '../components/content/settlement/customerReconciliation'  //客户对账
import supplierReconciliation from '../components/content/settlement/supplierReconciliation'  //供应商对账
import supplierRemittance from '../components/content/settlement/supplierRemittance'  //供应商汇款
import warehouseManagement from '../components/content/system/warehouseManagement'  //仓库管理
import commodityManagement from '../components/content/system/commodityManagement'  //商品管理
import supplierManagement from '../components/content/system/supplierManagement'  //供应管理
import customerManagement from '../components/content/system/customerManagement'  //客户管理
import privilegeManagement from '../components/content/system/privilegeManagement'  //权限管理

Vue.use(Router)

//通用路由
export const constantRouter = {
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
                },
                {
                    path: '/sell',
                    name: 'sell',
                    component: sell
                },
                {
                    path: '/sellreturn',
                    name: 'sellReturn',
                    component: sellReturn
                },
                {
                    path: '/inventory',
                    name: 'inventory',
                    component: inventory
                },
                {
                    path: '/analysis/contrast',
                    name: 'contrast',
                    component: contrast
                },
                {
                    path: '/analysis/procurementstatistics',
                    name: 'procurementStatistics',
                    component: procurementStatistics
                },
                {
                    path: '/analysis/salesstatistics',
                    name: 'salesStatistics',
                    component: salesStatistics
                },
                {
                    path: '/settlement/customercollection',
                    name: 'customerCollection',
                    component: customerCollection
                },
                {
                    path: '/settlement/customerreconciliation',
                    name: 'customerReconciliation',
                    component: customerReconciliation
                },
                {
                    path: '/settlement/grossprofit',
                    name: 'grossProfit',
                    component: grossProfit
                },
                {
                    path: '/settlement/supplierreconciliation',
                    name: 'supplierReconciliation',
                    component: supplierReconciliation
                },
                {
                    path: '/settlement/supplierremittance',
                    name: 'supplierRemittance',
                    component: supplierRemittance
                },
            ]
        }
    ]
}

//需要权限的路由，异步路由
export const asyncRouter={
    mode: 'hash',
    routes: [
        {
            path: '/main',
            name: 'main',
            component: main,
            children:[
                {
                    path: '/system/warehousemanagement',
                    name: 'warehouseManagement',
                    component: warehouseManagement,
                    meta: { power:true }
                },
                {
                    path: '/system/commoditymanagement',
                    name: 'commodityManagement',
                    component: commodityManagement,
                    meta: { power:true }
                },
                {
                    path: '/system/suppliermanagement',
                    name: 'supplierManagement',
                    component: supplierManagement,
                    meta: { power:true },
                },
                {
                    path: '/system/customermanagement',
                    name: 'customerManagement',
                    component: customerManagement,
                    meta: { power:true }
                },
                {
                    path: '/system/privilegemanagement',
                    name: 'privilegeManagement',
                    component: privilegeManagement,
                    meta: { power:true }
                }
            ]
        }
    ]
}

export default new Router(constantRouter)