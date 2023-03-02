<template>
    <div class="chart">
        
    </div>
</template>
<script>
import * as echarts from 'echarts';//引入echarts
export default{
    name: 'eChart',
    props:{
        chartData:{
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    mounted(){
     this.$nextTick(() => {
        console.log('显示内容')
        this.inintData()
     })
    },
    methods: {
      inintData() {
        console.log(this.$el)
        //定义当前dom容器 
        var mychart = echarts.init(this.$el, null, {width: 300, height: 300})
        mychart.setOption(this.chartData);
    }
    }
}
</script>
<style scoped>
.chart {
    width: 300px;
    height: 300px;
}
</style>