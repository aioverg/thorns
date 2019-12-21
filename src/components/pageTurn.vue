<!--翻页组件-->
<!--组件对外有两个变量，urlData用于获取数据接口，returnData用于向父组件推送获取的数据-->
<template>
    <span>
        <span>

        </span>
        <span>
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
  //引入父组件的数据
    data: function() {
        return {
            url: this.urlData,
            returnData: null,
            postData: {
                //axios请求发送的数据
                page: 1, //请求的页面
                size: 6, //每页的数据量
                allPage: null, //总共有多少页数据，每15条算一页
                queryValue: null //查询输入的数据
            }
        };
  },
    //接受父组件的数据
    props: ["urlData"],
  //监听父组件的数据，当父组件数据变化时，更新引入数据
    watch: {
        pageData: function(newValue) {
            this.page = newValue;
        },
        allPageData: function(newValue) {
            this.allPage = newValue;
        }
    },
    mounted() {
    //当页面加载时执行supplierAllData方法
        this.query();
    },

    methods: {
    //获取上一页数据
        previousPage: function() {
            if (this.postData.page > 1) {
                this.postData.page--;
                this.query();
            } else {
                alert("第一页");
            }
        },
    //获取下一页数据
        nextPage: function() {
            if (this.postData.page < this.postData.allPage) {
                this.postData.page++;
                this.query();
            } else {
                alert("最后一页");
            }
        },
    //获取后台数据
        query: function() {
            const _this = this;
            return service({
                url: this.url,
                data: this.postData,
                method: "get"
            }).then(function(response) {
                _this.returnData = response.data[0];
                _this.postData.allPage = Math.ceil(
                    response.data[1] / _this.postData.size
                );
                _this.$emit("input", _this.returnData);
            });
        }
    }
};
</script>