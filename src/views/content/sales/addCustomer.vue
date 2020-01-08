<!--新增客户组件-->

<template>
  <div id="add">
    <div id="list-head"><p>>> 新增客户</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>供应商名称 *</p>
          <input v-model="addData.name" required/>
        </div>
        <div>
          <p>负责人</p>
          <input v-model="addData.people"/>
        </div>
        <div>
          <p>电话号码</p>
          <input v-model="addData.tel"/>
        </div>
        <div>
          <p>手机号码</p>
          <input v-model="addData.phone"/>
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
      <p>
        <button v-on:click="addCustomer">提交</button>
        <button v-on:click="customerManagement">返回</button>
      </p>
    </div>
  </div>
</template>

<script>
import salesApi from '../../../api/sales'
export default {
  name: 'addCustomer',
  data(){
    return {
      addData:{
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
    addCustomer: function(){
      const _this=this
      if(this.addData.name==null){return alert("用户名必填")}  //检查用户名是否为空
      //if(this.addData.phone==null){return alert("手机号码必填")}  //检查电话号码是否为空
      //if(this.addData.phone.length != 11){return alert("手机号码位数不正确")}  //检查电话号码位数是否正确
      salesApi.addCustomer(this.addData).then(
        function(res){
          if(res.status==200){
            alert("添加成功")
            _this.addData.name=null    //数据提交成功后清空输入框
            _this.addData.people=null
            _this.addData.tel=null
            _this.addData.phone=null
            _this.addData.adress=null
            _this.addData.remarks=null

          }
          else("连接出错，添加失败")
        }
      )
    },

    //跳转到客户管理页面
    customerManagement: function(){
      this.$router.push({ path: '/sales/customermanagement' })
    }
  }
}
</script>


<style src="../../css/add.css"></style>