<!--新增仓库组件-->

<template>
  <div>
    <div id="list-head"><p>>> 新增仓库</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>仓库名称 *</p>
          <input v-model="addData.name" required/>
        </div>
        <div>
          <p>负责人</p>
          <input v-model="addData.people"/>
        </div>
        <div>
          <p>地址</p>
          <input v-model="addData.adress"/>
        </div>
        <div>
          <p>备注</p>
          <textarea v-model="addData.remarks"></textarea>
        </div>
        
      </div>
    </div>
    <div id="list-foot">
      <p><button v-on:click="addWarehouse">提交</button></p>
    </div>
  </div>
</template>

<script>
import warehouseApi from '../../../api/warehouse'
export default {
  name: 'addWarehouse',
  data(){
    return {
      addData:{
        name: null,
        people: null,
        adress: null,
        remarks: null,
      }
    }
  },
  methods: {
    addWarehouse: function(){
      const _this=this
      if(this.addData.name==null){return alert("用户名必填")}
      warehouseApi.addWarehouse(this.addData).then(
        function(res){
          if(res.status==200){
            alert("添加成功")
            _this.addData.name=null
            _this.addData.people=null
            _this.addData.adress=null
            _this.addData.remarks=null

          }
          else("连接出错，添加失败")
        }
      )
    }
  }
}
</script>