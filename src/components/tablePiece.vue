<template>
  <table id="table-pice">
    <caption>{{tableTitle}}</caption>
    <thead>
      <tr>
        <th v-for="(value, index) in tableHead" v-bind:key="index"><span>{{value}}</span></th>
        <th v-if="manageOne">{{manageOneTitle}}</th>
        <th v-if="manageTwo">{{manageTwoTitle}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, index) in tableBody" v-bind:key="index">
        <td><span>{{index+1}}</span></td>
        <td v-for="(value1, index1) in value" v-bind:key="index1"><span>{{value1}}</span></td>
        <td v-if="manageOne" class="manage" v-on:click="manageOneFuc(value)">{{manageOneValue}}</td>
        <td v-if="manageTwo" class="manage" v-on:click="manageTwoFuc(value)">{{manageTwoValue}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "tablePiece",
  props: [
    "tableTitle",
    "tableHead",
    "tableBody",

    "manageOne",
    "manageOneTitle",
    "manageOneValue",

    "manageTwo",
    "manageTwoTitle",
    "manageTwoValue"
  ],
  methods: {
    manageOneFuc: function(param){  //接收父组件的方法
      this.$parent.manageOneFuc(param)
    },
    manageTwoFuc: function(param){
      this.$parent.manageTwoFuc(param)
    }
  },
};
</script>
<style>
  #table-pice {
    margin: 0 15px;
  }
  #table-pice caption {
    height: 40px;
    line-height: 40px;
    color: #2c3e50;
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    width: 90%;
  }
  #table-pice th{
    border: 1px solid #0DB3A6;
    text-align: center;
    height: 35px;
  }
  #table-pice td{
    border: 1px solid #0DB3A6;
    text-align: center;
    height: 35px;
  }
  #table-pice span {
      display: inline-block;
      margin: 0 5px;
  }
  #table-pice .manage {
    cursor: pointer;
  }
</style>