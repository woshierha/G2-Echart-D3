<template>
    <div>
        
    </div>
</template>
 <script>
export default{
    name: 'wordCloud',
    props:{
      chartData:{
        type: Array,
        required: true
      }
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
     initChart() {
      this.chart = echarts.init(this.$el)
      this.setOptions(this.chartData,true )
     // 防止重复触发点击事件
      if (this.chart._$handlers.click) {
        this.chart._$handlers.click.length = 0
      }
      // 对于无法绑定数据，使用箭头写法即可
      this.chart.on('click', (params) => {
        this.$emit('returnValue', params)
        // console.log(this.chartData);
        // console.log(params.dataIndex);
        //  this.chartData[params.dataIndex].name='';
        // this.setOptions(this.chartData,true )
      })
    },
    setOptions(Data) {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}:{c}'
        },
        animation: false,
        series: [
          {
            name: '热度值',
            type: 'wordCloud',
            gridSize: 12,
            sizeRange: [12, 65],
            rotationRange: [0, 0],
            shape:'smooth',
            shape: 'circle',
            data: Data,
            height: '100%',
            width: '80%',
            textStyle: {
              normal: {
                color: function() {
                  return (
                    'rgb(' +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') +
                    ')'
                  )
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#bfa'
              }
            }
          }
        ]
      })
    },
    }
}
 </script>
<style>
</style>