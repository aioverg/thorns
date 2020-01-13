//引入mock
import Mock from 'mockjs'
import user from './json/user'                   //用户数据
import order from './json/orderData'             //订单数据
import goods from './json/goodsData'             //商品数据
import customer from './json/customerData'       //客户数据
import warehouse from './json/warehouseData'     //仓库数据
import stock from './json/stock'                 //仓库商品数据





//设置数据响应延迟
Mock.setup({
    timeout: '300-600'
})


//用户数据
//登录页面-登录验证数据
Mock.mock('/login', user.login)
//系统设置-返回用户名和用户类型
Mock.mock("/system/accountmanagement", user.nameData)
//添加账号
Mock.mock("/system/addaccount", user.addData)
//修改账号-返回账号所有信息
Mock.mock("/system/modityAccount", user.allData)
//修改账号-提交修改
Mock.mock("/system/postModityAccount", user.modifyData)
//修改密码
Mock.mock("/system/changepassword", user.changePassword)



//订单数据
//采购订单-全部订单数据
Mock.mock('/purchaseOrder', order.queryOrderData)
//采购订单-订单详情数据
Mock.mock('/purchaseOrderDetails', order.queryDetails)
//商品采购-提交数据
Mock.mock('/postPurchaseOrder', order.postPurchaseOrder)
Mock.mock('/orderID', order.orderID)
//采购退货订单-全部订单数据
Mock.mock('/purchaseReturnOrder/queryPurchaseReturnOrderData', order.queryOrderData)
//采购退货订单-订单详情数据
Mock.mock('/purchaseReturnOrder/queryPurchaseReturnOrderDetails', order.queryDetails)
//退货订单-提交数据
Mock.mock('/purchaseReturn/postPurchaseReturnOrder', order.postPurchaseOrder)
//采购退货-查询
Mock.mock('/purchaseReturnOrder/purchaseReturnOrderID', order.orderID)




//商品数据
//商品管理-所有商品数据
Mock.mock('/commodityManagemen', goods.queryGoodsData)
//新增商品-新增商品数据
Mock.mock('/addCommodity', 'post', goods.addGoodsData)
//商品采购-根据商品名字搜索商品信息
Mock.mock('/queryCommodityName', goods.queryGoodsName)


//客户数据
//供应商管理-所有供应商数据
Mock.mock('/suppliermanagement', customer.queryCustomerData)
//新增供应商-新增供应商数据
Mock.mock('/addSupplier', 'post', customer.addCustomerData)
//客户管理-所有客户数据
Mock.mock('/customerManagement', customer.queryCustomerData)
//客户管理-新增客户数据
Mock.mock('/addCustomer', 'post', customer.addCustomerData)
//商品采购-根据客户名字搜索客户
Mock.mock('/querySupplierName', customer.queryCustomerName)


//仓库数据
//仓库管理-所有仓库数据
Mock.mock('/warehousemanagement', warehouse.queryWarehouseData)
//仓库管理-新增仓库数据
Mock.mock('/addWarehouse', 'post', warehouse.addWarehouseData)
//商品采购-根据仓库ID搜索仓库
Mock.mock('/queryWarehouseId', warehouse.queryWarehouseId)


//仓库商品数据
Mock.mock('/warehouse/inventory', stock.queryID)