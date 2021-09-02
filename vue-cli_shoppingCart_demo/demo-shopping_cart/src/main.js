// 导入 vue 模块框架
import Vue from 'vue'
// 导入 App.vue 组件
import App from './App.vue'

// 引入 jquery bootstrap的依赖
import 'jquery'
// 引入 bootstrap 响应式网站组件库
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

// 创建实例对象并且渲染到 html页面的 #app 属性的元素
new Vue({
  render: h => h(App),
}).$mount('#app')
