// 导入 vue 第三方包 得到 vue 构造函数
import Vue from 'vue'
// 导入 App.vue 跟组件, 将来要把 APP.vue 中的模板结构,渲染到 HTML页面中 
import App from './App.vue'

Vue.config.productionTip = false

// 创建 Vue 实例
new Vue({
  // 把 render 函数指定的组件,渲染到 HTML 页面中,并且把 HTML页面中 #app 的容器替换掉
  render: h => h(App),
}).$mount('#app')
