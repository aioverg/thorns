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
            <span>
              <router-link to="/main">商品采购</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/purchasreturn">采购退货</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/sell">商品销售</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/sellreturn">销售退货</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/inventory">库存盘点</router-link>
            </span>
          </li>
          <li>
            <span v-on:click="up">进销分析</span>
            <ul style="display: none;">
              <li>
                <span class="menu-child">
                  <router-link to="/analysis/contrast">进销对比</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/analysis/procurementstatistics">采购统计</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/analysis/salesstatistics">销售统计</router-link>
                  </span>
              </li>
            </ul>
          </li>
          <li>
            <span v-on:click="up">财务结算</span>
            <ul style="display: none;">
              <li>
                <span class="menu-child">
                  <router-link to="/settlement/grossprofit">毛利统计</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/settlement/customercollection">客户收款</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/settlement/customerreconciliation">客户对账</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/settlement/supplierreconciliation">供应商对账</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/settlement/supplierremittance">供应商汇款</router-link>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span v-on:click="up">系统设置</span>
            <ul style="display: none;">
              <li>
                <span class="menu-child">
                  <router-link to="/system/warehousemanagement">仓库管理</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/system/commoditymanagement">商品管理</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/system/suppliermanagement">供应商管理</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/system/customermanagement">客户管理</router-link>
                </span>
              </li>
              <li>
                <span class="menu-child">
                  <router-link to="/system/privilegemanagement">权限管理</router-link>
                </span>
              </li>
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
#list-head p{
  margin: 0 0 0 20px;
  height: 40px;
  line-height: 40px;
}
#list-foot button{
  height: 34px;
  width: 118px;
  float: left;
  margin: 0 0 0 20px;
  background-color: #0DB3A6;
  border: 1px solid #0DB3A6;
  cursor: pointer;
  color: #fff;
}
#list-foot button:hover{
  background-color: #0a8d83;
  border: 1px solid #0a8d83;
}
</style>