import service from '../untils/service'

const salesApi={}


//新增客户数据接口
salesApi.addCustomer = data => {
    return service({
        url: '/addCustomer',
        data: data,
        method: 'post'
    })
}

export default salesApi