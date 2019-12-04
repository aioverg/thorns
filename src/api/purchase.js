import service from '../untils/service'

const purchaseApi = {}
//读取供应商数据接口
purchaseApi.supplierData= () => {
    return service({
        url: '/suppliermanagement',
        method: 'get'
    })
}


export default purchaseApi