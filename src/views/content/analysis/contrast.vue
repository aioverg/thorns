<template>
  <div id="order">
    <div id="list-head"><p>>> 商品采购</p></div>
    <div id="list-body">
        <ve-line :data="chartData"></ve-line>
    </div>
    <div id="list-foot">
      <p>
        <input id="search" onfocus="blur()" />
        <button v-on:click="query">提交</button>
      </p>
    </div>
  </div>
</template>
<style src="../../css/order.css"></style>
<script>
import VeLine from 'v-charts/lib/line.common'
import analysisApi from "../../../api/analysis";
export default {
  name: "contrast",
  components: { VeLine },
  data: function(){
    return {
      chartData: {
        columns: ["Date", "PUR", "RD"],
        rows: null
      }
    }
  },
  mounted () {
    this.query()
  },
  methods: {
    query: function(){
      
      analysisApi.contrast().then(
        res => {
          this.chartData.rows = res.data
        }
      )
    }
  }
}
</script>
