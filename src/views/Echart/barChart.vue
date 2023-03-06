<template>
    <div v-show="graphShow" :class="className" :style="{height:height,width:width}" />
  </template>
  <script>
  import * as echarts from 'echarts';//引入echarts
  export default {
    props: {
      graphShow: {
        type: Boolean,
        default: true
      },
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '426px'
      },
      chartData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        chart: null,
        imageURL: null
      }
    },
    watch: {
      chartData: {
        // deep: true,
  
        handler(val) {
          console.log(val)
          this.setOptions(val)
          // this.exportPicUrl()
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el)
        this.setOptions(this.chartData)
        // this.exportPicUrl()
        // console.log(this.imageURL)
        // 防止重复触发点击事件
        if (this.chart._$handlers.click) {
          this.chart._$handlers.click.length = 0
        }
        // 对于无法绑定数据，使用箭头写法即可
        this.chart.on('click', (params) => {
          this.$emit('returnValue', params)
        })
      },
  
      setOptions(Data) {
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            show: true
          },
          animation: false,
          series: [
            {
              name: '',
              type: 'pie',
              radius: '70%',
              center: ['50%', '50%'],
              data: Data,
              animationEasing: 'cubicInOut',
              animationDuration: 1000,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: '{b}({d}%)',
                    position: 'inner'
                  }
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
        this.exportPicUrl()
      },
      exportPicUrl() {
        let opts = {
          type: 'png', // 导出的格式，可选 png, jpeg
          pixelRatio: 1// 导出的图片分辨率比例，默认为 1。
          // backgroundColor: string,// 导出的图片背景色，默认使用 option 里的 backgroundColor
          // excludeComponents:
        }
        this.imageURL = this.chart.getDataURL(opts)
      }
    }
  }
  </script>
  
  