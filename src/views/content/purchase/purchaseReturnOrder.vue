<!--订单管理-->

<template>
  <div id="order-list">
    <div id="list-head"><p>>> 采购退货订单</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>订单列表</p>
          <table>
            <thead>
              <tr>
                <th>序号</th><th>ID</th><th>供应商</th><th>仓库</th><th>退货时间</th><th>操作员</th><th>退货单总价</th><th>实际总金额</th><th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in pageTurn.Data" v-bind:key="index">
                <td>{{index+1}}</td>
                <td>{{value[0]}}</td>
                <td>{{value[1]}}</td>
                <td>{{value[2]}}</td>
                <td>{{value[3]}}</td>
                <td>{{value[4]}}</td>
                <td>{{value[6]}}</td>
                <td>{{value[7]}}</td>
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
                <th>序号</th><th>商品</th><th>编号</th><th>单位</th><th>采购价格</th><th>退回价格</th><th>采购数量</th><th>退回数量</th>
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
      <page-turn
        v-bind:urlData="pageTurn.url"
        v-bind:queryButtonData="pageTurn.queryButton"
        v-model="pageTurn.Data"
      >
      </page-turn>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'
import pageTurn from "../../../components/pageTurn"
export default {
  name: 'purchaseReturnOrder',
  components: {
    "page-turn": pageTurn
  },

  data(){
    return {
      pageTurn:{
        url: "/purchaseReturnOrder/queryPurchaseReturnOrderData",
        queryButton: true,
        data: null
      },
      detailsData: Array,  //订单详情数据
      show: "false",
      id: "订单详情",
    }
  },
  methods: {
    details: function(value){  //获取订单详情数据
      this.show=!this.show
      if(this.show){this.id="订单详情"}
      if(!this.show){this.id="id："+value}
      purchaseApi.returnOrderDetails(value).then(
        response => {
          this.detailsData=response.data[0]
        }
      )
      
    }
  }
}

</script>

<style>
#order-list #list-body table{
  border-collapse: collapse;
  width: 90%;
  margin: 5px 0 0 0;
}
#order-list #list-body table th{
  border: 1px solid #0DB3A6;
  text-align: center;
  height: 35px;
}
#order-list #list-body table td{
  border: 1px solid #0DB3A6;
  text-align: center;
  height: 35px;
}
</style>