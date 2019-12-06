<!--商品管理-->

<template>
  <div>
    <div id="list-head"><p>>> 供应商管理</p></div>
    <div id="list-body">
      <div style="margin: 0 20px 30px 20px;">
      <div>
        <p>商品列表</p>
        <table>
          <thead>
            <tr>
              <td>序号</td><td>名称</td><td>编号</td><td>单位</td><td>采购价</td><td>销售价</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <div id="list-foot">
      <p>
        <!--@keyup.enter="query"实现输入搜索内容后点击回车键提交搜索-->
        <input id="search">
        <!--v-on:click="query"实现输入搜索内容后点查询按钮提交搜索-->
        <button>查询</button>
        <span>
          <span>上一页</span>
          <span>第</span>
          <span>
            <input>
          </span>
          <span>页</span>
          <span>下一页</span>
          <span>共<span></span>页</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commodityManagement',
/*  data(){
    return {
      supData: Array,//列表数据
      queryParam:{    //axios请求发送的数据
        page: 1,  //请求的页面
        size: 6,  //每页的数据量
        allPage: 5,  //总共有多少页数据，每15条算一页
        queryValue: null, //查询输入的数据
      }
    }
  },
  mounted(){
    this.supplierData()    //当页面加载时执行supplierAllData方法
  },
  methods: {
    supplierData: function(){    //获取供应商数据
      purchaseApi.supplierData(this.queryParam).then(
        response => {
          this.supData=response.data[0]  //获取本次查询的数据
          this.queryParam.allPage=Math.ceil(response.data[1]/this.queryParam.size)  //获取服务器中所有符合条件的数据条数，并计算出页数。
        }
      )
    },
    up: function(){    //向前翻页
      if(this.queryParam.page<this.queryParam.allPage){
        this.queryParam.page++
        this.supplierData()
      }
      else(alert("最后一页"))
    },
    down: function(){    //向后翻页
      if(this.queryParam.page>1){
        this.queryParam.page--
        this.supplierData()
      }
      else(alert("第一页"))
    },

    query: function(){    //搜索功能
      if(this.queryParam.queryValue){
        this.queryParam.page=1
        this.supplierData()
      }
      if(!this.queryParam.queryValue){
        this.supplierData()
      }
    }
  }
*/
}

</script>
