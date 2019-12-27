//引入mock
import Mock from 'mockjs'
import user from './json/user'
import customer from './json/customerData'
import order from './json/orderData'
import goods from './json/goodsData'
import warehouse from './json/warehouseData'


//设置数据响应延迟
Mock.setup({
    timeout: '300-600'
})

//使用mockjs模拟数据

//登录页面-登录验证数据
Mock.mock('/login', user)

/*一级菜单 采购管理 菜单的数据*/
//供应商管理页面-供应商管理数据
Mock.mock('/suppliermanagement', customer.queryCustomerData)
//新增供应商页面-新增供应商数据
Mock.mock('/addSupplier', 'post', customer.addCustomerData)
//商品管理页面-商品管理数据
Mock.mock('/commodityManagemen', goods.queryGoodsData)
//新增商品页面-新增商品数据
Mock.mock('/addCommodity', 'post', goods.addGoodsData)
//订单管理页面-订单管理列表数据
Mock.mock('/purchaseOrder', order.queryOrderData)
//订单管理页面-订单详情数据
Mock.mock('/purchaseOrderDetails', order.queryDetails)
//商品采购页面-搜索供应商数据
Mock.mock('/querySupplierName', customer.queryCustomerName)
//商品采购页面-根据商品名字搜索商品信息
Mock.mock('/queryCommodityName', goods.queryGoodsName)
//商品采购-提交订单
Mock.mock('/postPurchaseOrder', order.postPurchaseOrder)
Mock.mock('/orderID', order.orderID)
//采购退货订单-订单列表
Mock.mock('/purchaseReturnOrder/queryPurchaseReturnOrderData', order.queryOrderData)
//采购退货订单-订单详情
Mock.mock('/purchaseReturnOrder/queryPurchaseReturnOrderDetails', order.queryDetails)
//采购退货订单-查询  没有用到
Mock.mock('/purchaseReturnOrder/purchaseReturnOrderID', order.orderID)
//退货订单-提交
Mock.mock('/purchaseReturn/postPurchaseReturnOrder', order.postPurchaseOrder)



//仓库列表数据
Mock.mock('/warehousemanagement', warehouse.queryWarehouseData)
//新增仓库数据
Mock.mock('/addWarehouse', 'post', warehouse.addWarehouseData)


//客户列表数据
Mock.mock('/customerManagement', customer.queryCustomerData)
//新增客户数据
Mock.mock('/addCustomer', 'post', customer.addCustomerData)