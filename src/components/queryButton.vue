<template>
    <span>
        <input v-model="postData.queryValue" v-on:keyup.enter="query" />
        <button v-on:click="query">查询</button>
        <button v-on:click="jump">新增</button>
    </span>
</template>

<script>
import service from '../untils/service'
export default {
    name: "queryButton",
    data: function(){
        return{
            inputValue: null,
            url: this.urlData,
            returnData: null,
            postData: {      //axios请求发送的数据
                page: 1,         //请求的页面
                size: 6,         //每页的数据量
                allPage: null,   //总共有多少页数据，每15条算一页
                queryValue: null
            } //查询输入的数据
        }
    },
    props: [
        "urlData",
    ],
    methods: {
        query: function(){
            const _this=this
            service({
                url: this.url,
                data: this.postData,
                method: 'get'
            }).then(
                function(response){
                    _this.returnData=response.data[0]
                    _this.$emit('input', _this.returnData)
                }
            )
        },
        jump: function(){
            this.$router.push({ path: "/purchase/addSupplier" })
        }
    }

}
</script>