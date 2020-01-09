<template>
  <div>
    <div id="header" v-bind:style="{height: bodyheight * 0.1 + 'px', lineHeight: bodyheight * 0.1 + 'px'}">
      <h2 v-bind:style="{lineHeight: bodyheight * 0.1 + 'px'}">管理系统</h2>
      <div>
        <span>用户：{{username}}</span>
        <span style="margin: 0 0 0 20px; cursor: pointer;" v-on:click="out">退出</span>
      </div>
    </div>
    <div id="content" v-bind:style="{height: bodyheight * 0.9 + 'px'}">
      <div id="menu">
        <ul>
          <li v-for="(valueOne, keyOne) in menu" v-bind:key="keyOne">
              <!--如果目录有子目录就绑定click事件，且菜单不作为路由-->
              <span v-if="valueOne.children" v-on:click="up">{{valueOne.title}}</span>
              <!--如果没有子目录就不绑定click事件，菜单作为路由-->
              <router-link v-else v-bind:to="valueOne.link" tag="span">{{valueOne.title}}</router-link>
            <ul style="display: none;">
              <!--如果有子目录则循环渲染出子目录-->
              <template v-if="valueOne.children">
              <li v-for="(valueTwo, keyTwo) in valueOne.children" v-bind:key="keyTwo">
                <router-link v-bind:to="valueTwo.link" v-bind:style="valueTwo.display" tag="span" class="menu-child">{{valueTwo.title}}</router-link>
              </li>
              </template>
            </ul>
          </li>
        </ul>
      </div>
      <div id="list-div">
        <div id="list">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      username: null
    }
  },
  mounted:function(){
    let cookieData = document.cookie.split("=")
    this.username = cookieData[1]
  },
  computed: {
    menu: function() {
      return this.$store.state.menu;
    },
    bodyheight: function(){
      return window.innerHeight
    }
  },
  methods: {
    up: function(el) {
      if (el.target.nextSibling.style.display == "none") {
        el.target.nextSibling.style.display = "block";
      } else {
        el.target.nextSibling.style.display = "none";
      }
    },
    out: function(){
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.sessionStorage.removeItem("authority");
      this.$router.push({ path: '/' })
    }
  }
};
</script>


<style>
#header {
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px solid #e2e2e2;
}
#header h2 {
  margin: 0;
  display: inline-block;
}
#header div {
  display: inline-block;
  position: relative;
  left: 30%;
}
#content {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: white;
}
#menu {
  display: inline-block;
  flex-grow: 1;
  width: 250px;
  font-size: 14px;
  overflow-y: scroll;
  overflow-x: hidden;
  height:632px;
  border-bottom:1px solid #e2e2e2;
}
#menu ul {
  padding: 0;
  width: 250px;
}
li {
  list-style: none;
  width: 250px;
}
#menu span {
  display: inline-block;
  padding: 10px 0 10px 0;
  width: 250px;
  cursor: pointer;
}
#menu .menu-child {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px 0 10px 130px;
  width: 250px;
  text-align: left;
}
#menu span:hover {
  background-color: #e6f6f4;
}
#list-div {
  display: inline-block;
  flex-grow: 99;
  width: 300px;
}
#list {
  display: flex;
  flex-direction: column;
}
#list-head {
  height: 40px;
  border-bottom: 1px solid #e2e2e2;
  text-align: left;
}
#list-head p{
  margin: 0 0 0 20px;
  height: 40px;
  line-height: 40px;
}
#list-body {
  height: 530px;
  overflow-y: scroll;
  text-align: left;
}
#list-foot {
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  height: 60px;
  line-height: 60px;
}
</style>