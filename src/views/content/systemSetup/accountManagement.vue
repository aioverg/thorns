<!--账号管理-->
<template>
  <div>
    <div id="list-head">
      <p>>> 账号管理</p>
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
        v-model="pageTurn.data"
      ></page-turn>
    </div>
  </div>
</template>



<script>
import pageTurn from "../../../components/pageTurn"
import tablePiece from "../../../components/tablePiece"
import systemApi from '../../../api/system'
export default {
  name: 'accountManagement',
  components: {
    "page-turn": pageTurn,
    "table-piece": tablePiece,
  },
  data: function(){
    return{
      pageTurn: {
        url:"/system/accountmanagement",
        queryButton: true,
        addButton: true,
        jumpUrl: "/system/addaccount",
        data: null
      },
      tablePiece: {
        tableTitle: "账户列表",
        tableHead: ["序号", "账户名", "部门"],

        manageOne: true,
        manageOneTitle: "管理",
        manageOneValue: "修改",
      }
    }
  },
  methods: {
    manageOneFuc: function(value){
      const _this = this
      systemApi.allData(value[0]).then(
        function(res){
          _this.$router.push(
            {
              name: "modityAccount",
              params: {
                userData: res.data,
              }
            }
          )
        }
      )
    }
  }
}
</script>