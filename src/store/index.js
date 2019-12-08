import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//注意一定要使用数组，因为使用数组加载数据的逻辑较为简单
const store = new Vuex.Store({
  state: {
    menu: [
      //进销分析块--analysis
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

      //采购管理块--purchase
      {
        title: "采购管理",
        link: "",
        children:[
          {
            title: "商品采购",
            link: "/purchase/purchase"
          },
          {
            title: "采购退货",
            link: "/purchase/purchaseReturn"
          },
          {
            title: "新增商品",
            link: "/purchase/addCommodity"
          },
          {
            title: "商品管理",
            link: "/purchase/commodityManagemen"
          },
          {
            title: "新增供应商",
            link: "/purchase/addSupplier"
          },
          {
            title: "供应商管理",
            link: "/purchase/suppliermanagement"
          },
        ]
      },

      //销售管理
      {
        title: "销售管理",
        link: "",
        children:[
          {
            title: "商品销售",
            link: "/sales/sales"
          },
          {
            title: "销售退货",
            link: "/sales/salesReturn"
          },
          {
            title: "新增客户",
            link: "/sales/addCustomer"
          },
          {
            title: "客户管理",
            link: "/sales/customermanagement"
          }
        ]
      },

      //仓库管理
      {
        title: "仓库管理",
        link: "",
        children:[
          {
            title: "库存盘点",
            link: "/warehouse/inventory"
          },
          {
            title: "新增仓库",
            link: "/warehouse/addWarehouse"
          },
          {
            title: "仓库管理",
            link: "/warehouse/warehousemanagement"
          },
        ]
      },

      //财务结算
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

      //系统设置
      {
        title: "系统设置",
        link: "",
        children: [
          {
            title: "修改密码",
            link: "/system/changepassword"
          },
          {
            title: "添加账号",
            link: "/system/addaccount"
          },
          {
            title: "账号管理",
            link: "/system/accountmanagement"
          }
        ]
      }
    ]
  }
})

export default store