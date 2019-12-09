//引入mock
import Mock from 'mockjs'
import user from './json/user'
import {querySupplierData, addSupplierData}  from './json/supplierData'  //供应商数据
import {queryCommodutyData, addCommodityData} from './json/commodityData'  //商品数据
import {queryWarehouseData, addWarehouseData} from './json/warehouseData'  //仓库数据
import {queryCustomerData, addCustomerData} from './json/customerData'  //客户数据
import {queryOrderData} from './json/orderData'
//设置数据响应延迟
Mock.setup({
    timeout: '300-600'
})

//使用mockjs模拟数据

//登录验证数据
Mock.mock('/login', user)
//供应商管理数据
Mock.mock('/suppliermanagement', querySupplierData)
//新增供应商数据
Mock.mock('/addSupplier', 'post', addSupplierData)


//商品管理数据
Mock.mock('/commodityManagemen', queryCommodutyData)
//新增商品数据
Mock.mock('/addCommodity', 'post', addCommodityData)

//订单管理列表数据
Mock.mock('/purchaseOrder', queryOrderData)


//仓库列表数据
Mock.mock('/warehousemanagement', queryWarehouseData)
//新增仓库数据
Mock.mock('/addWarehouse', 'post', addWarehouseData)


//客户列表数据
Mock.mock('/customerManagement', queryCustomerData)
//新增客户数据
Mock.mock('/addCustomer', 'post', addCustomerData)