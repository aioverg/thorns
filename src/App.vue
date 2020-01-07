<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import permission from "./router/permission"
export default {
  name: 'App',
  mounted: function(){
    const _this=this
    window.addEventListener('beforeunload', permission.loadRouter(_this))
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  cursor: pointer;
}
::-webkit-scrollbar {
  width: 7px; /*滚动条的宽度*/
  height: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 7px; /*滚动条的圆角*/
  background: #c2c2c2; /*滚动条的颜色 */
}
::-webkit-scrollbar-track {
  border-radius: 7px; /*滚动条轨道圆角*/
  background: rgba(250, 250, 250, 0.9); /*滚动条轨道颜色*/
}
</style>
