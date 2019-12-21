<!--组件完成数据查询和翻页功能-->
<!--组件对外有两个变量，urlData用于获取数据接口，returnData用于向父组件推送获取的数据-->
<template>
  <span id="page-turn">
    <span id="page-turn-one">
      <span v-if="queryButton">
        <input v-model="postData.queryValue" v-on:keyup.enter="search" />
        <button v-on:click="search">查询</button>
      </span>
      <button v-on:click="jump" v-if="addButton" id="page-turn-add">新增</button>
    </span>
    <span id="page-turn-two">
      <span v-on:click="previousPage">上一页</span>
      <span>第</span>
      <span>
        <input v-model="postData.page" v-on:keyup.enter="query" />
      </span>
      <span>页</span>
      <span v-on:click="nextPage">下一页</span>
      <span>
        <span>共</span>
        <span>{{postData.allPage}}</span>页
      </span>
    </span>
  </span>
</template>

<script>
import service from "../untils/service";
export default {
  name: "pageTurn",
  data: function() {
    return {
      url: this.urlData,
      jumpUrl: this.jumpUrlData,
      queryButton: this.queryButtonData,
      addButton: this.addButtonData,
      returnData: null, //次数据会传入父组件
      postData: {
        //axios请求发送的数据
        page: 1, //请求的页面
        size: 6, //每页的数据量
        allPage: null, //总共有多少页数据，每15条算一页
        queryValue: null //查询输入的数据
      }
    };
  },
  props: ["urlData", "queryButtonData", "addButtonData", "jumpUrlData"], //接收父组件的数据
  watch: {
    //监听父组件的数据，当父组件数据变化时，更新引入数据
    pageData: function(newValue) {
      this.page = newValue;
    },
    allPageData: function(newValue) {
      this.allPage = newValue;
    }
  },
  mounted() {
    //当页面加载时执行query方法获取数据
    this.query();
  },
  methods: {
    previousPage: function() {
      //获取上一页数据
      if (this.postData.page > 1) {
        this.postData.page--;
        this.query();
      } else {
        alert("第一页");
      }
    },
    nextPage: function() {
      //获取下一页数据
      if (this.postData.page < this.postData.allPage) {
        this.postData.page++;
        this.query();
      } else {
        alert("最后一页");
      }
    },
    query: function() {
      //获取后台数据
      const _this = this;
      return service({
        url: this.url,
        data: this.postData,
        method: "get"
      }).then(function(response) {
        _this.returnData = response.data[0]
        _this.postData.allPage = Math.ceil(
          response.data[1] / _this.postData.size
        );
        _this.$emit("input", _this.returnData);
      });
    },
    search: function(){
      this.query()
      this.postData.page = 1
    },
    jump: function() {
      //跳转页面
      this.$router.push({ path: this.jumpUrl });
    }
  }
};
</script>

<style>
#page-turn {
  display: block;
  margin: 0 15px;
}
#page-turn-one {
  float: left;
}
#page-turn-two {
  float: right;
  margin: 0 135px 0 0;

}
#page-turn-one input {
  height: 25px;
  width: 250px;
}
#page-turn-one button {
  height: 34px;
  width: 110px;
  margin: 0 0 0 15px;
  background-color: #0db3a6;
  border: 1px solid #0db3a6;
  cursor: pointer;
  color: #fff;
}
#page-turn-one button:hover {
  background-color: #0a8d83;
  border: 1px solid #0a8d83;
}
#page-turn-two input {
    height: 20px;
    width: 45px;
    text-align: center;
}
#page-turn-two span{
    margin: 0 8px 0 0;
}
</style>