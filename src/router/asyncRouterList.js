//存放所有需要权限才能访问的路由表
export const asyncRouterList = [
    {
        path: '/main',
        name: 'main',
        component: () => import('../components/main'),  //主页面组件
        children: {
            purchase: {
                path: '/main',
                name: 'purchase',
                component: () => import('../components/content/purchase/purchase')  //商品采购
            },
            purchaseRturn: {
                path: '/purchasreturn',
                name: 'purchaseRturn',
                component: () => import('../components/content/purchaseReturn/purchaseReturn')  //采购退货
            },
            sales:{
                path: '/sales',
                name: 'sales',
                component: () => import('../components/content/sales/sales')  ////商品销售
            },
            salesReturn: {
                path: '/salesreturn',
                name: 'salesReturn',
                component: () => import('../components/content/salesReturn/salesReturn')  //销售退货
            },
            inventory: {
                path: '/inventory',
                name: 'inventory',
                component: () => import('../components/content/inventory/inventory')  //库存盘点
            },
            contrast: {
                path: '/analysis/contrast',
                name: 'contrast',
                component: () => import('../components/content/analysis/contrast')  //进销对比
            },
            procurementStatistics: {
                path: '/analysis/procurementstatistics',
                name: 'procurementStatistics',
                component: () => import('../components/content/analysis/procurementStatistics')  //采购统计
            },
            salesStatistics: {
                path: '/analysis/salesstatistics',
                name: 'salesStatistics',
                component: () => import('../components/content/analysis/salesStatistics')  //销售统计
            },
            customerCollection: {
                path: '/settlement/customercollection',
                name: 'customerCollection',
                component: () => import('../components/content/financialSettlement/customerCollection')  //客户收款
            },
            customerReconciliation: {
                path: '/settlement/customerreconciliation',
                name: 'customerReconciliation',
                component: () => import('../components/content/financialSettlement/customerReconciliation')  //客户对账
            },
            grossProfit: {
                path: '/settlement/grossprofit',
                name: 'grossProfit',
                component: () => import('../components/content/financialSettlement/grossProfit')  //毛利统计
            },
            supplierReconciliation: {
                path: '/settlement/supplierreconciliation',
                name: 'supplierReconciliation',
                component: () => import('../components/content/financialSettlement/supplierReconciliation')  //供应商对账
            },
            supplierRemittance: {
                path: '/settlement/supplierremittance',
                name: 'supplierRemittance',
                component: () => import('../components/content/financialSettlement/supplierRemittance')  //供应商汇款
            },
            warehouseManagement: {
                path: '/system/warehousemanagement',
                name: 'warehouseManagement',
                component: () => import('../components/content/systemSetup/warehouseManagement'),  //仓库管理
                //meta: { power:true }
            },
            commodityManagement: {
                path: '/system/commoditymanagement',
                name: 'commodityManagement',
                component: () => import('../components/content/systemSetup/commodityManagement'),  //商品管理
                //meta: { power:true }
            },
            supplierManagement: {
                path: '/system/suppliermanagement',
                name: 'supplierManagement',
                component: () => import('../components/content/systemSetup/supplierManagement'),  //供应管理
                //meta: { power:true },
            },
            customerManagement: {
                path: '/system/customermanagement',
                name: 'customerManagement',
                component: () => import('../components/content/systemSetup/customerManagement'),  //客户管理
                //meta: { power:true }
            },
            changePassword:{
                path: '/accountmanagement/changepassword',
                name: 'changePassword',
                component: () => import('../components/content/accountManagement/changePassword')  //修改密码
            },
            addAccount:{
                path: '/accountmanagement/addaccount',
                name: '/addAccount/',
                component: ()=> import('../components/content/accountManagement/addAccount')  //添加账号
            },
            accountManagement: {
                path: '/accountmanagement/accountmanagement',
                name: 'accountManagement',
                component: ()=> import('../components/content/accountManagement/accountManagement')  //账号管理
            },
            noAuthority: {//没有权限显示的页面
                path: '/*',
                name: 'noAuthority',
                component: () => import('../components/content/errorPage/noAuthority')
            }
        }
    }
]