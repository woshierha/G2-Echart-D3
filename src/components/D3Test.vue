<template>
    <div>
        <span></span>
        <span></span>
        <span></span>
        <h4>对一组数据通过柱状图实现可视化</h4>
        <div id="container">
          <svg id="svg"></svg>
        </div>
    </div>
</template>
<script>
import * as d3 from "d3";
 export default{
    name: 'D3Test',
    data() {
        return {
        //  data: [ 250 , 210 , 170 , 10 , 90 ]
        data: [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ]
        }
    },
    mounted() {
    //   this.init()
    //   this.initSvg()
    this.initChart()
    },
    methods:{
      init() {
        //字符串分别与三个段落绑定
        var str = 'china'
        // var body = d3.select("body")
        // var p = body.selectAll("p")
        var p = d3.selectAll("p")
        p.datum(str)
        p.text(function(d, i) {
            return `第${i}个元素绑定的数据时${d}`
        })
        //将数组各元素分别绑定到三个段落元素上
        var arr = ['dog', 'cat', 'snake']
        var span = d3.selectAll("span")
        span.data(arr)
          .text(function(d, i) {
            return `绑定到${i} + ${d}`
          })
      },
      initSvg(){
        //配置线性比例尺
        var min = d3.min(this.data)
        var max = d3.max(this.data)
        var linear = d3.scaleLinear()
                       .domain([min, max])
                       .range([0, 500])
        //配置序数比例尺
        var index = [0, 1, 2, 3, 4]
        var color = ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad"]
        var odrinal = d3.scaleOrdinal()
                        .domain(index)
                        .range(color)
        //配置坐标轴
        var axis = d3.axisBottom()
                   .scale(linear) //指定比例尺
                   .ticks(7) //指定刻度的数量
        // var xAxis = d3.axisBottom(xRange).tickFormat(function(d){ return d.x;});

        // var height = 500;
        // var width = 500;
        // var svg = d3.select('#container')
        // svg.append("svg")
        //     .attr("width", width)
        //     .attr("height", height)
        var recHeight = 25;
        var svg = d3.select('#svg')
        svg.selectAll("rect")
           .data(this.data)
           .enter()
           .append("rect")
           .attr("x", 20)
           .attr("y", function(d, i) {
            return i * recHeight
           })
           .attr("width", function(d) {
            return linear(d)
           })
           .attr("height", recHeight - 2)
           .attr("fill", function(d, i) {
            return odrinal(i)
           })
        svg.append('g')
        //移动下位置
           .attr("transform","translate(20,130)")
        //给坐标轴添加样式
           .call(axis)
           .attr("class", "axis")
        svg.append('rect')
           .attr("x", 20)
           .attr("y", 0)
           .attr('width', 300)
           .attr("height", 2)
           .attr("fill",'green')
      },
      initChart() {
        var height = 500;
        var width = 500;
        //配置画布周围的空白
        var svg = d3.select('#svg')
        //定义浮窗
        let tooltip = d3.select('body')
                .append('div')
                .attr('class', 'tooltip')
                .text(' ')
        svg.attr("width", width)
           .attr("height", height)
        var padding = {left:30, right: 40, top:20, bottom: 20}
        //配置比例尺                
        var xScale =  d3.scaleBand()
                        .domain(d3.range(this.data.length))
                        .range([0, width - padding.left-padding.right])
        var yScale = d3.scaleLinear()
                       .domain([0, d3.max(this.data)])
                       .range([height - padding.top - padding.bottom, 0])
        //颜色比例尺
        var index = [0, 1, 2, 3, 4]
        var color = ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad"]
        var cScale = d3.scaleOrdinal()
                       .domain(index)
                       .range(color)
        //配置坐标轴
        var xAxis = d3.axisBottom()
                   .scale(xScale) //指定比例尺
                   
        var yAxis = d3.axisLeft()
                    .scale(yScale)
        //添加矩形之间的空白
        var rectPadding = 4;
        //添加矩形元素
        svg.selectAll('rect')
                       .data(this.data)
                       .enter()
                       .append('rect')
                       .attr('transform', "translate(" + padding.left + "," + padding.top + ")")
                       .attr("x", (d, i) => xScale(i) + rectPadding/2)
                       .attr('width', xScale.bandwidth() - rectPadding)
                       //如果用箭头函数会有问题 不能切换颜色 或者通过添加class 改变悬停颜色
                       .attr('fill', function(i) {
                        return cScale(i)
                       })
                        //悬浮窗
                       .on('mouseover', function(d, i){
                          d3.select(this).attr('fill', '#f7f494')
                          let p1 = d.pageX
                          let p2 = d.pageY
                          tooltip
                          .style('left', p1 + 'px')
                          .style('font-size', 15+'px')
                          .style('border-radius', 10+'px')
                          .style("padding", '10px')
                          .style('top', p2 + "px")
                          .style('width', 60+'px')
                          .style('height', 60 + 'px')
                          .attr('text-anchor', 'middle')
                          .style('fill', 'pink')
                          .style('visibility', 'visible').text(`总量${i}`)
                       })
                       .on('mouseout', function() {
                         d3.select(this).attr('fill', (i) => cScale(i))
                         tooltip.style('visibility', 'hidden')
                       })                      
                       .attr("y",function(){
                            var min = yScale.domain()[0];
                            return yScale(min);
                        })
                       .transition()
                       .duration(1000)
                       .attr("y", (d) => yScale(d))
                       .attr('height', (d) => height - padding.top - padding.bottom - yScale(d))
                       //添加动效 箭头函数会报错
                       //柱形标签 如果再坐标轴之后会被遮住 设置z-index也看不到
                    svg.selectAll('.label')
                       .data(this.data)
                       .enter()
                       .append('text')
                       .attr('class', 'label')
                       .attr('x', function(d, i) {
                        return xScale(i) + 60
                       })
                       .attr('y', function(d){
                        return yScale(d) + 60
                       })
                       .text(function(d) {
                        return d
                       })
                        //添加x轴
                    svg.append("g")
                       .attr("class","axis")
                       .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
                       .call(xAxis); 

                        //添加y轴
                    svg.append("g")
                       .attr("class","axis")
                       .attr("transform","translate(" + padding.left + "," + padding.top + ")")
                       .call(yAxis); 

                //    svg.selectAll("div")
                //        .data(this.data)
                //        .enter()
                //        .append("div")
                //        .attr("class", "value")
                //        .attr("x", function(d, i){
                //          console.log(i)
                //            return  xScale(i) + 2
                //         })
                //         .attr("y", function(d) {
                //           return  yScale(d) + 2
                //         })
                //         .attr('text-anchor', 'middle')
                //         .text(function(d) {
                //             return d
                //         })
                // svg.selectAll("g")
                //    .data(this.data)
                //    .append("text")
                //    .attr('class', 'value')

                //    .attr("x", function(d, i) {
                //     console.log('x', d, i)
                //     return xScale(i) + 2
                //    })
                //    .attr("y", function(d) {
                //     return yScale(d) + 2
                //    })
                //    .text(function(d) {
                //     return d
                //    })
          
    }
  }
 }
</script>
<style>
.axis path,
.axis line {
      fill: none;
      stroke:#999999;
      shape-rendering:crispEdges;
}
.axis text {
     font-size:15px;
}
.tooltip {
    position: absolute;
    z-index: 10;
    color: #999999;
    visibility: hidden;
    font-size: 20px;
}
.label {
    font-size: 15px;
    fill: rgb(255, 255, 255);
    width: 20px;
    height: 20px;
}
</style>