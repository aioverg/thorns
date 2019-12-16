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

//商品采购-填入商品名称搜索商品信息
purchaseApi.queryCommodityName = data =>{
    return service(
        {
            url: '/queryCommodityName',
            data: data,
            method: 'get'
        }
    )
}

//商品采购-提交订单
purchaseApi.postPurchaseOrder = data =>{
    return service(
        {
            url: '/postPurchaseOrder',
            data: data,
            method: 'post'
        }
    )
}

//根据ID查询采购订单
purchaseApi.orderId = data => {
    return service(
        {
            url: '/orderID',
            data: data,
            method: 'get'
        }
    )
}
export default purchaseApi