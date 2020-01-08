
<template>
  <div id="order">
    <div id="list-head"><p>>> 库存盘点</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>仓库 *</p>
          <input v-model="id" v-on:keyup.enter="query" />
        </div>
        <div>
          <p>仓管员</p>
          <input />
        </div>
        <div>
          <p>盘点时间</p>
          <input />
        </div>
        <div>
          <p>物料详情</p>
          <table>
            <thead>
              <tr>
                <td>序号</td><td>名称</td><td>编号</td><td>单位</td><td>库存</td><td>盘点数量</td><td>历史盈亏</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in listData" v-bind:key="index">
                <td>{{index+1}}</td>
                <td>{{value[0]}}</td>
                <td>{{value[1]}}</td>
                <td>{{value[2]}}</td>
                <td>{{value[3]}}</td>
                <td><input style="width:80px; text-align:center;" /></td>
                <td>{{value[4]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="list-foot">
      <p>
        <button>提交</button>
        <button v-on:click="back">返回</button>
      </p>
    </div>
  </div>
</template>


<script>
import warehouseApi from "../../../api/warehouse"
export default {
  name: 'inventory',
  data: function(){
    return{
      listData: null,
      id: null,
    }
  },
  mounted: function(){
    this.listData = this.$route.params.data
    this.id = this.$route.params.id
  },
  methods: {
    query: function(){
      const _this=this
      warehouseApi.queryStock(_this.id).then(
        function(res){
          if(res.data==null){
            _this.listData=null
            alert("仓库不存在")
          }
          else{_this.listData = res.data}
        }
      )
    },
    back: function(){
      this.$router.push({path:"/warehouse/warehousemanagement"})
    }
  }
}
</script>



<style src="../../css/order.css"></style>