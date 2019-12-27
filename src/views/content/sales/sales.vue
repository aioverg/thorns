<template>
  <div id="order">
    <div id="list-head"><p>>> 商品销售</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <query-input ref="supplierName" title="客户 *" url="/querySupplierName"></query-input>
        <query-input ref="warehouse" title="仓库 *" url="/querySupplierName"></query-input>
        <div>
          <p>采购时间 *</p>
          <input type="date" v-model="data.purchaseTime" />
        </div>
        <div>
          <p>商品详情</p>
          <table>
            <thead>
              <tr>
                <td>序号</td><td>名称</td><td>编号</td><td>单位</td><td>系统销售价格</td><td>实际销售价格</td><td>库存</td><td>销售数量</td><td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value,index) in formData" v-bind:key="index" v-bind:index="index">
                <td>{{index+1}}</td>
                <td><input style="width: 200px;" v-model="value.name" v-on:keyup.enter="commodityQuery(value)"></td>
                <td>{{value.id}}</td>
                <td>{{value.unit}}</td>
                <td>{{value.systemPrice}}</td>
                <td><input style="width: 80px;" v-model="value.realPrice"></td>
                <td>{{value.number}}</td>
                <td><input style="width: 80px;"></td>
                <td>
                  <span v-on:click="del(index)">删除</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button v-on:click.prevent="addRow">+添加</button>
        </div>
        <div>
          <p>采购单总价</p>
          <input v-model="data.purchasePrice" />
        </div>
        <div>
          <p>实际支付金额</p>
          <input v-model="data.payment" />
        </div>
        <div>
          <p>备注</p>
          <textarea v-model="data.remarks"></textarea>
        </div>
      </div>
    </div>
    <div id="list-foot">
      <p><button v-on:click="postData">提交</button></p>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'
import queryInput from '../../../components/queryInput'
export default {
  name: "sales",
  components: {
    "query-input": queryInput
  },
  data() {
    return { 
      formData: [],
      data:{
        supplierName: null,
        warehouse: null,
        purchaseTime: null,
        purchasePrice: null,
        payment: null,
        remarks: null,
        tableData: null
      }
      };
  },
  methods: {
    addRow: function() {
      this.formData.push({
        name: null,
        id: null,
        unit: null,
        systemPrice: null,
        realPrice: null,
        stock: null,
        number: null
      })
    },
    del: function(index) {
      this.formData.splice(index, 1);
    },
    commodityQuery: function(value){
      purchaseApi.queryCommodityName(value.name).then(
        response => {
          if(response.data !==null){
            value.id=response.data[1],
            value.unit=response.data[2],
            value.systemPrice=response.data[3]
            value.number=response.data[5]
          }
          else{
            value.name="未找到",
            value.id=null,
            value.unit=null,
            value.systemPrice=null,
            value.number=null
          }
        },
      )
    },
    postData: function(){
      this.data.supplierName=this.$refs.supplierName.value
      this.data.warehouse=this.$refs.warehouse.value
      var formDataArray=[]
      for(let i in this.formData){
        formDataArray.push([])
        for(let j in this.formData[i]){
          formDataArray[i].push(this.formData[i][j])
        }
      }
      this.data.tableData=formDataArray
      purchaseApi.postPurchaseOrder(this.data).then()
    }
  }
};
</script>


<style>
  @import "../../css/order.css"
</style>