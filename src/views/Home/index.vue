<template>
  <div>
   <h3>图表展示</h3>
    <div class="menu">
      <router-link to="/D3">D3</router-link>
      <router-link to="/G2">G2</router-link>
      <router-link to="/Echart">Echarts</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>
 <script>
 import AntV from '@/components/antV.vue';
import D3Chart from '@/components/D3Chart.vue';
// import HelloWorld from './components/HelloWorld.vue'
import EChart from '@/components/EChart.vue'
import D3Test from '@/components/D3Test.vue';
import pieChart from '@/components/pieChart.vue';
import router from '@/routes/router';
import {Debounce }from './index'
import { debounce } from '@antv/util';
  export default{
    components: { AntV, D3Chart, EChart, D3Test, pieChart, router },
    data() {
        return {
          timer: null
        }
    },
    methods:{
      handle(type) {
        switch (type) {
          case 'demo1':
          console.log('展示d3表单')
            break;
          case 'demo2':
            break;
          case 'demo3':
            break;
          default:
            break;
        }
        
      },
      debounce(fn, delay) {
        let timer 
        return function() {
          clearTimeout(timer)
          timer = setTimeout(() => {
            fn()
          }, delay)
        }
      },
      handleClick: debounce(function() {
        console.log('sf')
      }, 2000)
      ,   
    }
  }
</script>
<style>
.menu {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  background-color: aliceblue;
  padding: 200px;
}
</style>