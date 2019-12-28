import service from '../untils/service'

const warehouseApi = {}



//新增仓库数据接口
warehouseApi.addWarehouse= data =>{
    return service({
        url: '/addWarehouse',
        data: data,
        method: 'post'
    })
}
//根据仓库ID查询仓库货品
warehouseApi.queryStock = data => {
    return service({
        url: '/warehouse/inventory',
        data: data,
        method: 'get'
    })
}
export default warehouseApi