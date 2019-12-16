<!--订单管理-->

<template>
  <div>
    <div id="list-head"><p>>> 采购退货订单</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>订单列表</p>
          <table>
            <thead>
              <tr>
                <td>序号</td><td>ID</td><td>供应商</td><td>仓库</td><td>退货时间</td><td>操作员</td><td>退货单总金额</td><td></td>
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
                <td>{{value[6]}}</td>
                <td><a v-on:click="details(value[0])">详情</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <P>{{id}}</P>
          <table v-if="!show">
            <thead>
              <tr>
                <td>序号</td><td>商品</td><td>编号</td><td>单位</td><td>采购价格</td><td>退回价格</td><td>采购数量</td><td>退回数量</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in detailsData" v-bind:key="index">
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
        <input id="search" v-model="queryData.queryValue" v-on:keyup.enter="query">
        <!--v-on:click="query"实现输入搜索内容后点查询按钮提交搜索-->
        <button v-on:click="query">查询</button>
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
import purchaseApi from '../../../api/purchase'
export default {
  name: 'purchaseReturnOrder',
  data(){
    return {
      supData: Array,  //订单列表数据
      detailsData: Array,  //订单详情数据
      queryData:{    //axios请求发送的数据
        page: 1,  //请求的页面（也是当前页面）
        size: 6,  //每页的数据量
        allPage: null,  //总共有多少页数据，每15条算一页
        queryValue: null, //查询输入的数据
      },
      dataid: null,
      show: "false",
      id: "订单详情",
    }
  },
  created: function(){
    this.bb=this.aa
  },
  props:[],
  mounted(){
    this.returnOrderData()    //当页面加载时执行supplierAllData方法
  },
  methods: {
    returnOrderData: function(){    //获取供应商数据
      purchaseApi.returnOrder(this.queryData).then(
        response => {
          this.supData=response.data[0]  //获取本次查询的数据
          this.queryData.allPage=Math.ceil(response.data[1]/this.queryData.size)  //获取服务器中所有符合条件的数据条数，并计算出页数。
        }
      )
    },
    next: function(){    //下一页
      if(this.queryData.page<this.queryData.allPage){
        this.queryData.page++
        this.returnOrderData()
      }
      else(alert("最后一页"))
    },
    font: function(){    //上一页
      if(this.queryData.page>1){
        this.queryData.page--
        this.returnOrderData()
      }
      else(alert("第一页"))
    },

    query: function(){    //搜索功能
      if(this.queryData.queryValue){
        this.queryData.page=1
        this.returnOrderData()
      }
      if(!this.queryData.queryValue){
        this.returnOrderData()
      }
    },

    details: function(aa){  //获取订单详情数据
      this.show=!this.show
      if(this.show){this.id="订单详情"}
      if(!this.show){this.id="id："+aa}
      this.queryData.id=aa
      purchaseApi.returnOrderDetails(aa).then(
        response => {
          this.detailsData=response.data[0]
        }
      )
      
    }
  }
}

</script>