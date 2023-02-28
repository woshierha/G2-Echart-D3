<template>
  <div id="app">
    <HelloWorld :chart-data="options"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
    }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
