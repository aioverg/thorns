<!--新增供应商组件-->

<template>
  <div>
    <div id="list-head"><p>>> 新增供应商</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>供应商名称 *</p>
          <input v-model="addSuppliers.name" required/>
        </div>
        <div>
          <p>负责人</p>
          <input v-model="addSuppliers.people"/>
        </div>
        <div>
          <p>电话号码</p>
          <input v-model="addSuppliers.tel"/>
        </div>
        <div>
          <p>手机号码</p>
          <input v-model="addSuppliers.phone"/>
        </div>
        <div>
          <p>地址</p>
          <input v-model="addSuppliers.adress"/>
        </div>
        <div>
          <p>备注</p>
          <textarea v-model="addSuppliers.remarks"></textarea>
        </div>
        
      </div>
    </div>
    <div id="list-foot">
      <p><button v-on:click="addSupplier">提交</button></p>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'
export default {
  name: 'addSupplier',
  data(){
    return {
      addSuppliers:{
        name: null,
        people: null,
        tel: null,
        phone: null,
        adress: null,
        remarks: null,
      }
    }
  },
  methods: {
    //新增供应商
    addSupplier: function(){
      const _this=this
      if(this.addSuppliers.name==null){return alert("用户名必填")}  //检查用户名是否为空
      //if(this.addSuppliers.phone==null){return alert("手机号码必填")}  //检查电话号码是否为空
      //if(this.addSuppliers.phone.length != 11){return alert("手机号码位数不正确")}  //检查电话号码位数是否正确
      purchaseApi.addSupplier(this.addSuppliers).then(
        function(res){
          if(res.status==200){
            alert("添加成功")
            _this.addSuppliers.name=null    //数据提交成功后清空输入框
            _this.addSuppliers.people=null
            _this.addSuppliers.tel=null
            _this.addSuppliers.phone=null
            _this.addSuppliers.adress=null
            _this.addSuppliers.remarks=null

          }
          else("连接出错，添加失败")
        }
      )
    }
  }
}
</script>