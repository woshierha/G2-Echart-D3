<template>
    <div>
      <svg></svg>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </template>
  <script>
  import * as d3 from "d3";
  export default {
    data() {
      return {};
    },
    mounted() {
      this.initlinechart()
      this.apitest()
    },
    methods:{
     initlinechart() {
        const width = 300;
      const height = 300;
      const data = [
      { date: "2022-07-01", amount: 29 },
      { date: "2022-07-02", amount: 56 },
      { date: "2022-07-03", amount: 43 },
      { date: "2022-07-04", amount: 32 },
      { date: "2022-07-05", amount: 66 },
      { date: "2022-07-06", amount: 61 },
      { date: "2022-07-07", amount: 55 },
      { date: "2022-07-08", amount: 31 },
      { date: "2022-07-09", amount: 22 },
      { date: "2022-07-10", amount: 26 },
      { date: "2022-07-11", amount: 21 },
      { date: "2022-07-12", amount: 12 },
      { date: "2022-07-13", amount: 10 },
    ];
  
      const svg = d3.select("svg").attr("width", width).attr("height", height);
      const g = svg.append("g");
    //   var circle = svg.append("circle")
    //   circle.attr("cx", 50)
    //   circle.attr("cy", 50)
    //   circle.attr("r", 50)
    //   circle.attr("fill", 'skyblue')
    //   circle.on("click", function() {
    //     console.log('点击了一个圆圈');
    //   })
     //动态属性
      svg.style('color', () => {
        return 'hsl('+ Math.random() * 360 + ', 100%, 50%)'
      })
      // 解析日期
    //   const parseTime = d3.timeParse("%d-%b-%y");
  
      // 创建图表轴
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return  new Date(d.date);
          })
        )
        .rangeRound([0, width]);
      const y = d3
        .scaleLinear()
        .domain(
          d3.extent(data, function (d) {
            return d.amount;
          })
        )
        .rangeRound([height, 0]);
  
      // 创建折线
      const line = d3
        .line()
        .x(function (d) {
          return x( new Date(d.date));
        })
        .y(function (d) {
          return y(d.amount);
        });
  
      // 将轴附加到图表上
      g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
  
      g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "1.5em")
        .attr("text-anchor", "end")
        .text("病例数");
   
      // 将路径附加到图表上
      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .attr("d", line);
     },
     apitest() {
      let dataset = [1]
      var test = d3.selectAll("p")
      var update = test.data(dataset)
      //元素超过时需要删除
      update.text((d) => d)
      var exit = update.exit()
      exit.text(() => `exit`)
      // 元素不足时需要增加
    //   var enter = update.enter()
    //   update.text((d) => `update${d}`)
    //   enter.append('p')
    //        .text((d) => `enter ${d}`)
     }     
    }
  };
  </script>