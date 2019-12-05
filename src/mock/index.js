//引入mock
import Mock from 'mockjs'
import user from './json/user'
import supplierList  from './json/supplierList'

//设置数据响应延迟
Mock.setup({
    timeout: '300-600'
})

//使用mockjs模拟数据
//登录验证数据
Mock.mock('/login', user)
Mock.mock('/suppliermanagement',supplierList)
