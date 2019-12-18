<!--翻页组件-->
<template>
  <span>
    <span v-on:click="previousPage">上一页</span>
    <span>第</span>
    <span>
      <input/>
    </span>
    <span>页</span>
    <span v-on:click="postDataParent">下一页</span>
    <span>
      共
      <span></span>页
    </span>
    <button v-on:click="query">查询</button>
    <button v-on:click="con">输出</button>
  </span>
</template>

<script>
import service from '../untils/service'
export default {
    name: 'pageTurn',
    //引入父组件的数据
    data: function(){
        return{
            "page": 20,
            "allPage": this.allPageData,
            "url": this.urlData,
            "data": this.datas,
            "queryData": null,
            "queryDatas": {
        //axios请求发送的数据
        page: 1, //请求的页面
        size: 6, //每页的数据量
        allPage: null, //总共有多少页数据，每15条算一页
        queryValue: null //查询输入的数据
      }
        }
    },
    //接受父组件的数据
    props:[
        "pageData",
        "allPageData",
        "urldata",
        "urlData",
        "datas"
    ],
    //监听父组件的数据，当父组件数据变化时，更新引入数据
    watch:{
        pageData: function(newValue){
            this.page=newValue
        },
        allPageData: function(newValue){
            this.allPage=newValue
        }
    },
    methods: {
        con: function(){console.log(this.queryData)},
        previousPage: function(){
            this.page--
            this.query()
            //this.$emit('input', this.queryData)
            console.log(this.page)
            //console.log(this.queryData)
        },
        nextPage: function(){
            this.page++,
            console.log(this.data)
        },
        query: function(){
            const _this=this
            service(
                {
                    url: this.url,
                    data: this.queryDatas,
                    method: 'get'
                }
            ).then(
            //response => this.queryData=response.data[0]
            function(response){
                _this.queryData=response.data[0]
                //_this.$emit('input', _this.queryData)
                console.log(_this.queryData)
            }
            )
        },
        postDataParent: function(){
            this.$emit('input', this.queryData)
        }
    }
}
</script>