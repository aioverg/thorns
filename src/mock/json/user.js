const data = {
    admin:{
        name: 'admin',
        password:'admin',
        sort: "管理员",
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
        sort: "销售",
        authority:{}
    }
}

const user = {}
user.login = option => {
    //const query = {}
    const optionData = JSON.parse(option.body)
    if(data[optionData.name] && data[optionData.name].password==optionData.password){
        return data[optionData.name]
    }
    else{
        return "error"
    }
}
export default user