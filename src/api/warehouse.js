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
export default warehouseApi