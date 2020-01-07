<!--仓库管理-->

<template>
  <div>
    <div id="list-head">
      <p>>> 仓库管理</p>
    </div>
    <div id="list-body">
      <table-piece
        v-bind:tableTitle="tablePiece.tableTitle"
        v-bind:tableHead="tablePiece.tableHead"
        v-bind:tableBody="pageTurn.data"
        v-bind:manageOne="tablePiece.manageOne"
        v-bind:manageOneTitle="tablePiece.manageOneTitle"
        v-bind:manageOneValue="tablePiece.manageOneValue"
      ></table-piece>
    </div>
    <div id="list-foot">
      <page-turn
        v-bind:url="pageTurn.url"
        v-bind:jumpUrl="pageTurn.jumpUrl"
        v-bind:queryButton="pageTurn.queryButton"
        v-bind:addButton="pageTurn.addButton"
        v-bind:manageOneFuc="manageOneFuc"
        v-model="pageTurn.data"
      ></page-turn>
    </div>
  </div>
</template>

<script>
import pageTurn from "../../../components/pageTurn"
import tablePiece from "../../../components/tablePiece"
import warehouseApi from "../../../api/warehouse"
export default {
  name: "warehouseManagement",
  components: {
    "page-turn": pageTurn,
    "table-piece": tablePiece
  },
  data() {
    return {
      pageTurn: {
        url: "/warehousemanagement",
        jumpUrl: '/warehouse/addWarehouse',
        queryButton: true,
        addButton: true,
        data: null
      },
      tablePiece: {
        tableTitle: "商品列表",
        manageOne: true,
        manageOneTitle: "管理",
        manageOneValue: "盘点",
        tableHead: [
          "序号",
          "仓库名称",
          "负责人",
          "仓库地址",
          "备注"
        ]
      }
    };
  },

  methods: {
    manageOneFuc: function(value){
      const _this=this
      warehouseApi.queryStock(value[0]).then(
        function(res){
          _this.$router.push(
            {
              name: "inventory",
              params: {
                data: res.data,
                id: value[0]
              }
            }
          )
        }
      )
    }
  }
};
</script>