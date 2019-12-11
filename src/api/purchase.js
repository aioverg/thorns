import service from '../untils/service'

const purchaseApi = {}

//读取供应商数据接口
purchaseApi.supplierData= data => {
    return service({
        url: '/suppliermanagement',  //API地址
        data: data,    //发送的数据
        method: 'get'  //请求方法
    })
}
//新增供应商数据接口
purchaseApi.addSupplier= data => {
    return service({
        url: '/addSupplier',
        data: data,
        method: "post"
    })
}


//读取商品数据接口
purchaseApi.commodityData= data =>{
    return service({
        url: '/commodityManagemen',
        data: data,
        method: "get"
    })
}
//新增商品数据接口
purchaseApi.addCommodity= data =>{
    return service({
        url: '/addCommodity',
        data: data,
        method: 'post'
    })
}

//读取订单数据接口
purchaseApi.orderData = data => {
    return service({
        url: '/purchaseOrder',
        data: data,
        method: 'get'
    })
}
//订单详情数据接口
purchaseApi.orderDetailsData = data =>{
    return service({
        url: '/purchaseOrderDetails',
        data: data,
        method: 'get'
    })
}
//搜索供应商数据接口
purchaseApi.querySupplierName = data =>{
    return service({
        url: '/querySupplierName',
        data: data,
        method: 'get'
    })
}
export default purchaseApi