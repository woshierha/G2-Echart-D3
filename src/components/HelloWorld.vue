<template>
  <div :class="className" style="height: 700px;">
  </div>
</template>

<script>
import * as zrender from 'zrender';
export default {
  name: 'HelloWorld',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    chartData: {
      type: Object,

    }
  },
  data() {
    return{
      group: null,
      render: null
    }
  },
  mounted() {
    //this.$el指向当前组件的DOM元素 this指向当前组件实例
    // console.log('this.$el', this.$el, 'this', this)
    this.$nextTick(() => {
      console.log('nexttick之后', this.$el)
      this.initData()
    })
    //Q:为什么这里要用nexttick?
    //A: 为了避免在代码中直接操作DOM  
    //即使在 mounted() 中，
    //也不能保证在 DOM 更新完成后立即就可以安全地进行操作。
    //这是因为 Vue 会将所有的 DOM 更新任务放到一个队列中，然后异步执行队列中的所有任务
    //所以，当我们想要在 mounted() 中操作 DOM 元素时，不能确保这些元素已经被完全渲染出来。
    //nexttick是在 DOM更新完成之后执行回调函数 保证执行后面方法时 DOM已经更新完毕 从而可以安全的操作DOM元素‘
    //由于加载图形需要获取DOM元素 所以使用nextick更安全
    // 操作的 DOM 元素尚未被完全渲染出来，导致无法获取到该元素，从而引发错误。
    // 操作的 DOM 元素尚未被完全渲染出来，导致无法正确计算元素的尺寸和位置，从而影响组件的显示效果。
  },
  methods:{
    initData() {
     //初始化一个Zrender容器
    //  this.render = zrender.init(document.getElementById('main'))
    this.render = zrender.init(this.$el)
    this.group = new zrender.Group()
    this.drawCircle()
    this.render.add(this.group)
    },
    //画图的函数 相当于配置图表的options
    drawCircle() {
      //圆形
    let circle = new zrender.Circle({
        shape: {
          cx: 300,
          cy: 300,
          r: 50
        },
        style: {
          fill: 'transparent',
          stroke: '#000',
          lineWidth: 2
        }
    })
    //心电图 图形的相关配置可以从其他页面传过来 也就是画图的
      const polygonEx1 = new zrender.Polygon(this.chartData)
      this.group.add(circle)
      this.group.add(polygonEx1)
    },
    
  }
}
</script>
<style scoped>
#main {
  height: 700px;
}
</style>
