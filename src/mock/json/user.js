const user = {
    'admin':{
        'name': 'admin',
        'password':'admin',
        'power':{
            purchase: true,
            purchaseRturn: true,
            purchaseOrder: true,
            purchaseReturnOrder: true,
            addSupplier: true,
            addCommodity: true,
            sales: true,
            salesReturn: true,
            salesReturnOrder: true,
            salesOrder: true,
            inventory: true,
            addWarehouse: true,
            contrast: true,
            procurementStatistics: true,
            salesStatistics: true,
            customerCollection: true,
            addCustomer: true,
            customerReconciliation: true,
            grossProfit: true,
            supplierReconciliation: true,
            supplierRemittance: true,
            warehouseManagement: true,
            commodityManagement: true,
            supplierManagement: true,
            customerManagement: true,
            changePassword: true,
            addAccount: true,
            accountManagement: true,
            noAuthority: true,   //没有权限显示的页面
        }
    },
    'user':{
        'name': 'user',
        'password': 'user',
        'power':[]
    }
}

export default user