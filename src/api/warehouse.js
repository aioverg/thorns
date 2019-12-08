import service from '../untils/service'

const warehouseApi = {}


//读取仓库数据接口
warehouseApi.warehouseData= data =>{
    return service({
        url: '/warehousemanagement',
        data: data,
        method: "get"
    })
}
//新增仓库数据接口
warehouseApi.addWarehouse= data =>{
    return service({
        url: '/addWarehouse',
        data: data,
        method: 'post'
    })
}
export default warehouseApi