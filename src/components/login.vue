<template>
    <div id="login">
        <div>
            <p>hello</p>
            <p><span>账号：</span><input></p>
            <p><span>密码：</span><input></p>
            <button @click="login">登陆</button>
        </div>
    </div>
</template>
<script>

export default {
  name: 'login',
  methods: {
      login: function(){this.$router.push({ path: '/main' })}  //点击登录跳转到主页面
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
    }
    #login p:nth-child(1){
        font-size: 38px;
        font-weight: 600;
        color: #1790fe;
    }
</style>