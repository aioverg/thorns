const user = {
    admin:{
        name: 'admin',
        password:'admin',
        authority:{
            analysis: [
                "contrast",
                "procurementStatistics",
                "salesStatistics"
            ],
            purchase: [
                "purchase",
                "purchaseRturn",
                "purchaseOrder",
                "purchaseReturnOrder",
                "addCommodity",
                "commodityManagement",
                "addSupplier",
                "supplierManagement"
            ],
            sales: [
                "sales",
                "salesReturn",
                "salesReturnOrder",
                "salesOrder",
                "addCustomer",
                "customerManagement"
            ],
            warehouse: [
                "inventory",
                "addWarehouse",
                "warehouseManagement"
            ],
            finance: [
                "grossProfit",
                "customerCollection",
                "customerReconciliation",
                "supplierReconciliation",
                "supplierRemittance"
            ],
            system: [
                "changePassword",
                "addAccount",
                "accountManagement"
            ]
        }
    },
    user:{
        name: 'user',
        password: 'user',
        authority:{}
    }
}

export default user