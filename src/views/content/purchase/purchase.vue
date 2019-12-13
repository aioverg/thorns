<!--商品采购组件-->

<template>
  <div>
    <div id="list-head"><p>>> 商品采购</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>供应商 *</p>
          <input onfocus="blur()" v-on:click="supplierBox" v-bind:value="supplierValue"/>
          <div class="supplier" v-show="!showSupplier">
            <input ref="supplierinput" v-model="supplierName" v-on:blur="supplierHidden" v-on:input="watchSupplierInput"/>
            <ul>
              <li v-for="(value, index) in supplierNameList" v-bind:key="index" v-on:click="supplierSelect(value)">{{value}}</li>
            </ul>
          </div>
        </div>
        <div>
          <p>仓库 *</p>
          <input onfocus="blur()" v-on:click="warehouseBox" v-bind:value="warehouseValue" />
          <div class="supplier" v-show="!showWarehouse">
            <input ref="warehouseinput" v-model="warehouseName" v-on:blur="warehouseHidden" v-on:input="watchwarehouseInput"/>
            <ul>
              <li v-for="(value, index) in warehouseNameList" v-bind:key="index" v-on:click="warehouseSelect(value)">{{value}}</li>
            </ul>
          </div>
        </div>
        <div>
          <p>采购时间 *</p>
          <input type="date" />
        </div>
        <div>
          <p>商品详情</p>
          <table>
            <thead>
              <tr>
                <td>序号</td><td>名称</td><td>编号</td><td>单位</td><td>系统采购价格</td><td>实际采购价格</td><td>库存</td><td>采购数量</td><td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value,index) in todos" v-bind:key="index" v-bind:index="index">
                <td>{{index+1}}</td>
                <td><input v-on:blur="queryPurchase(valu)" v-model="valu" /></td>
                <td></td>
                <td></td>
                <td></td>
                <td><input></td>
                <td></td>
                <td><input></td>
                <td>
                  <span v-on:click="del(index)">删除</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button v-on:click.prevent="addNewTodo">+添加</button>
        </div>
        <div>
          <p>采购单总价</p>
          <input />
        </div>
        <div>
          <p>实际支付金额</p>
          <input />
        </div>
        <div>
          <p>备注</p>
          <textarea></textarea>
        </div>
      </div>
    </div>
    <div id="list-foot">
      <p><button>提交</button></p>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'
export default {
  name: "purchase",
  data() {
    return { 
      todos: [],
      supplierValue: null,
      showSupplier: true,
      supplierName: null,
      supplierNameList: null,

      warehouseValue: null,
      showWarehouse: true,
      warehouseName: null,
      warehouseNameList: null,

      purchaseValue: null
      };
  },
  methods: {
    addNewTodo: function() {
      this.todos.push(1);
    },
    del: function(index) {
      this.todos.splice(index, 1);
    },
    supplierBox: function(){
      this.showSupplier=!this.showSupplier
      this.$nextTick(
        function(){this.$refs.supplierinput.focus()}
      )  
    },
    supplierHidden: function(){  //当输入框失去焦点时，隐藏起来
      const _this=this
      setTimeout(
        function(){_this.showSupplier=!_this.showSupplier}
      ,100)
    },
    watchSupplierInput: function(){  //监听输入框，并向后台请求数据
      purchaseApi.querySupplierName(this.supplierName).then(
        response => {
          this.supplierNameList = response.data
        }
      )
    },
    supplierSelect: function(value){
      this.supplierValue=value
    },

    warehouseBox: function(){
      this.showWarehouse=!this.showWarehouse
      this.$nextTick(
        function(){this.$refs.warehouseinput.focus()}
      )  
    },
    warehouseHidden: function(){  //当输入框失去焦点时，隐藏起来
      const _this=this
      setTimeout(
        function(){_this.showWarehouse=!_this.showWarehouse}
      ,100)
    },
    watchwarehouseInput: function(){  //监听输入框，并向后台请求数据
      purchaseApi.querySupplierName(this.warehouseName).then(
        response => {
          this.warehouseNameList = response.data
          console.log(typeof response.data)
        }
      )
    },
    warehouseSelect: function(value){
      this.warehouseValue=value
    },
    
    queryPurchase: function(value){
      console.log(value)
    }
  }
};
</script>


<style>
.supplier {
  position: fixed;
}
.supplier ul {
  margin: 0;
  padding: 0;
  background-color: white;
}
.supplier li {
  height: 30px;
  line-height: 30px;
  width: 330px;
}
</style>
