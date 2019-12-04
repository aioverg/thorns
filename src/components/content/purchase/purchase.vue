<!--商品采购组件-->

<template>
  <div>
    <div id="list-head"><p>>> 商品采购</p></div>
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
