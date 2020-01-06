<template>
  <div id="login">
    <div>
      <p>hello</p>
      <p><span><img src="./picture/user.svg" /></span><input v-model="user.name" placeholder="admin"></p>
      <p><span><img src="./picture/lock.svg" /></span><input v-model="user.password" placeholder="admin"></p>
      <p><button @click="login(user)">登陆</button></p>
    </div>
  </div>
</template>
<script>
import permission from "../router/permission"
export default {
  name: 'login',
  data(){
    return{
      user: {
        name: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    login: permission.login,
  }
}
</script>
<style>
  #login div{
    width: 320px;
    margin: 100px auto 0;
    padding: 18px 28px 28px 28px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -4px 7px 46px 2px rgba(0,0,0,.1);
  }
  #login span{
    display: inline-block;
    text-align: center;
    position: relative;
    left: 25px;
    top: 3px;
    
  }
  #login input{
    height: 22px;
    width: 160px;
    padding: 4px 11px 4px 30px;
    border: 1px solid #0DB3A6;
    border-radius: 4px;
  }
  #login p:nth-child(1){
    font-size: 38px;
    font-weight: 600;
    color: #1790fe;
    margin: 20px 0;
  }
  #login button {
    width: 203px;
    height: 32px;
    border-radius: 4px;
    background-color: #1790fe;
    color: #fff;
    border: 0;
    padding: 0;
    margin: 0 0 0 16px;
  }
  #login button:hover{
    background-color: #40a9ff;
  }
</style>