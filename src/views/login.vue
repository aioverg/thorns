<template>
  <div id="login">
    <div>
      <p>hello</p>
        <p><span>账号：</span><input v-model="user.name" placeholder="admin"></p>
        <p><span>密码：</span><input v-model="user.password" placeholder="admin"></p>
        <button @click="login(user)">登陆</button>
        <button>测试</button>
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
        margin: 0 auto;
        padding: 18px 28px 28px 28px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: -4px 7px 46px 2px rgba(0,0,0,.1);
    }
    #login span{
        display: inline-block;
        width: 70px;
        text-align: center;
    }
    #login input{
        height: 24px;
        width: 156px;
    }
    #login p:nth-child(1){
        font-size: 38px;
        font-weight: 600;
        color: #1790fe;
    }
</style>