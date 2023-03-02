<template>
  <div id="app">
    <div class="echarts">
      <h3>Echarts</h3>
      <EChart :chart-data="eoptions"></EChart>
    </div>
    <div class="antv">
      <h3>antV</h3>
      <AntV></AntV>
    </div>
    <div class="d3">
    <h3>d3</h3>
      <D3Chart></D3Chart>
    </div>
    <div class="test">
      <D3Test></D3Test>
    </div>
    <div >
      <pieChart></pieChart>
    </div>
  </div>
</template>

<script>
import AntV from './components/antV.vue';
import D3Chart from './components/D3Chart.vue';
// import HelloWorld from './components/HelloWorld.vue'
import EChart from './components/EChart.vue'
import D3Test from './components/D3Test.vue';
import pieChart from './components/pieChart.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    AntV,
    EChart,
    D3Chart,
    D3Test,
    pieChart
},
  data() {
    return {
      options: {
        shape: {
          //points提供点连接数组
          //最终显示点依次连接的结果
          //不同图形有不同的绘制规则·
            points: [
                [0, 50],
                [10, 60,],
                [20, 40,],
                [30, 80,],
                [40, 20,],
                [50, 50,],
                [60, 40,],
                [100, 40,],
            ]
        },
        style: {
            stroke: 'red',
            lineWidth: 1,
            fill: 'none',
        },
      },
      eoptions:{
        title: {
          text: 'Echart示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
