import service from '../untils/service'

const purchaseApi = {}


//新增供应商-提交新增供应商数据
purchaseApi.addSupplier= data => {
    return service({
        url: '/addSupplier',
        data: data,
        method: "post"
    })
}

//新增商品-提交新增商品数据
purchaseApi.addCommodity= data =>{
    return service({
        url: '/addCommodity',
        data: data,
        method: 'post'
    })
}

//采购订单-订单详情数据
purchaseApi.orderDetailsData = data =>{
    return service({
        url: '/purchaseOrderDetails',
        data: data,
        method: 'get'
    })
}
//采购订单-根据ID查询采购订单
purchaseApi.orderId = data => {
    return service(
        {
            url: '/orderID',
            data: data,
            method: 'get'
        }
    )
}
//商品采购-根据商品名称搜索商品信息
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

//退货订单-订单详情
purchaseApi.returnOrderDetails = data => {
    return service(
        {
            url: '/purchaseReturnOrder/queryPurchaseReturnOrderDetails',
            data: data,
            method: 'get'
        }
    )
}

//采购退货-提交
purchaseApi.postReturnOrder = data => {
    return service(
        {
            url: '/purchaseReturn/postPurchaseReturnOrder',
            data: data,
            method: 'post'
        }
    )
}
export default purchaseApi