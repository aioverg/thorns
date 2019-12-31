import router from './index'
import {asyncRouterList} from './asyncRouterList'



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
            sessionStorage.setItem("authority", JSON.stringify(res.data[name].authority))
            console.log(5555)
            permission.loadRouter(_this)
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