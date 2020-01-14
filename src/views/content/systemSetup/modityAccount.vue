
<template>
  <div id="addaccount">
    <div id="list-head">
      <p>>> 修改账号</p>
    </div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>用户名 *</p>
          <input onfocus="blur()" class="input" v-model="data.oldName" />
        </div>
        <div>
          <p>新用户名 *</p>
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
                <li>进销对比<input type="checkbox" v-model="data.authority.analysis.contrast" /></li>
                <li>采购统计<input type="checkbox" v-model="data.authority.analysis.procurementStatistics" /></li>
                <li>销售统计<input type="checkbox" v-model="data.authority.analysis.salesStatistics" /></li>
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
                <li>商品采购<input type="checkbox" v-model="data.authority.purchase.purchase" /></li>
                <li>采购退货<input type="checkbox" v-model="data.authority.purchase.purchaseRturn" /></li>
                <li>采购订单<input type="checkbox" v-model="data.authority.purchase.purchaseOrder" /></li>
                <li>退货订单<input type="checkbox" v-model="data.authority.purchase.purchaseReturnOrder" /></li>
                <li>商品管理<input type="checkbox" v-model="data.authority.purchase.commodityManagement" /></li>
                <li>供应商管理<input type="checkbox" v-model="data.authority.purchase.supplierManagement" /></li>
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
                <li>商品销售<input type="checkbox" v-model="data.authority.sales.sales" /></li>
                <li>销售退货<input type="checkbox" v-model="data.authority.sales.salesReturn" /></li>
                <li>退货订单<input type="checkbox" v-model="data.authority.sales.salesReturnOrder" /></li>
                <li>销售订单<input type="checkbox" v-model="data.authority.sales.salesOrder" /></li>
                <li>客户管理<input type="checkbox" v-model="data.authority.sales.customerManagement" /></li>
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
                <li>库存盘点<input type="checkbox" v-model="data.authority.warehouse.inventory" /></li>
                <li>仓库管理<input type="checkbox" v-model="data.authority.warehouse.warehouseManagement" /></li>
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
                <li>毛利统计<input type="checkbox" v-model="data.authority.finance.grossProfit" /></li>
                <li>客户收款<input type="checkbox" v-model="data.authority.finance.customerCollection" /></li>
                <li>客户对账<input type="checkbox" v-model="data.authority.finance.customerReconciliation" /></li>
                <li>供应商对账<input type="checkbox" v-model="data.authority.finance.supplierReconciliation" /></li>
                <li>供应商汇款<input type="checkbox" v-model="data.authority.finance.supplierRemittance" /></li>
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
                <li>修改密码<input type="checkbox" v-model="data.authority.system.changePassword" /></li>
                <li>添加账号<input type="checkbox" v-model="data.authority.system.addAccount" /></li>
                <li>账号管理<input type="checkbox" v-model="data.authority.system.accountManagement" /></li>
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
        oldName: null,
        name: null,
        password: null,
        sort: null,
        authority: {
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
        this.data.authority.analysis.contrast = true
        this.data.authority.analysis.procurementStatistics = true
        this.data.authority.analysis.salesStatistics = true
      }
      else{
        this.data.authority.analysis.contrast = false
        this.data.authority.analysis.procurementStatistics = false
        this.data.authority.analysis.salesStatistics = false
      }
    },
    purchaseAll: function(){
      if(this.purchaseAll==true){
        this.data.authority.purchase.purchase = true
        this.data.authority.purchase.purchaseRturn = true
        this.data.authority.purchase.purchaseOrder = true
        this.data.authority.purchase.purchaseReturnOrder = true
        this.data.authority.purchase.commodityManagement = true
        this.data.authority.purchase.supplierManagement = true
      }
      else{
        this.data.authority.purchase.purchase = false
        this.data.authority.purchase.purchaseRturn = false
        this.data.authority.purchase.purchaseOrder = false
        this.data.authority.purchase.purchaseReturnOrder = false
        this.data.authority.purchase.commodityManagement = false
        this.data.authority.purchase.supplierManagement = false
      }
    },
    salesAll: function(){
      if(this.salesAll==true){
        this.data.authority.sales.sales = true
        this.data.authority.sales.salesReturn = true
        this.data.authority.sales.salesReturnOrder = true
        this.data.authority.sales.salesOrder = true
        this.data.authority.sales.customerManagement = true
      }
      else{
        this.data.authority.sales.sales = false
        this.data.authority.sales.salesReturn = false
        this.data.authority.sales.salesReturnOrder = false
        this.data.authority.sales.salesOrder = false
        this.data.authority.sales.customerManagement = false
      }
    },
    warehouseAll: function(){
      if(this.warehouseAll==true){
        this.data.authority.warehouse.inventory = true
        this.data.authority.warehouse.warehouseManagement = true
      }
      else{
        this.data.authority.warehouse.inventory = false
        this.data.authority.warehouse.warehouseManagement = false
      }
    },
    financeAll: function(){
      if(this.financeAll==true){
        this.data.authority.finance.grossProfit = true
        this.data.authority.finance.customerCollection = true
        this.data.authority.finance.customerReconciliation = true
        this.data.authority.finance.supplierReconciliation = true
        this.data.authority.finance.supplierRemittance = true
      }
      else{
        this.data.authority.finance.grossProfit = false
        this.data.authority.finance.customerCollection = false
        this.data.authority.finance.customerReconciliation = false
        this.data.authority.finance.supplierReconciliation = false
        this.data.authority.finance.supplierRemittance = false
      }
    },
    systemAll: function(){
      if(this.systemAll==true){
        this.data.authority.system.changePassword = true
        this.data.authority.system.addAccount = true
        this.data.authority.system.accountManagement = true
      }
      else{
        this.data.authority.system.changePassword = false
        this.data.authority.system.addAccount = false
        this.data.authority.system.accountManagement = false
      }
    }
  },
  mounted: function(){
    this.data.oldName = this.$route.params.userData.name
    this.data.name = this.$route.params.userData.name
    this.data.password = this.$route.params.userData.password
    this.data.sort = this.$route.params.userData.sort
    for(let i in this.$route.params.userData.authority){
      for(let j in this.$route.params.userData.authority[i]){
        this.data.authority[i][this.$route.params.userData.authority[i][j]] = true
      }
    }
  },
  methods: {
    postData: function(){
      const datas = {}
      datas.oldName = this.data.oldName
      datas.name = this.data.name
      datas.password = this.data.password
      datas.sort = this.data.sort
      datas.authority =  {}
      for (let i in this.data.authority){
        datas.authority[i] = []
        for (let j in this.data.authority[i]){
          if(this.data.authority[i][j]==true){
            datas.authority[i].push(j)
          }
        }
      }
      systemApi.modifyData(datas)
    }
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