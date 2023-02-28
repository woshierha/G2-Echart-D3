import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import  CanvasPainter  from "zrender/lib/canvas/Painter"; // 引入 Canvas 绘制器
import * as zrender from "zrender"; // 引入 zrender 绘制器

zrender.registerPainter('canvas', CanvasPainter);
new Vue({
  render: h => h(App),
}).$mount('#app')
