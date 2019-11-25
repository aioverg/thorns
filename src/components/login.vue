<template>
  <div id="login">
    <div>
      <p>hello</p>
        <p><span>账号：</span><input v-model="name" placeholder="admin"></p>
        <p><span>密码：</span><input v-model="password" placeholder="admin"></p>
        <button @click="login">登陆</button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'login',
  data(){
    return{
      name: 'admin',
      password: 'admin'
    }
  },
  methods: {
    //登录验证
    login: function(){
      const _this = this;
      _this.axios.get('/login').then(
        function(res){
          if(res.status===200&&res.data.name===_this.name&&res.data.password===_this.password){_this.$router.push({ path: '/main' })}
          else(alert('账号密码错误'))
        }
      )
    }
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