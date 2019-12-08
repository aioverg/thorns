//引入mock
import Mock from 'mockjs'
import user from './json/user'
import {querySupplierData, addSupplierData}  from './json/supplierData'
import {queryCommodutyData, addCommodityData} from './json/commodityData'

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

//供应商列表数据
Mock.mock('/commodityManagemen', queryCommodutyData)
//新增商品数据
Mock.mock('/addCommodity', 'post', addCommodityData)
