
<template>
  <div id="addaccount">
    <div id="list-head">
      <p>>> 修改账号</p>
    </div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>用户名 *</p>
          <input class="input" v-model="data.name" />
        </div>
        <div>
          <p>密码 *</p>
          <input class="input" v-model="data.password" />
        </div>
        <div>
          <p>部门 *</p>
          <select class="input" v-model="data.sort" style="height:31px">
            <option>采购</option>
            <option>销售</option>
            <option>仓管</option>
            <option>财务</option>
            <option>管理</option>
          </select>
        </div>
        <div>
          <p>权限选择</p>
          <div style="margin: 0 0 0 30px">
            <div>
              <p>
                <span>图表</span>
                <label style="margin: 0 0 0 15px;">
                  <span>全选</span>
                  <input type="checkbox" v-model="analysisAll" style="width:20px;" />
                </label>
              </p>
              <ul>
                <li>进销对比<input type="checkbox" v-model="data.authoruty.analysis.contrast" /></li>
                <li>采购统计<input type="checkbox" v-model="data.authoruty.analysis.procurementStatistics" /></li>
                <li>销售统计<input type="checkbox" v-model="data.authoruty.analysis.salesStatistics" /></li>
              </ul>
            </div>
            <div>
              <p>
                <span>采购</span>
                <label style="margin: 0 0 0 15px;">
                  <span>全选</span>
                  <input type="checkbox" v-model="purchaseAll" />
                </label>
              </p>
              <ul>
                <li>商品采购<input type="checkbox" v-model="data.authoruty.purchase.purchase" /></li>
                <li>采购退货<input type="checkbox" v-model="data.authoruty.purchase.purchaseRturn" /></li>
                <li>采购订单<input type="checkbox" v-model="data.authoruty.purchase.purchaseOrder" /></li>
                <li>退货订单<input type="checkbox" v-model="data.authoruty.purchase.purchaseReturnOrder" /></li>
                <li>商品管理<input type="checkbox" v-model="data.authoruty.purchase.commodityManagement" /></li>
                <li>供应商管理<input type="checkbox" v-model="data.authoruty.purchase.supplierManagement" /></li>
              </ul>
            </div>
            <div>
              <p>
                <span>销售</span>
                <label style="margin: 0 0 0 15px;">
                  <span>全选</span>
                  <input type="checkbox" v-model="salesAll" />
                </label>
              </p>
              <ul>
                <li>商品销售<input type="checkbox" v-model="data.authoruty.sales.sales" /></li>
                <li>销售退货<input type="checkbox" v-model="data.authoruty.sales.salesReturn" /></li>
                <li>退货订单<input type="checkbox" v-model="data.authoruty.sales.salesReturnOrder" /></li>
                <li>销售订单<input type="checkbox" v-model="data.authoruty.sales.salesOrder" /></li>
                <li>客户管理<input type="checkbox" v-model="data.authoruty.sales.customerManagement" /></li>
              </ul>
            </div>
            <div>
              <p>
                <span>仓管</span>
                <label style="margin: 0 0 0 15px;">
                  <span>全选</span>
                  <input type="checkbox" v-model="warehouseAll" />
                </label>
              </p>
              <ul>
                <li>库存盘点<input type="checkbox" v-model="data.authoruty.warehouse.inventory" /></li>
                <li>仓库管理<input type="checkbox" v-model="data.authoruty.warehouse.warehouseManagement" /></li>
              </ul>
            </div>
            <div>
              <p>
                <span>财务</span>
                <label style="margin: 0 0 0 15px;">
                  <span>全选</span>
                  <input type="checkbox" v-model="financeAll" />
                </label>
              </p>
              <ul>
                <li>毛利统计<input type="checkbox" v-model="data.authoruty.finance.grossProfit" /></li>
                <li>客户收款<input type="checkbox" v-model="data.authoruty.finance.customerCollection" /></li>
                <li>客户对账<input type="checkbox" v-model="data.authoruty.finance.customerReconciliation" /></li>
                <li>供应商对账<input type="checkbox" v-model="data.authoruty.finance.supplierReconciliation" /></li>
                <li>供应商汇款<input type="checkbox" v-model="data.authoruty.finance.supplierRemittance" /></li>
              </ul>
            </div>
            <div>
              <p>
                <span>系统</span>
                <label style="margin: 0 0 0 15px;">
                  <span>全选</span>
                  <input type="checkbox" v-model="systemAll" />
                </label>
              </p>
              <ul>
                <li>修改密码<input type="checkbox" v-model="data.authoruty.system.changePassword" /></li>
                <li>添加账号<input type="checkbox" v-model="data.authoruty.system.addAccount" /></li>
                <li>账号管理<input type="checkbox" v-model="data.authoruty.system.accountManagement" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="list-foot">
      <p>
        <button v-on:click="postData">提交</button>
      </p>
    </div>
  </div>
</template>

