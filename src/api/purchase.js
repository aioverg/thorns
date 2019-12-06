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

export default purchaseApi