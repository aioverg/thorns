<template>
  <div>
    <div id="header">
      <h2>
        <span>进销存系统</span>
      </h2>
    </div>
    <div id="content">
      <div id="menu">
        <ul>
          <li v-for="(one, idone) in menu" v-bind:key="idone">
              <!--如果目录有子目录就绑定click事件，且菜单不作为路由-->
              <span v-if="one.children" v-on:click="up">{{one.title}}</span>
              <!--如果没有子目录就不绑定click事件，菜单作为路由-->
              <router-link v-else v-bind:to="one.link" tag="span">{{one.title}}</router-link>
            <ul style="display: none;">
              <!--如果有子目录则循环渲染出子目录-->
              <template v-if="one.children">
              <li v-for="(two, idtwo) in one.children" v-bind:key="idtwo">
                <router-link v-bind:to="two.link" v-bind:style="two.display" tag="span" class="menu-child">{{two.title}}</router-link>
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
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  methods: {
    up: function(el) {
      if (el.target.nextSibling.style.display == "none") {
        el.target.nextSibling.style.display = "block";
      } else {
        el.target.nextSibling.style.display = "none";
      }
    }
  }
};
</script>


<style>
#header {
  box-sizing: border-box;
  background-color: white;
}
#content {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
}
#menu {
  display: inline-block;
  flex-grow: 1;
  width: 300px;
  font-size: 14px;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 580px;
}
#menu ul {
  padding: 0;
  width: 280px;
}
li {
  list-style: none;
  width: 280px;
}
#menu span {
  display: inline-block;
  padding: 10px 0 10px 0;
  width: 280px;
  cursor: pointer;
}
#menu .menu-child {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px 0 10px 140px;
  width: 280px;
  text-align: left;
}
#menu span:hover {
  background-color: #e6f6f4;
}
::-webkit-scrollbar {
  width: 9px; /*滚动条的宽度*/
}
::-webkit-scrollbar-thumb {
  border-radius: 6px; /*滚动条的圆角*/
  background: #c2c2c2; /*滚动条的颜色 */
}
::-webkit-scrollbar-track {
  border-radius: 10px; /*滚动条轨道圆角*/
  background: rgba(250, 250, 250, 0.9); /*滚动条轨道颜色*/
}
#list-div {
  display: inline-block;
  flex-grow: 99;
  background-color: white;
  width: 300px;
  height: 580px;
}
#list {
  display: flex;
  flex-direction: column;
}
#list-head {
  height: 40px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  text-align: left;
}
#list-body {
  height: 480px;
  overflow-y: scroll;
  text-align: left;
}
#list-foot {
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  height: 60px;
}
</style>