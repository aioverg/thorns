const menuData = {
  //进销分析块--analysis
  analysis: {
    title: "进销分析",
    link: "",
    children: {
      contrast: {
        title: "进销对比",
        link: "/analysis/contrast"
      },
      procurementStatistics: {
        title: "采购统计",
        link: "/analysis/procurementstatistics"
      },
      salesStatistics: {
        title: "销售统计",
        link: "/analysis/salesstatistics"
      },
    }
  },

  //采购管理块--purchase
  purchase: {
    title: "采购管理",
    link: "",
    children: {
      purchase: {
        title: "商品采购",
        link: "/purchase/purchase"
      },
      purchaseRturn: {
        title: "采购退货",
        link: "/purchase/purchaseReturn"
      },
      purchaseOrder: {
        title: "采购订单",
        link: "/purchase/purchaseOrder"
      },
      purchaseReturnOrder: {
        title: "退货订单",
        link: "/purchase/purchaseReturnOrder"
      },
      addCommodity: {
        title: "新增商品",
        link: "/purchase/addCommodity",
        display: "display: none"  //不显示的菜单栏
      },
      commodityManagement: {
        title: "商品管理",
        link: "/purchase/commodityManagemen"
      },
      addSupplier: {
        title: "新增供应商",
        link: "/purchase/addSupplier",
        display: "display: none"  //不显示的菜单栏
      },
      supplierManagement: {
        title: "供应商管理",
        link: "/purchase/suppliermanagement"
      },
    }
  },

  //销售管理--sales
  sales: {
    title: "销售管理",
    link: "",
    children: {
      sales: {
        title: "商品销售",
        link: "/sales/sales"
      },
      salesReturn: {
        title: "销售退货",
        link: "/sales/salesReturn"
      },
      salesReturnOrder: {
        title: "退货订单",
        link: "/sales/salesReturnOrder"
      },
      salesOrder: {
        title: "销售订单",
        link: '/sales/salesOrder'
      },
      addCustomer: {
        title: "新增客户",
        link: "/sales/addCustomer",
        display: "display: none"  //不显示的菜单栏
      },
      customerManagement: {
        title: "客户管理",
        link: "/sales/customermanagement"
      }
    }
  },

  //仓库管理--warehouse
  warehouse: {
    title: "仓库管理",
    link: "",
    children: {
      inventory: {
        title: "库存盘点",
        link: "/warehouse/inventory"
      },
      addWarehouse: {
        title: "新增仓库",
        link: "/warehouse/addWarehouse",
        display: "display: none", //不显示的菜单栏
      },
      warehouseManagement: {
        title: "仓库管理",
        link: "/warehouse/warehousemanagement"
      },
    }
  },

  //财务结算--finance
  finance: {
    title: "财务结算",
    link: "",
    children: {
      grossProfit: {
        title: "毛利统计",
        link: "/settlement/grossprofit"
      },
      customerCollection: {
        title: "客户收款",
        link: "/settlement/customercollection"
      },
      customerReconciliation: {
        title: "客户对账",
        link: "/settlement/customerreconciliation"
      },
      supplierReconciliation: {
        title: "供应商对账",
        link: "/settlement/supplierreconciliation"
      },
      supplierRemittance: {
        title: "供应商汇款",
        link: "/settlement/supplierremittance"
      }
    }
  },

  //系统设置--system
  system: {
    title: "系统设置",
    link: "",
    children: {
      changePassword: {
        title: "修改密码",
        link: "/system/changepassword"
      },
      addAccount: {
        title: "添加账号",
        link: "/system/addaccount"
      },
      modityAccount: {
        title: "修改账号",
        link: "/system/modityAccount",
        display: "display: none"  //不显示的菜单栏
      },
      accountManagement: {
        title: "账号管理",
        link: "/system/accountmanagement"
      }
    }
  }
}

export default menuData