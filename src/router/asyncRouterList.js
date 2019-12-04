//存放所有需要权限才能访问的路由表
export const asyncRouterList = [
    {
        path: '/main',
        name: 'main',
        component: () => import('../components/main'),  //主页面组件
        children: {
            //进销分析块--analysis
            main: {
                path:"/main",
                
                component: () => import('../components/content/analysis/contrast')
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

            //采购管理块--purchase
            purchase: {
                path: '/purchase/purchase',
                name: 'purchase',
                component: () => import('../components/content/purchase/purchase')  //商品采购
            },
            purchaseRturn: {
                path: '/purchase/purchaseReturn',
                name: 'purchaseRturn',
                component: () => import('../components/content/purchase/purchaseReturn')  //采购退货
            },
            addCommodity: {
                path: '/purchase/addCommodity',
                name: 'addCommodity',
                component: () => import('../components/content/purchase/addCommodity')  //新增商品
            },
            addSupplier: {
                path: '/purchase/addSupplier',
                name: 'addSupplier',
                component: () => import('../components/content/purchase/addSupplier')  //新增供应商
            },
            commodityManagement: {
                path: '/purchase/commodityManagemen',
                name: 'commodityManagement',
                component: () => import('../components/content/purchase/commodityManagement'),  //商品管理
                //meta: { power:true }
            },
            supplierManagement: {
                path: '/purchase/suppliermanagement',
                name: 'supplierManagement',
                component: () => import('../components/content/purchase/supplierManagement'),  //供应商管理
                //meta: { power:true },
            },
            //销售管理块--sales
            sales:{
                path: '/sales/sales',
                name: 'sales',
                component: () => import('../components/content/sales/sales')  //商品销售
            },
            salesReturn: {
                path: '/sales/salesReturn',
                name: 'salesReturn',
                component: () => import('../components/content/sales/salesReturn')  //销售退货
            },
            customerManagement: {
                path: '/sales/customermanagement',
                name: 'customerManagement',
                component: () => import('../components/content/sales/customerManagement'),  //客户管理
                //meta: { power:true }
            },
            //仓库管理块--warehouse
            inventory: {
                path: '/warehouse/inventory',
                name: 'inventory',
                component: () => import('../components/content/warehouse/inventory')  //库存盘点
            },
            newWarehouse: {
                path: '/warehouse/newWarehouse',
                name: 'newWarehouse',
                component: () => import('../components/content/warehouse/newWarehouse')  //新增仓库
            },
            warehouseManagement: {
                path: '/warehouse/warehousemanagement',
                name: 'warehouseManagement',
                component: () => import('../components/content/warehouse/warehouseManagement'),  //仓库管理
                //meta: { power:true }
            },
            //财务结算块--financialSettlement
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

            //系统设置块--systemSetup
            changePassword:{
                path: '/system/changepassword',
                name: 'changePassword',
                component: () => import('../components/content/systemSetup/changePassword')  //修改密码
            },
            addAccount:{
                path: '/system/addaccount',
                name: '/addAccount/',
                component: ()=> import('../components/content/systemSetup/addAccount')  //添加账号
            },
            accountManagement: {
                path: '/system/accountmanagement',
                name: 'accountManagement',
                component: ()=> import('../components/content/systemSetup/accountManagement')  //账号管理
            },
            //没有权限块--errorPage
            noAuthority: {//没有权限显示的页面
                path: '/*',
                name: 'noAuthority',
                component: () => import('../components/content/errorPage/noAuthority')
            }
        }
    }
]