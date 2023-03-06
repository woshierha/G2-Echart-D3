<template>
  <div id="antV" style="height: 300px; width: 300px">
  </div>
</template>
<script>
import { Line } from '@antv/g2plot';
export default{
name: 'antV',
data(){
  return {
   data: [        
              { year: '1991', value: 3 },
              { year: '1992', value: 4 },
              { year: '1993', value: 3.5 },
              { year: '1994', value: 5 },
              { year: '1995', value: 4.9 },
              { year: '1996', value: 6 },
              { year: '1997', value: 7 },
              { year: '1998', value: 9 },
              { year: '1999', value: 13 },]
  }
},
mounted(){
 this.$nextTick(() => {
   this.initData()
 })
},
methods:{
 initData() {
          fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
          .then((res) => res.json())
          .then((data) => {
              const line = new Line('antV', {
              data,
              padding: 'auto',
              xField: 'Date',
              yField: 'scales',
              xAxis: {
                  // type: 'timeCat',
                  tickCount: 5,
              },
              smooth: true,
              });

              line.render();
          })
 }
}
}
</script>
<style scoped>
</style>