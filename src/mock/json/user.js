//完整数据
const data = {
    admin:{
        name: 'admin',
        password:'admin',
        sort: "管理",
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
                "modityAccount",
                "accountManagement"
            ]
        }
    },
    saleser:{
        name: 'saleser',
        password: 'saleser',
        sort: "销售",
        authority:{
            analysis: [
                "contrast",
                "procurementStatistics",
                "salesStatistics"
            ],
            sales: [
                "sales",
                "salesReturn",
                "salesReturnOrder",
                "salesOrder",
                "addCustomer",
                "customerManagement"
            ],
            system: [
                "changePassword",
            ]
        }
    }
}

//简化数据
const dataArray = [
    ['admin', "管理"],
    ['saleser', "销售"]
]


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

user.nameData = option => {  //返回数据
    const query=[]
    const body=JSON.parse(option.body)
    if(body.queryValue){
        for(var i in dataArray){
            for(var j in dataArray){
                if(body.queryValue==dataArray[i][j]){
                    query.push(dataArray[i])
                }
            }
        }
        return [query.slice(body.size*(body.page-1),body.size*body.page), query.length]
    }
    if(!body.queryValue){
        return [dataArray.slice(body.size*(body.page-1),body.size*body.page), dataArray.length]
    }
}

user.addData = option => {
    const acceptData = JSON.parse(option.body)
    const arr = []
    data[acceptData.name] = acceptData
    arr.push(acceptData.name)
    arr.push(acceptData.sort)
    dataArray.unshift(arr)
}

user.allData = option => {
    return data[option.body]
}

user.modifyData = option => {
    const acceptData = JSON.parse(option.body)
    const arr = []
    arr.push(acceptData.name)
    arr.push(acceptData.sort)
    for(let i in dataArray){
        if(dataArray[i][0] == acceptData.oldName){
            dataArray.splice(i, 1, arr)
        }
    }
    delete data[acceptData.oldName]
    data[acceptData.name] = acceptData
    return alert("修改成功")
}

user.changePassword = option => {
    const acceptData = JSON.parse(option.body)
    data[acceptData[0]].password = acceptData[1]
}
export default user