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
      <p>
        <!--@keyup.enter="query"实现输入搜索内容后点击回车键提交搜索-->
        <input v-model="queryData.queryValue" @keyup.enter="query" id="search" />
        <!--v-on:click="query"实现输入搜索内容后点查询按钮提交搜索-->
        <button v-on:click="query">查询</button>
        <button v-on:click="addSupplier">新增</button>
        <span>
          <page-turn
            v-bind:urlData="pageTurn.url"
            v-model="pageTurn.data"
          ></page-turn>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import purchaseApi from "../../../api/purchase";
import pageTurn from "../../../components/pageTurn";
import tablePiece from "../../../components/tablePiece"
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
        data: null,
      },
      tablePiece: {
        tableTitle: "供应商列表",
        tableHead: ["序号", "名称", "负责人", "电话", "手机", "邮箱", "地址", "备注"],
      },




      queryData: {
        //axios请求发送的数据
        page: 1, //请求的页面
        size: 6, //每页的数据量
        allPage: null, //总共有多少页数据，每15条算一页
        queryValue: null //查询输入的数据
      },
    };
  },
  methods: {
    con:function(){console.log(this.queryDatas)},
    supplierData: function() {
      //获取供应商数据
      purchaseApi.supplierData(this.queryData).then(response => {
        this.pageTurn.data = response.data[0]; //获取本次查询的数据
        this.queryData.allPage = Math.ceil(
          response.data[1] / this.queryData.size
        ); //获取服务器中所有符合条件的数据条数，并计算出页数。
      });
    },

    query: function() {
      //搜索功能
      if (this.queryData.queryValue) {
        this.queryData.page = 1;
        this.supplierData();
      }
      if (!this.queryData.queryValue) {
        this.supplierData();
      }
    },

    //跳转到新增供应商页面
    addSupplier: function() {
      this.$router.push({ path: "/purchase/addSupplier" });
    }
  }
};
</script>

