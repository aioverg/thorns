<template>
  <div id="order">
    <div id="list-head"><p>>> 采购统计</p></div>
    <div id="list-body">
        <ve-histogram :data="chartData"></ve-histogram>
    </div>
    <div id="list-foot">
      <p>
        <input id="search" value="2019-10-01" onfocus="blur()" />
        <button v-on:click="query">提交</button>
      </p>
    </div>
  </div>
</template>
<style src="../../css/order.css"></style>
<script>
import VeHistogram from 'v-charts/lib/histogram.common'
import analysisApi from "../../../api/analysis";
export default {
  name: "procurementStatistics",
  components: { VeHistogram },
  data: function(){
    return {
      chartData: {
        columns: ["TN", "QTY"],
        rows: null
      }
    }
  },
  mounted () {
    this.query()
  },
  methods: {
    query: function(){
      
      analysisApi.procurementstatistics().then(
        res => {
          this.chartData.rows = res.data
        }
      )
    }
  }
}
</script>