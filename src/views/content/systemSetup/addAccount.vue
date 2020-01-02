<!--添加账号-->

<template>
  <div id="order">
    <div id="list-head"><p>>> 添加账号</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
        <div>
          <p>用户名 *</p>
          <input />
        </div>
        <div>
          <p>密码 *</p>
          <input />
        </div>
        <div>
          <p>部门 *</p>
          <input />
        </div>
        <div>
          <p>权限</p>
          <div>
            <p>图表</p>
            <label>
              <span>进销对比</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>采购统计</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>销售统计</span>
              <input type="checkbox" />
            </label>
          </div>
          <div>
            <p>采购</p>
            <label>
              <span>商品采购</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>采购退货</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>采购订单</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>退货订单</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>商品管理</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>供应商管理</span>
              <input type="checkbox" />
            </label>
          </div>
          <div>
            <p>销售</p>
            <label>
              <span>商品销售</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>销售退货</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>退货订单</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>销售订单</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>客户管理</span>
              <input type="checkbox" />
            </label>
          </div>
          <div>
            <p>仓管</p>
            <label>
              <span>库存盘点</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>仓库管理</span>
              <input type="checkbox" />
            </label>
          </div>
          <div>
            <p>财务</p>
            <label>
              <span>毛利统计</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>客户收款</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>客户对账</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>供应商对账</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>供应商汇款</span>
              <input type="checkbox" />
            </label>
          </div>
          <div>
            <p>系统</p>
            <label>
              <span>修改密码</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>添加账号</span>
              <input type="checkbox" />
            </label>
            <label>
              <span>账号管理</span>
              <input type="checkbox" />
            </label>
          </div>
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
  name: 'addAccount'
}
</script>


<style>
  @import "../../css/order.css"
</style>