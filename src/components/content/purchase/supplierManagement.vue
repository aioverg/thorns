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
        <input v-model="queryData.queryValue" @keyup.enter="query" id="search">
        <!--v-on:click="query"实现输入搜索内容后点查询按钮提交搜索-->
        <button v-on:click="query">查询</button>
        <span>
          <span v-on:click="down">上一页</span>
          <span>第</span>
          <span>
            <input v-model="queryData.page" v-on:keyup.enter="supplierData" id="page">
          </span>
          <span>页</span>
          <span v-on:click="up">下一页</span>
          <span>共<span>{{queryData.allPage}}</span>页</span>
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
      supData: Array,//列表数据
      queryData:{    //axios请求发送的数据
        page: 1,  //请求的页面
        size: 6,  //每页的数据量
        allPage: 5,  //总共有多少页数据，每15条算一页
        queryValue: null, //查询输入的数据
      }
    }
  },
  mounted(){
    this.supplierData()    //当页面加载时执行supplierAllData方法
  },
  methods: {
    supplierData: function(){    //获取供应商数据
      purchaseApi.supplierData(this.queryData).then(
        response => {
          this.supData=response.data[0]  //获取本次查询的数据
          this.queryData.allPage=Math.ceil(response.data[1]/this.queryData.size)  //获取服务器中所有符合条件的数据条数，并计算出页数。
        }
      )
    },
    up: function(){    //向前翻页
      if(this.queryData.page<this.queryData.allPage){
        this.queryData.page++
        this.supplierData()
      }
      else(alert("最后一页"))
    },
    down: function(){    //向后翻页
      if(this.queryData.page>1){
        this.queryData.page--
        this.supplierData()
      }
      else(alert("第一页"))
    },

    query: function(){    //搜索功能
      if(this.queryData.queryValue){
        this.queryData.page=1
        this.supplierData()
      }
      if(!this.queryData.queryValue){
        this.supplierData()
      }
    }
  }
}
</script>

