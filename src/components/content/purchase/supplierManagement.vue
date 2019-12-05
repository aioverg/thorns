<!--供应商管理-->

<template>
  <div>
    <div id="list-head"><p>>> 供应商管理</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
      <div>
        <p>供应商列表</p>
        <table>
          <thead>
            <tr>
              <td>序号</td><td>名称</td><td>负责人</td><td>电话</td><td>手机</td><td>邮箱</td><td>地址</td><td>备注</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, index) in supData" v-bind:key="index">
              <td>{{index+1}}</td>
              <td>{{value[0]}}</td>
              <td>{{value[1]}}</td>
              <td>{{value[2]}}</td>
              <td>{{value[3]}}</td>
              <td>{{value[4]}}</td>
              <td>{{value[5]}}</td>
              <td>{{value[6]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <div id="list-foot">
      <p>
        <!--@keyup.enter="query"实现输入搜索内容后点击回车键提交搜索-->
        <input v-model="queryValue" @keyup.enter="query" id="search">
        <!--v-on:click="query"实现输入搜索内容后点查询按钮提交搜索-->
        <button v-on:click="query">查询</button>
        <span>
          <span v-on:click="down">上一页</span>
          <span>第</span>
          <span>
            <input v-model="queryParam.page" v-on:keyup.enter="supplierData" id="page">
          </span>
          <span>页</span>
          <span v-on:click="up">下一页</span>
          <span>共<span>{{page}}</span>页</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'
export default {
  name: 'supplierManagement',
  data(){
    return {
      supData: true,//列表数据
      queryValue: null,//查询输入的数据
      page:5,//总共有多少页数据，每15条算一页
      queryParam:{    //axios请求发送的数据
        page: 1,  //请求的页面
        size: 6,  //每页的数据量
        allPage:2
      }
    }
  },
  mounted(){
    this.supplierData()    //当页面加载时执行supplierAllData方法
  },
  methods: {
    supplierData: function(){    //获取供应商数据
      purchaseApi.supplierData(this.queryParam).then(
        response => {
          this.supData=response.data
        }
      )
    },
    up: function(){    //向前翻页
      if(this.queryParam.page<this.page){
        this.queryParam.page++
        this.supplierData()
      }
      else(alert("最后一页"))
    },
    down: function(){    //向后翻页
      if(this.queryParam.page>1){
        this.queryParam.page--
        this.supplierData()
      }
      else(alert("第一页"))
    },

    query: function(){alert(555)}
/*    query: function(){    //搜索函数，循环遍历每个数组中的元素。
      const _this=this
      purchaseApi.supplierData().then(
        function(response){
          _this.supData=[]
          for(var i in response.data){
            for(var j in response.data[i]){
              if(_this.queryValue==response.data[i][j]){
                _this.supData.push(response.data[i]),
                _this.page=Math.ceil(_this.supData.length/15)
              }
            } 
          }
          if(_this.supData.length==0){
            alert("没有找到")
            _this.supData=response.data
          }
        }
      )
    },
*/
  }
}
</script>

