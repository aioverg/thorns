import router from './index'
import {asyncRouterList} from './asyncRouterList'
import login from "../api/login"



const permission={}


//路由表
const newRouterList = [{
    path: '/main',
    //name: 'main',
    component: () => import('../views/main'),  //主页面组件
    children: []
}]

//权限
permission.loadRouter = function(_this){
  let authority={}
  _this.$store.commit("revise")
  authority=JSON.parse(sessionStorage.getItem("authority"))
  for(var i in authority){
    for(var j in authority[i]){
      newRouterList[0].children.push(asyncRouterList[0].children[authority[i][j]])
    }
  }
  router.addRoutes(newRouterList)  //加载路由
}

//登录
permission.login = function(data){
  const _this = this
  login(data).then(function(res){
    if(res.data=="error"){
      alert("账户/密码错误")
    }
    else{
      console.log(res.data.authority)
      _this.$router.push({ path: '/analysis/contrast' })
      sessionStorage.setItem("authority", JSON.stringify(res.data.authority))
      permission.loadRouter(_this)
    }
  })
}



export default permission