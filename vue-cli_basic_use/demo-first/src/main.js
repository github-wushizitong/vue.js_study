// 导入 vue 第三方包 得到 vue 构造函数
import Vue from 'vue'
// 导入 App.vue 跟组件, 将来要把 APP.vue 中的模板结构,渲染到 HTML页面中 
// import App from './App.vue'
import App from '@/App.vue'
//  导入axios 第三方模块 ,用来发http请求
import axios from 'axios'

// 配置 请求地址 的根路径
axios.defaults.baseURL='http://www.liulongbin.top:3006'
// 把axios 挂载到 Vue 原型对象上,缺点:不利于 API 接口的复用
// 把axios 挂载到 Vue.prototype 上,供每个 .vue 组件实例可以直接使用
Vue.prototype.$http = axios;


/**
 *  配置 @ 路径提示 
 *    1,在vacode中 安装 Path Autocomplete 插件
 *    2,在 VScode的配置文件 setting.json 文件中 加入以下配置:
 *      //  导入文件时是否携带文件的扩展名
 *      "path-autocomplete.extensionOnlmport":true
 *      // 配置 @ 的路径提示
 *      "path-autocomplete.pathMappings":{"@":"${folder}/src"}
 */

Vue.config.productionTip = false

// 创建 Vue 实例
new Vue({
  // 把 render 函数指定的组件,渲染到 HTML 页面中,并且把 HTML页面中 #app 的容器替换掉
  render: h => h(App),
  // 如果没有提供 el 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
  // 作用和 el 属性完全一样
}).$mount('#app')
