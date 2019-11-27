import Vue from 'vue'             //全局引入vue
import App from './App.vue'       //全局引入App.vue模块
import router from './router'     //全局引入vue-router
import './permission'
import './mock'                   //引入mock模拟的数据，默认为/mock/index.js
import axios from 'axios'         //全局引入axios
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios,axios);          //使用axios

Vue.config.productionTip = false

new Vue({                         //创建一个全局的Vue实例，将App.vue模块挂载到index.html
  router,
  render: h => h(App)
}).$mount('#app')
