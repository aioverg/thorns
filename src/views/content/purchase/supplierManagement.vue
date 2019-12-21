<!--供应商管理-->

<template>
  <div>
    <div id="list-head">
      <p>>> 供应商管理</p>
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
        v-bind:queryButtonData="pageTurn.queryButton"
        v-bind:addButtonData="pageTurn.addButton"
        v-model="pageTurn.data"
      ></page-turn>
    </div>
  </div>
</template>

<script>
import pageTurn from "../../../components/pageTurn";
import tablePiece from "../../../components/tablePiece";
export default {
  name: "supplierManagement",
  components: {
    "page-turn": pageTurn,
    "table-piece": tablePiece
  },
  data() {
    return {
      pageTurn: {
        url: "/suppliermanagement",
        queryButton: true,
        addButton: true,
        data: null
      },
      tablePiece: {
        tableTitle: "供应商列表",
        tableHead: [
          "序号",
          "名称",
          "负责人",
          "电话",
          "手机",
          "邮箱",
          "地址",
          "备注"
        ]
      }
    };
  }
};
</script>

