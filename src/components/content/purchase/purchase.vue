<!--商品采购组件-->

<template>
  <div>
    <div id="list-head"><p>>>商品采购</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
      <div>
        <p>供应商 *</p>
        <input />
      </div>
      <div>
        <p>仓库 *</p>
        <input />
      </div>
      <div>
        <p>采购时间 *</p>
        <input type="date" />
      </div>
      <div>
        <p>商品详情</p>
        <table>
          <thead>
            <tr>
              <td>序号</td><td>名称</td><td>编号</td><td>单位</td><td>系统采购价格</td><td>实际采购价格</td><td>库存</td><td>采购数量</td><td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value,index) in todos" v-bind:key="index" v-bind:index="index">
              <td>{{index}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><input></td>
              <td></td>
              <td><input></td>
              <td>
                <span v-on:click="del(index)">删除</span>
              </td>
            </tr>
          </tbody>
        </table>
        <button v-on:click.prevent="addNewTodo">+添加</button>
      </div>
      <div>
        <p>采购单总价</p>
        <input />
      </div>
      <div>
        <p>实际支付金额</p>
        <input />
      </div>
      <div>
        <p>备注</p>
        <textarea></textarea>
      </div>
    </div>
    </div>
    <div id="list-foot">
      <p><button>提交</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "purchase",
  data() {
    return { todos: [] };
  },
  methods: {
    addNewTodo: function() {
      this.todos.push(1);
    },
    del: function(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>
<style>
#list-body p{
  margin: 25px 0 0 0;
  font-weight: 600;
  font-size: 14px;
}
input{
  height: 25px;
  width: 330px;
}
#list-body input{
  margin: 5px 0 0 0;
}
table{
  border-collapse: collapse;
  width: 1000px;
  margin: 5px 0 0 0;
}
td{
  border: 1px solid;
  text-align: center;
}
table tr td:nth-child(1){
  width: 60px;
}
table tr td:nth-child(4){
  width: 80px;
}
table tr td:nth-child(5){
  width: 130px;
}
table tr td:nth-child(6){
  width: 130px;
}
#list table tr td:nth-child(6) input{
  width: 120px;
  height: 20px;
  margin: 2px 0;
}
table tr td:nth-child(7){
  width: 80px;
}
table tr td:nth-child(8){
  width: 100px;
}
#list table tr td:nth-child(8) input{
  width: 90px;
  height: 20px;
  margin: 0;
}
table tr td:nth-child(9){
  width: 60px;
}
table tr td:nth-child(9) span{
  color: blueviolet;
  cursor: pointer;
}
table tr td:nth-child(9) span:hover{
  color: red;
}
#list-body button{
  background-color: white;
  border: 0;
  cursor: pointer;
  margin: 5px 0 0 0;
  color: #0DB3A6;
  font-size: 14px;
}
#list-body button:hover{
  color: black;
}
textarea{
  display: block;
  min-width: 600px;
  min-height: 100px;
}
</style>