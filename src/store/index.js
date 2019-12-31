import Vue from 'vue'
import Vuex from 'vuex'
import menuData from './modules/menuData'

Vue.use(Vuex)
//注意一定要使用数组，因为使用数组加载数据的逻辑较为简单
const store = new Vuex.Store({
  state: {
    menu: {}
  },
  mutations: {
    revise: function(){
      var authority={}
      var menu={}
      authority=JSON.parse(sessionStorage.getItem("authority"))
      for(let i in authority){
        menu[i]={}
        menu[i].title=menuData[i].title
        menu[i].link=menuData[i].link
        menu[i].children={}
        for(let j in authority[i]){
          menu[i].children[authority[i][j]]=(menuData[i].children[authority[i][j]])
        }
      }
      this.state.menu=menu
    }
  }
})

export default store