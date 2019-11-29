import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//注意一定要使用数组，因为使用数组加载数据的逻辑较为简单
const store = new Vuex.Store({
  state: {
    menu: [
      {
        title: "商品采购",
        link: "/main"
      },
      {
        title: "采购退货",
        link: "/purchasreturn"
      },
      {
        title: "商品销售",
        link: "/sales"
      },
      {
        title: "销售退货",
        link: "/salesreturn"
      },
      {
        title: "库存盘点",
        link: "/inventory"
      },
      {
        title: "进销分析",
        link: "",
        children:[
          {
            title: "进销对比",
            link: "/analysis/contrast"
          },
          {
            title: "采购统计",
            link: "/analysis/procurementstatistics"
          },
          {
            title: "销售统计",
            link: "/analysis/salesstatistics"
          },
        ]
      },
      {
        title: "财务结算",
        link: "",
        children: [
          {
            title: "毛利统计",
            link: "/settlement/grossprofit"
          },
          {
            title: "客户收款",
            link: "/settlement/customercollection"
          },
          {
            title: "客户对账",
            link: "/settlement/customerreconciliation"
          },
          {
            title: "供应商对账",
            link: "/settlement/supplierreconciliation"
          },
          {
            title: "供应商汇款",
            link: "/settlement/supplierremittance"
          }
        ]
      },
      {
        title: "系统设置",
        link: "",
        children: [
          {
            title: "仓库管理",
            link: "/system/warehousemanagement"
          },
          {
            title: "商品管理",
            link: "/system/commoditymanagement"
          },
          {
            title: "供应商管理",
            link: "/system/suppliermanagement"
          },
          {
            title: "客户管理",
            link: "/system/customermanagement"
          },
        ]
      },
      {
        title: "账号管理",
        link: '',
        children: [
          {
            title: "修改密码",
            link: "/accountmanagement/changePassword"
          },
          {
            title: "添加账号",
            link: "/accountmanagement/addaccount"
          },
          {
            title: "账号管理",
            link: "/accountmanagement/accountmanagement"
          }

        ]
      }
    ]
  }
})

export default store