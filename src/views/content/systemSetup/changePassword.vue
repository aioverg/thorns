<!--修改密码-->

<template>
  <div id="order">
    <div id="list-head">
      <p>>> 修改密码</p>
    </div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>新密码 *</p>
          <input class="input" v-model="password" />
        </div>
        <div>
          <p>重复密码 *</p>
          <input class="input" v-model="passworda" />
        </div>
      </div>
    </div>
    <div id="list-foot">
      <p>
        <button v-on:click="postData">提交{{userName}}</button>
      </p>
    </div>
  </div>
</template>

<script>
import systemApi from "../../../api/system"
export default {
  name: 'changePassword',
  data: function(){
    return {
      password: null,
      passworda: null
    }
  },
  computed: {
    userName: function(){
    let cookieData = document.cookie.split("=")
    return cookieData[1]
    }
  },
  methods: {
    postData: function(){
      if(this.password == this.passworda){
        let data = [this.userName, this.passworda]
        systemApi.changePassword(data)
      }
      else{
        alert("密码不一致")
      }
    }
  }
}
</script>

<style src="../../css/order.css"></style>