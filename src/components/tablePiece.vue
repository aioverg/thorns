<template>
  <table id="table-pice">
    <caption>{{tableTitle}}</caption>
    <thead>
      <tr>
        <th v-for="(value, index) in tableHead" v-bind:key="index"><span>{{value}}</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, index) in tableBody" v-bind:key="index">
        <td><span>{{index+1}}</span></td>
        <td v-for="(value1, index1) in value" v-bind:key="index1"><span>{{value1}}</span></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "tablePiece",
  props: ["tableTitle", "tableHead", "tableBody"]
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
    border: 1px solid;
    text-align: center;
  }
  #table-pice td{
    border: 1px solid;
    text-align: center;
  }
  #table-pice span {
      display: inline-block;
      margin: 0 5px;
  }
</style>