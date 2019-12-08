<!--新增商品组件-->

<template>
  <div>
    <div id="list-head"><p>>> 新增商品</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>商品名称 *</p>
          <input v-model="addData.name" required/>
        </div>
        <div>
          <p>编号</p>
          <input v-model="addData.id"/>
        </div>
        <div>
          <p>单位</p>
          <input v-model="addData.unit"/>
        </div>
        <div>
          <p>采购价</p>
          <input v-model="addData.purchasePrice"/>
        </div>
        <div>
          <p>销售价</p>
          <input v-model="addData.sellingPaice"/>
        </div>
      </div>
    </div>
    <div id="list-foot">
      <p><button v-on:click="addCommodity">提交</button></p>
    </div>
  </div>
</template>

<script>
import purchaseApi from '../../../api/purchase'
export default {
  name: 'addCommodity',
  data(){
    return {
      addData:{
        name: null,
        id: null,
        unit: null,
        purchasePrice: null,
        sellingPaice: null,
      }
    }
  },
  methods: {
    //新增供应商
    addCommodity: function(){
      const _this=this
      if(this.addData.name==null){return alert("用户名必填")}  //检查用户名是否为空
      //if(this.newCommodity.phone==null){return alert("手机号码必填")}  //检查电话号码是否为空
      //if(this.newCommodity.phone.length != 11){return alert("手机号码位数不正确")}  //检查电话号码位数是否正确
      purchaseApi.addCommodity(this.addData).then(
        function(res){
          if(res.status==200){
            alert("添加成功")
            _this.addData.name=null    //数据提交成功后清空输入框
            _this.addData.id=null
            _this.addData.unit=null
            _this.addData.purchasePrice=null
            _this.addData.sellingPaice=null

          }
          else("连接出错，添加失败")
        }
      )
    }
  }
}
</script>