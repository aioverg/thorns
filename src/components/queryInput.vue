<template>
  <div>
    <p>{{title}}</p>
    <input onfocus="blur()" v-on:click="showBox" v-bind:value="value" />
    <div v-show="!show" class="query-input">
      <input ref="inputFocus" v-on:blur="hiddenBox" v-on:input="watchInput(url, inputData)" v-model="inputData" />
      <ul>
        <li
          v-for="(value, index) in returnData"
          v-bind:key="index"
          v-on:click="selectValue(value)"
        >{{value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import service from '../untils/service'
export default {
  name: "queryInput",
  data: function() {
    return {
      show: true,
      value: null,
      inputData: null,
      returnData: null,
    };
  },
  props: [
    "title", //标题
    "url"
  ],
  methods: {
    showBox: function() {
      this.show = !this.show;
      this.$nextTick(function() {
        this.$refs.inputFocus.focus();
      });
    },
    hiddenBox: function() {
      const _this = this;
      setTimeout(function() {
        if (_this.show) {
          return;
        } else _this.show = !_this.show;
      }, 300);
    },
    selectValue: function(value) {
      if(value=="未找到"){this.value = null}
      else{this.value = value}
      this.value=value
    },

    //查询函数
    watchInput: function(url, data){
      service(
        {
          url: url,
          data: data,
          method: 'get'
        }
      ).then(
        response => {this.returnData = response.data}
      )
    }
  }
};
</script>


<style>
.query-input {
  position: fixed;
}
.query-input ul {
  margin: 0;
  padding: 0;
  background-color: white;
}
.query-input li {
  height: 30px;
  line-height: 30px;
  width: 330px;
}
</style>