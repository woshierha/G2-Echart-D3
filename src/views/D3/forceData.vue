<template>
    <div id="svg" class="container">
        
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
    name: 'ForceData',

    data() {
        return {
            isShowTip: false,
            width: 500,
            height: 500,
            nodes: [ { name: "桂林" }, { name: "广州" },
              { name: "厦门" }, { name: "杭州" },
              { name: "上海" }, { name: "青岛" },
              { name: "天津" } ],
            links: [ { source : 0 , target: 1 } , { source : 0 , target: 2 } ,
               { source : 0 , target: 3 } , { source : 1 , target: 4 } ,
               { source : 1 , target: 5 } , { source : 1 , target: 6 } ]
            
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.drawRelation()
        })
    },
    methods: {
        drawRelation() {
           // 定义画布大小
        const width = 600;
        const height = 600;

        this. svg = d3
        .select("body")
        .append("svg")
        .attr("id", "svg")
        .attr("width", width)
        .attr("height", height);
        var tool = this.svg.selectAll('g')
                             .data(this.nodes)
                             .enter()
                             .append("div")
                             .attr("class", 'toolinfo')
        // 创建画布
        this.lines = this.drawLine();
        // 画节点节点盒子
        this.nodesCircle = this.drawCircle();
        console.log('ada',this.lines, this.nodesCircle)
        //画浮动提示
        // 新建一个力导向图
        this.nodesCircle.on("mouseover", function(d, i){
          let p1 = d.pageX
          let p2 = d.pageY
          tool.style("visibility", 'visible').text(`地点：${i.name}`)
              .style('left', 200 + 'px')
              .style('bottom', 0 + 'px')
                   
        })
         this.simulation = d3
        .forceSimulation(this.nodes)
        .force("charge", d3.forceManyBody().strength(-200)) // 电荷力 相互之间的作用力
        .force("center", d3.forceCenter(width / 2, height / 2)) // 用指定的x坐标和y坐标创建一个居中力
        .force("link", d3.forceLink(this.links).distance(100)) 
        //每次触发都会调用这个函数 不停的更新布局
        this.simulation.on("tick", this.ticked);

        },
        ticked() {
            //更新连线
            this.lines
                .attr("x1", (d) => {
                return d.source.x;
                })
                .attr("y1", (d) => {
                return d.source.y;
                })
                .attr("x2", (d) => {
                return d.target.x;
                })
                .attr("y2", (d) => {
                return d.target.y;
                });
           //更新节点坐标
            this.nodesCircle.attr("transform", function (d) {
                    // d.fx=d.x;d.fy=d.y; 固定位置
                    return "translate(" + d.x + ", " + d.y + ")";
                });
        },
        started(event) {
        if (!event.active) this.simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
        },

        dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
        },
        ended(event) {
        if (!event.active) this.simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
        },
        getChartdata() {
         this.svg = d3.select(this.$el)
                        .append("svg")
                        .attr("width", this.width)
                        .attr("height", this.height)
          let lines = this.drawLine()
          let nodes = this.drawCricle()
          console.log('rrr', lines, nodes)
          var simulation = d3.forceSimulation(this.nodes)
          //添加向心力让他出现在画布中间
                              .force("center", d3.forceCenter(this.width/2, this.height/2))
                              .force('link', d3.forceLink(this.links).distance(200))
                              .on('tick', ticked) 
          //到这一步只能看到左上角的 因为力学模型需要动态计算连线和点的位置 所以需要动态的更新 ，就要监听tick
        },
        //绘制连线
        drawLine() {
          let lines = this.svg.append("g")
                         .selectAll(".force-line")
                         .data(this.links)
                         .enter()
                         .append("line")
                         .attr("stroke", "#999")
          return lines
        },
        drawCircle() {
        let nodeGroups = this.svg
            .append("g")
            .attr("class", "nodes-box")
            .selectAll(".force-node")
            .data(this.nodes)
            .enter()
            .append("g")
            .attr("class", "force-circle")
            .call(
            d3.drag().on("start", this.started).on("drag", this.dragged).on("end", this.ended)
            )
            .on('contextmenu ', (event, d) => {
                        event.preventDefault()
                        this.isShowTip = true;
                        this.point = {
                            left: event.offsetX,
                            top: event.offsetY,
                            data: d
                        }
           })
        var color = d3.scaleOrdinal(d3.schemeCategory10);
        nodeGroups
            .append("circle")
            .attr("class", "force-circle")
            .attr("r", 20)
            .style("fill", function (d, i) {
            return color(i);
            });

        nodeGroups
            .append("text")
            .attr("class", "force-text")
            .attr("dy", ".33em")
            .attr("font-size", "12px")
            .attr("text-anchor", "middle")
            .style("fill", "#eee")
            .text(function (d) {
            return d.name;
            });

        return nodeGroups;
        },
    },
};
</script>

<style scoped>
.toolinfo {
  width: 30px;
  height: 30px;
  fill: skyblue;
  visibility: hidden;
  font-size: 15px;
  position: absolute;
  z-index: 20;
  text-anchor: middle;
}
</style>