<script>
import systemApi from "../../../api/system"
export default {
  name: "modityAccount",
  data: function(){
    return{
      data:{
        name: null,
        password: null,
        sort: null,
        authoruty: {
          analysis: {
            contrast: false,
            procurementStatistics: false,
            salesStatistics: false
          },
          purchase: {
            purchase: false,
            purchaseRturn: false,
            purchaseOrder: false,
            purchaseReturnOrder: false,
            addCommodity: false,
            commodityManagement: false,
            addSupplier: false,
            supplierManagement: false
          },
          sales: {
            sales: false,
            salesReturn: false,
            salesReturnOrder: false,
            salesOrder: false,
            addCustomer: false,
            customerManagement: false
          },
          warehouse:{
            inventory: false,
            addWarehouse: false,
            warehouseManagement: false
          },
          finance: {
            grossProfit: false,
            customerCollection: false,
            customerReconciliation: false,
            supplierReconciliation: false,
            supplierRemittance: false
          },
          system: {
            changePassword: false,
            addAccount: false,
            accountManagement: false
          }
        }
      },
      analysisAll: false,
      purchaseAll: false,
      salesAll: false,
      warehouseAll: false,
      financeAll: false,
      systemAll: false,
    }
  },
  watch: {
    analysisAll: function(){
      if(this.analysisAll==true){
        this.data.authoruty.analysis.contrast = true
        this.data.authoruty.analysis.procurementStatistics = true
        this.data.authoruty.analysis.salesStatistics = true
      }
      else{
        this.data.authoruty.analysis.contrast = false
        this.data.authoruty.analysis.procurementStatistics = false
        this.data.authoruty.analysis.salesStatistics = false
      }
    },
    purchaseAll: function(){
      if(this.purchaseAll==true){
        this.data.authoruty.purchase.purchase = true
        this.data.authoruty.purchase.purchaseRturn = true
        this.data.authoruty.purchase.purchaseOrder = true
        this.data.authoruty.purchase.purchaseReturnOrder = true
        this.data.authoruty.purchase.commodityManagement = true
        this.data.authoruty.purchase.supplierManagement = true
      }
      else{
        this.data.authoruty.purchase.purchase = false
        this.data.authoruty.purchase.purchaseRturn = false
        this.data.authoruty.purchase.purchaseOrder = false
        this.data.authoruty.purchase.purchaseReturnOrder = false
        this.data.authoruty.purchase.commodityManagement = false
        this.data.authoruty.purchase.supplierManagement = false
      }
    },
    salesAll: function(){
      if(this.salesAll==true){
        this.data.authoruty.sales.sales = true
        this.data.authoruty.sales.salesReturn = true
        this.data.authoruty.sales.salesReturnOrder = true
        this.data.authoruty.sales.salesOrder = true
        this.data.authoruty.sales.customerManagement = true
      }
      else{
        this.data.authoruty.sales.sales = false
        this.data.authoruty.sales.salesReturn = false
        this.data.authoruty.sales.salesReturnOrder = false
        this.data.authoruty.sales.salesOrder = false
        this.data.authoruty.sales.customerManagement = false
      }
    },
    warehouseAll: function(){
      if(this.warehouseAll==true){
        this.data.authoruty.warehouse.inventory = true
        this.data.authoruty.warehouse.warehouseManagement = true
      }
      else{
        this.data.authoruty.warehouse.inventory = false
        this.data.authoruty.warehouse.warehouseManagement = false
      }
    },
    financeAll: function(){
      if(this.financeAll==true){
        this.data.authoruty.finance.grossProfit = true
        this.data.authoruty.finance.customerCollection = true
        this.data.authoruty.finance.customerReconciliation = true
        this.data.authoruty.finance.supplierReconciliation = true
        this.data.authoruty.finance.supplierRemittance = true
      }
      else{
        this.data.authoruty.finance.grossProfit = false
        this.data.authoruty.finance.customerCollection = false
        this.data.authoruty.finance.customerReconciliation = false
        this.data.authoruty.finance.supplierReconciliation = false
        this.data.authoruty.finance.supplierRemittance = false
      }
    },
    systemAll: function(){
      if(this.systemAll==true){
        this.data.authoruty.system.changePassword = true
        this.data.authoruty.system.addAccount = true
        this.data.authoruty.system.accountManagement = true
      }
      else{
        this.data.authoruty.system.changePassword = false
        this.data.authoruty.system.addAccount = false
        this.data.authoruty.system.accountManagement = false
      }
    }
  },
  mounted: function(){
    console.log(this.$route.params.userData)
    this.data.name = this.$route.params.userData.name
    this.data.password = this.$route.params.userData.password
  },
  methods: {
    postData: function(){
      const datas = {}
      datas.name = this.data.name
      datas.password = this.data.password
      datas.sort = this.data.sort
      datas.authoruty =  {}
      for (let i in this.data.authoruty){
        datas.authoruty[i] = []
        for (let j in this.data.authoruty[i]){
          if(this.data.authoruty[i][j]==true){
            datas.authoruty[i].push(j)
          }
        }
      }
      systemApi.addData(datas)
    },

  }

};
</script>


<style>
#addaccount #list-body .input {
  height: 25px;
  width: 330px;
  margin: 5px 0 0 0;
}
#addaccount #list-head p {
  margin: 0 0 0 20px;
  height: 40px;
  line-height: 40px;
}
#addaccount #list-body p {
  margin: 25px 0 0 0;
  font-weight: 600;
  font-size: 14px;
}

#addaccount #list-foot button {
  height: 34px;
  width: 118px;
  float: left;
  margin: 0 0 0 20px;
  background-color: #0db3a6;
  border: 1px solid #0db3a6;
  cursor: pointer;
  color: #fff;
}
#addaccount #list-foot button:hover {
  background-color: #0a8d83;
  border: 1px solid #0a8d83;
}
</style>