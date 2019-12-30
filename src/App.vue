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
    window.addEventListener('beforeunload', permission.loadRouter())
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
