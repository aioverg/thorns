<!--仓库管理-->

<template>
  <div>
    <div id="list-head"><p>>> 仓库管理</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
      <div>
        <p>商品列表</p>
        <table>
          <thead>
            <tr>
              <td>序号</td><td>仓库名称</td><td>负责人</td><td>地址</td><td>备注</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, index) in supData" v-bind:key="index">
              <td>{{index+1}}</td>
              <td>{{value[0]}}</td>
              <td>{{value[1]}}</td>
              <td>{{value[2]}}</td>
              <td>{{value[3]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <div id="list-foot">
      <p>
        <!--@keyup.enter="query"实现输入搜索内容后点击回车键提交搜索-->
        <input id="search" v-model="queryData.queryValue" v-on:keyup.enter="query">
        <!--v-on:click="query"实现输入搜索内容后点查询按钮提交搜索-->
        <button v-on:click="query">查询</button>
        <button v-on:click="addWarehouse">新增</button>
        <span>
          <span v-on:click="font">上一页</span>
          <span>第</span>
          <span>
            <input v-model="queryData.page" id="page">
          </span>
          <span>页</span>
          <span v-on:click="next">下一页</span>
          <span>共<span>{{queryData.allPage}}</span>页</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import warehouseApi from '../../../api/warehouse'
export default {
  name: 'warehouseManagement',
  data(){
    return {
      supData: Array,//列表数据
      queryData:{    //axios请求发送的数据
        page: 1,  //请求的页面（也是当前页面）
        size: 6,  //每页的数据量
        allPage: null,  //总共有多少页数据，每15条算一页
        queryValue: null, //查询输入的数据
      }
    }
  },
  mounted(){
    this.warehouseData()    //当页面加载时执行supplierAllData方法
  },
  methods: {
    warehouseData: function(){    //获取供应商数据
      warehouseApi.warehouseData(this.queryData).then(
        response => {
          this.supData=response.data[0]  //获取本次查询的数据
          this.queryData.allPage=Math.ceil(response.data[1]/this.queryData.size)  //获取服务器中所有符合条件的数据条数，并计算出页数。
        }
      )
    },
    next: function(){    //下一页
      if(this.queryData.page<this.queryData.allPage){
        this.queryData.page++
        this.warehouseData()
      }
      else(alert("最后一页"))
    },
    font: function(){    //上一页
      if(this.queryData.page>1){
        this.queryData.page--
        this.warehouseData()
      }
      else(alert("第一页"))
    },

    query: function(){    //搜索功能
      if(this.queryData.queryValue){
        this.queryData.page=1
        this.warehouseData()
      }
      if(!this.queryData.queryValue){
        this.warehouseData()
      }
    },

    addWarehouse: function(){
      this.$router.push({ path: '/warehouse/addWarehouse' })
    }
  }
}
</script>