import service from '../untils/service'

const salesApi={}

//读取客户数据接口
salesApi.customerData = data => {
    return service({
        url: '/customerManagement',
        data: data,
        method: 'get'
    })
}
//新增客户数据接口
salesApi.addCustomer = data => {
    return service({
        url: '/addCustomer',
        data: data,
        method: 'post'
    })
}

export default salesApi