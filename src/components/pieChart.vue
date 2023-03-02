<template>
    <div class="container">
        <h3>扇形图</h3>
        <div id="pie-chart"></div>
    </div>
</template>
<script>
import * as d3 from "d3";
export default{
    name: 'pieChart',
    data() {
        return {
          dataset: [30, 10, 43, 55, 13]
        }
    },
    mounted() {
      this.init()
    },
    methods:{
      init() {
         var svg = d3.select("#pie-chart") 
                     .append("svg")
         var piedata = d3.pie()(this.dataset)
         var outter= 150
         var inner = 0
         //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
         var colorScale = d3.scaleOrdinal()
                .domain(d3.range(this.dataset.length))
                .range(d3.schemeCategory10);

         var arc = d3.arc()
                     .outerRadius(inner)
                     .innerRadius(outter)
         svg.selectAll('path')
            .data(piedata)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return colorScale(i)
            })
        //  var arcs = svg.selectAll("g")
        //                .data(piedata)
        //                .enter()
        //                .append("g")
        // arcs.append("path")
        //     .attr("fill", function(d, i) {
        //         return colorScale(i)
        //     })
        //     .attr("d", function(d) {
        //         return arc(d)
        //     })
        //颜色比例尺
        
      }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
</style>