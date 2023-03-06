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
        options :{
            //画布信息: 画布大小 距离 矩形之间的距离
            height: 500,
            width: 500,
            padding: {
                left: 40,
                right: 40,
                top: 20,
                bottom: 20
            },
            rectPadding: 3,
            //颜色比例尺
            index: [0, 1, 2, 3, 4],
            color: ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad"],
           //图表来源数据
           data: [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ]
        }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initOptions(this.options)
        })
    },
    methods:{
      initOptions(options) {
         var svg = d3.select("#svg")
         let tooltip = d3.select("body")
                         .append("div")
                         .attr("class", "tooltip")                      
        svg.attr("width", options.width)
           .attr("height", options.height)
        //定义坐标轴和颜色
        var xScale = d3.scaleBand()
                       .domain(d3.range(options.data.length))
                       .range([0, options.width - options.padding.left - options.padding.right])
        var yScale = d3.scaleLinear()
                       .domain([0, d3.max(options.data)])
                       .range([options.height - options.padding.top - options.padding.bottom, 0])
        var cScale = d3.scaleOrdinal()
                       .domain(options.index)
                       .range(options.color)
        var xAxis = d3.axisBottom()
                      .scale(xScale)
        var yAxis = d3.axisLeft()
                      .scale(yScale)
        svg.selectAll('rect')
           .data(this.options.data)
           .enter()
           .append('rect')
           .attr("transform", "translate(" + options.padding.left + "," + options.padding.top + ")")
           .attr("x", (d, i) => xScale(i) + options.rectPadding / 2)
           .attr("width", xScale.bandwidth() - options.rectPadding)
           .attr('fill', function(i) {
             return cScale(i)
           })
           .on('mouseover', function(d, i){
                d3.select(this).attr('fill', '#f7f494')
                let p1 = d.pageX
                let p2 = d.pageY
                tooltip
                .style('left', p1 + 'px')
                .style('top', p2 + "px")
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
            .attr('height', (d) => options.height - options.padding.top - options.padding.bottom - yScale(d))
            //添加坐标轴和坐标轴文字
            svg.selectAll('.label')
                .data(options.data)
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
                .attr("transform","translate(" + options.padding.left + "," + (options.height - options.padding.bottom) + ")")
                .call(xAxis); 

                //添加y轴
            svg.append("g")
                .attr("class","axis")
                .attr("transform","translate(" + options.padding.left + "," + options.padding.top + ")")
                .call(yAxis);           
      },
  }
 }
</script>
<style scoped>
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
    font-size: 15px;
    border-radius: 10px;
    padding:  10px;
    width: 60px;
    height: 60px;
    text-anchor: middle;
}
.label {
    font-size: 15px;
    fill: rgb(255, 255, 255);
    width: 20px;
    height: 20px;
}
</style>