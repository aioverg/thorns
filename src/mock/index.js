//引入mock
import Mock from 'mockjs'

//设置数据响应延迟
Mock.setup({
    timeout: '300-600'
})

//使用mockjs模拟数据

//登录验证数据
Mock.mock('/login',{'name':'admin', password:'admin'})