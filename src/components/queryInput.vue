<template>
  <div>
    <p>{{title}}</p>
    <input onfocus="blur()" v-on:click="showBox" v-bind:value="value" />
    <div v-show="!show" class="supplier">
      <input ref="inputFocus" v-on:blur="hiddenBox" v-on:input="watchInput" v-model="inputData" />
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
import purchaseApi from '../api/purchase'
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
    "title" //标题
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
      if(value=="没有找到此供应商"){this.value = null}
      else{this.value = value}
    },
    watchInput: function() {
      //监听输入框，并向后台请求数据
      purchaseApi.querySupplierName(this.inputData).then(response => {
        this.returnData = response.data
      });
    }
  }
};
</script>


<style>
.supplier {
  position: fixed;
}
.supplier ul {
  margin: 0;
  padding: 0;
  background-color: white;
}
.supplier li {
  height: 30px;
  line-height: 30px;
  width: 330px;
}
</style>