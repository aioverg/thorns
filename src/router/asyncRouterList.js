//存放所有需要权限才能访问的路由表
export const asyncRouterList = [
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/main'),  //主页面组件
        children: {
            contrast: {
                path: '/analysis/contrast',
                name: 'contrast',
                component: () => import('../views/content/analysis/contrast')  //进销对比
            },
            procurementStatistics: {
                path: '/analysis/procurementstatistics',
                name: 'procurementStatistics',
                component: () => import('../views/content/analysis/procurementStatistics')  //采购统计
            },
            salesStatistics: {
                path: '/analysis/salesstatistics',
                name: 'salesStatistics',
                component: () => import('../views/content/analysis/salesStatistics')  //销售统计
            },

            //采购管理块--purchase
            purchase: {
                path: '/purchase/purchase',
                name: 'purchase',
                component: () => import('../views/content/purchase/purchase')  //商品采购
            },
            purchaseRturn: {
                path: '/purchase/purchaseReturn',
                name: 'purchaseRturn',
                component: () => import('../views/content/purchase/purchaseReturn')  //采购退货
            },
            purchaseOrder: {
                path: '/purchase/purchaseOrder',
                name: 'purchaseOrder',
                component: () => import('../views/content/purchase/purchaseOrder')  //采购订单
            },
            purchaseReturnOrder: {
                path: '/purchase/purchaseReturnOrder',
                name: 'purchaseReturnOrder',
                component: () => import('../views/content/purchase/purchaseReturnOrder')  //采购退货订单
            },
            addCommodity: {
                path: '/purchase/addCommodity',
                name: 'addCommodity',
                component: () => import('../views/content/purchase/addCommodity')  //新增商品
            },
            addSupplier: {
                path: '/purchase/addSupplier',
                name: 'addSupplier',
                component: () => import('../views/content/purchase/addSupplier')  //新增供应商
            },
            commodityManagement: {
                path: '/purchase/commodityManagemen',
                name: 'commodityManagement',
                component: () => import('../views/content/purchase/commodityManagement'),  //商品管理
                //meta: { power:true }
            },
            supplierManagement: {
                path: '/purchase/suppliermanagement',
                name: 'supplierManagement',
                component: () => import('../views/content/purchase/supplierManagement'),  //供应商管理
                //meta: { power:true },
            },
            //销售管理块--sales
            sales:{
                path: '/sales/sales',
                name: 'sales',
                component: () => import('../views/content/sales/sales')  //商品销售
            },
            salesReturn: {
                path: '/sales/salesReturn',
                name: 'salesReturn',
                component: () => import('../views/content/sales/salesReturn')  //销售退货
            },
            salesReturnOrder: {
                path: '/sales/salesReturnOrder',
                name: 'salesReturnOrder',
                component: () => import('../views/content/sales/salesReturnOrder')  //销售退货订单
            },
            salesOrder:{
                path: '/sales/salesOrder',
                name: 'salesOrder',
                component: () => import('../views/content/sales/salesOrder')  //销售订单
            },
            addCustomer: {
                path: '/sales/addCustomer',
                name: 'addCustomer',
                component: () => import('../views/content/sales/addCustomer')
            },
            customerManagement: {
                path: '/sales/customermanagement',
                name: 'customerManagement',
                component: () => import('../views/content/sales/customerManagement'),  //客户管理
                //meta: { power:true }
            },
            //仓库管理块--warehouse
            inventory: {
                path: '/warehouse/inventory',
                name: 'inventory',
                component: () => import('../views/content/warehouse/inventory')  //库存盘点
            },
            addWarehouse: {
                path: '/warehouse/addWarehouse',
                name: 'addWarehouse',
                component: () => import('../views/content/warehouse/addWarehouse')  //新增仓库
            },
            warehouseManagement: {
                path: '/warehouse/warehousemanagement',
                name: 'warehouseManagement',
                component: () => import('../views/content/warehouse/warehouseManagement'),  //仓库管理
                //meta: { power:true }
            },
            //财务结算块--financialSettlement
            customerCollection: {
                path: '/settlement/customercollection',
                name: 'customerCollection',
                component: () => import('../views/content/financialSettlement/customerCollection')  //客户收款
            },
            customerReconciliation: {
                path: '/settlement/customerreconciliation',
                name: 'customerReconciliation',
                component: () => import('../views/content/financialSettlement/customerReconciliation')  //客户对账
            },
            grossProfit: {
                path: '/settlement/grossprofit',
                name: 'grossProfit',
                component: () => import('../views/content/financialSettlement/grossProfit')  //毛利统计
            },
            supplierReconciliation: {
                path: '/settlement/supplierreconciliation',
                name: 'supplierReconciliation',
                component: () => import('../views/content/financialSettlement/supplierReconciliation')  //供应商对账
            },
            supplierRemittance: {
                path: '/settlement/supplierremittance',
                name: 'supplierRemittance',
                component: () => import('../views/content/financialSettlement/supplierRemittance')  //供应商汇款
            },

            //系统设置块--systemSetup
            changePassword:{
                path: '/system/changepassword',
                name: 'changePassword',
                component: () => import('../views/content/systemSetup/changePassword')  //修改密码
            },
            addAccount:{
                path: '/system/addaccount',
                name: '/addAccount/',
                component: ()=> import('../views/content/systemSetup/addAccount')  //添加账号
            },
            accountManagement: {
                path: '/system/accountmanagement',
                name: 'accountManagement',
                component: ()=> import('../views/content/systemSetup/accountManagement')  //账号管理
            },
            //没有权限块--errorPage
            noAuthority: {//没有权限显示的页面
                path: '/*',
                name: 'noAuthority',
                component: () => import('../views/content/errorPage/noAuthority')
            }
        }
    }
]