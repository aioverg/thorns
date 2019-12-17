<!--翻页组件-->
<template>
  <span>
    <span v-on:click="previousPage(page)">上一页</span>
    <span>第</span>
    <span>
      <input/>
    </span>
    <span>页</span>
    <span v-on:click="nextPage(page)">下一页</span>
    <span>
      共
      <span></span>页
    </span>
  </span>
</template>

<script>
import service from '../untils/service'
export default {
    name: 'pageTurn',
    //引入父组件的数据
    data: function(){
        return{
            "page": this.pageData,
            "allPage": this.allPageData,
            "url": this.urlData,
            "data": this.datas,
            "queryData": null
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
        change: function(value){this.$emit("event", value)},
        previousPage: function(){
            this.page--
        },
        nextPage: function(){
            this.page++,
            console.log(this.data)
        },
        query: function(){
            service(
                {
                    url: this.url,
                    data: this.data,
                    method: 'get'
                }
            ).then(
            response => this.queryData=response.data[0]
            )
        }
    }
}
</script>