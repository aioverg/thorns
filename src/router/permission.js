import router from './index'
import {asyncRouterList} from './asyncRouterList'

//一个路由表
const newRouterList = [{
    path: '/main',
    name: 'main',
    component: () => import('../views/main'),  //主页面组件
    children: []
}]

//权限数据
var power={
/*  完整的权限列表
    main: true,
    purchase: true,
    purchaseRturn: true,
    purchaseOrder: true,
    purchaseReturnOrder: true,
    addSupplier: true,
    addCommodity: true,
    sales: true,
    salesReturn: true,
    salesReturnOrder: true,
    salesOrder: true,
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
*/
}

const permission={}

permission.loadRouter = function(){
    power=JSON.parse(sessionStorage.getItem("power"))
    for(var i in power){
        if(power[i]===true){newRouterList[0].children.push(asyncRouterList[0].children[i])}
    }
    //newRouterList.push()

    //加载路由
    router.addRoutes(newRouterList)
}

/*
//根据权限数据，从所有路由表中拉取有权限的路由，把这些路由组成一个新的路由表，然后加载
for(var i in power){
    if(power[i]===true){newRouterList[0].children.push(asyncRouterList[0].children[i])}
}
newRouterList.push()

//加载路由
router.addRoutes(newRouterList)

*/

permission.login=function(name, password){
    const _this = this;
    _this.axios.get('/login').then(
      function(res){
        //检错与服务器是否连接成功
        if(res.status===200){
          //检测账号是否存在
          try {
            res.data[_this.name].name
          }
          catch(err){
            return alert("账号不存在")
          }
          //检测账号的密码是否正确
          if(res.data[name].name===name&&res.data[name].password===password){
            _this.$router.push({ path: '/analysis/contrast' })
            sessionStorage.setItem("power", JSON.stringify(res.data[name].power))
            permission.loadRouter()
          }
          else{
            alert("密码错误")
          }
        }
        else(alert("连接服务器失败"))
      }
    )
}





export default permission