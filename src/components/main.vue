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
          <li>
            <span>商品采购</span>
          </li>
          <li>
            <span>采购退货</span>
          </li>
          <li>
            <span>商品销售</span>
          </li>
          <li>
            <span>销售退货</span>
          </li>
          <li>
            <span>库存盘点</span>
          </li>
          <li>
            <span v-on:click="up">进销分析</span>
            <ul style="display: none;">
              <li>
                <span class="menu-child">进销对比</span>
              </li>
              <li>
                <span class="menu-child">采购统计</span>
              </li>
              <li>
                <span class="menu-child">销售统计</span>
              </li>
            </ul>
          </li>
          <li>
            <span v-on:click="up">财务结算</span>
            <ul style="display: none;">
              <li>
                <span class="menu-child">毛利统计</span>
              </li>
              <li>
                <span class="menu-child">客户收款</span>
              </li>
              <li>
                <span class="menu-child">客户对账</span>
              </li>
              <li>
                <span class="menu-child">供应商对账</span>
              </li>
              <li>
                <span class="menu-child">供应商汇款</span>
              </li>
            </ul>
          </li>
          <li>
            <span v-on:click="up">系统设置</span>
            <ul style="display: none;">
              <li>
                <span class="menu-child">仓库管理</span>
              </li>
              <li>
                <span class="menu-child">商品管理</span>
              </li>
              <li>
                <span class="menu-child">供应商管理</span>
              </li>
              <li>
                <span class="menu-child">客户管理</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="list"></div>
    </div>
  </div>
</template>

<script>
export default {
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
#content{
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
  border-right: solid 1px #e2e2e2;
}
#list{
  display: inline-block;
  flex-grow: 99;
  background-color: white;
  width: 300px;
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
</style>