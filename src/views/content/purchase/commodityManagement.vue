<!--商品管理-->

<template>
  <div>
    <div id="list-head">
      <p>>> 商品管理</p>
    </div>
    <div id="list-body">
      <table-piece
        v-bind:tableTitle="tablePiece.tableTitle"
        v-bind:tableHead="tablePiece.tableHead"
        v-bind:tableBody="pageTurn.data"
      ></table-piece>
    </div>
    <div id="list-foot">
      <page-turn
        v-bind:urlData="pageTurn.url"
        v-bind:jumpUrlData="pageTurn.jumpUrl"
        v-bind:queryButtonData="pageTurn.queryButton"
        v-bind:addButtonData="pageTurn.addButton"
        v-model="pageTurn.data"
      ></page-turn>
    </div>
  </div>
</template>

<script>
import pageTurn from "../../../components/pageTurn"
import tablePiece from "../../../components/tablePiece"
export default {
  name: 'commodityManagement',
  components: {
    "page-turn": pageTurn,
    "table-piece": tablePiece
  },
  data() {
    return {
      pageTurn: {
        url: "/commodityManagemen",
        jumpUrl: '/purchase/addCommodity',
        queryButton: true,
        addButton: true,
        data: null
      },
      tablePiece: {
        tableTitle: "商品列表",
        tableHead: [
          "序号",
          "名称",
          "编号",
          "单位",
          "采购价",
          "销售价",
          "库存"
        ]
      }
    };
  }
}

</script>
