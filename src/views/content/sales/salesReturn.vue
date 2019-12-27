<template>
  <div id="order">
    <div id="list-head"><p>>> 销售退货</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>订单ID *</p>
          <input v-model="orderIdData" v-on:keyup.enter="orderId" />
        </div>
        <div>
          <p>供应商</p>
          <input v-model="orderData[1]" onfocus="blur()" />
        </div>
        <div>
          <p>仓库</p>
          <input v-model="orderData[2]" onfocus="blur()" />
        </div>
        <div>
          <p>采购时间</p>
          <input v-model="orderData[3]" onfocus="blur()" />
        </div>
        <div>
          <p>采购员</p>
          <input v-model="orderData[4]" onfocus="blur()" />
        </div>
        <div>
          <p>采购详情</p>
          <table>
            <thead>
              <tr>
                <td>序号</td><td>名称</td><td>编号</td><td>单位</td><td>系统采购价格</td><td>实际采购价格</td><td>采购数量</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in orderData[5]" v-bind:key="index">
                <td>{{index+1}}</td>
                <td>{{value[0]}}</td>
                <td>{{value[1]}}</td>
                <td>{{value[2]}}</td>
                <td>{{value[3]}}</td>
                <td>{{value[4]}}</td>
                <td>{{value[6]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p>退货时间</p>
          <input type="date" v-model="returnTime" />
        </div>
        <div>
          <p>退货详情</p>
          <table>
            <thead>
              <tr>
                <td>序号</td><td>名称</td><td>编号</td><td>单位</td><td>系统采购价格</td><td>实际采购价格</td><td>采购数量</td><td>退货数量</td><td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in purchaseReturnDetailedData" v-bind:key="index">
                <td>{{index+1}}</td>
                <td>
                  <input style="width: 200px;" v-model="purchaseReturnDetailedData[index][0]" v-on:keyup.enter="query(purchaseReturnDetailedData[index][0], index)">
                </td>
                <td>{{purchaseReturnDetailedData[index][1]}}</td>
                <td>{{purchaseReturnDetailedData[index][2]}}</td>
                <td>{{purchaseReturnDetailedData[index][3]}}</td>
                <td>{{purchaseReturnDetailedData[index][4]}}</td>
                <td>{{purchaseReturnDetailedData[index][6]}}</td>
                <td><input style="width: 80px;" ></td>
                <td>
                  <span v-on:click="del(index)" >删除</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button v-on:click.prevent="addRow">+添加</button>
        </div>
        <div>
          <p>退货单总价</p>
          <input/>
        </div>
        <div>
          <p>实际退款金额</p>
          <input v-model="total" />
        </div>
        <div>
          <p>备注</p>
          <textarea v-model="remarks"></textarea>
        </div>
      </div>
    </div>
    <div id="list-foot">
      <p><button v-on:click="postPurchaseReturn">提交</button></p>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'
export default {
  name: 'sellReturn',
  data: function(){
    return{
      orderIdData: "001",
      orderData: [],
      returnTime: null,
      user: "admin",
      total: null,
      remarks: null,
      purchaseReturnDetailedData: [],
      postPurchaseReturnData: []
    }
  },
  
  methods: {
    orderId: function(){
      const _this=this
      purchaseApi.orderId(this.orderIdData).then(
        function(response){
          if(response.data==null){alert("没有找到找到此订单")}
          else(_this.orderData=response.data)
        }
      )
    },
    
    addRow: function() {
      this.purchaseReturnDetailedData.push([null,null,null,null,null,null,null])
      console.log(this.purchaseReturnDetailedData)
    },
    query: function(value, index){
      for(var i in this.orderData[5]){
        if(value==this.orderData[5][i][0]){
          this.$set(this.purchaseReturnDetailedData, index, this.orderData[5][i])
          //直接对数组赋值会导致视图无法更新，使用vue.$set()方法可以避免此类问题
          //this.purchaseReturnDetailedData[index]=this.orderData[5][i]
        }
      }
      console.log(this.purchaseReturnDetailedData)
      return value=null
    },
    del: function(index){
      this.purchaseReturnDetailedData.splice(index, 1)
    },
    postPurchaseReturn: function(){
      this.postPurchaseReturnData.push(
        this.orderIdData,
        this.orderData[1],
        this.orderData[2],
        this.returnTime,
        this.user,
        this.purchaseReturnDetailedData,
        this.total,
        this.remarks
      )
      purchaseApi.postReturnOrder(this.postPurchaseReturnData)
    }
    
  }
}
</script>

<style>
  @import "../../css/order.css"
</style>