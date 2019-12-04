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
      <p><input><button>查询</button></p>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'

export default {
  name: 'supplierManagement',
  data(){
    return {supData: true}
  },
  mounted(){
    this.supplierAllData()    //当页面加载时执行supplierAllData方法
  },
  methods: {
    supplierAllData: function(){    //获取所有供应商数据
      purchaseApi.supplierData().then(
        response => {this.supData=response.data}
      )
    }
  }
}
</script>

