import router from './index'
import {asyncRouterList} from './asyncRouterList'

//一个路由表
const newRouterList = [{
    path: '/main',
    name: 'main',
    component: () => import('../components/main'),  //主页面组件
    children: []
}]
//权限数据
const power={
    main: true,
    purchase: true,
    purchaseRturn: true,
    addSupplier: true,
    addCommodity: true,
    sales: true,
    salesReturn: true,
    inventory: true,
    addWarehouse: true,
    contrast: true,
    procurementStatistics: true,
    salesStatistics: true,
    customerCollection: true,
    addCustomer: true,
    customerReconciliation: true,
    grossProfit: true,
    supplierReconciliation: true,
    supplierRemittance: true,
    warehouseManagement: true,
    commodityManagement: true,
    supplierManagement: true,
    customerManagement: true,
    changePassword: true,
    addAccount: true,
    accountManagement: true,
    noAuthority: true,   //没有权限显示的页面
}

//根据权限数据，从所有路由表中拉取有权限的路由，把这些路由组成一个新的路由表，然后加载
for(var i in power){
    if(power[i]===true){newRouterList[0].children.push(asyncRouterList[0].children[i])}
}
newRouterList.push()
//加载路由
router.addRoutes(newRouterList)