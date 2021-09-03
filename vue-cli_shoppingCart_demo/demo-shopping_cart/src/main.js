import Vue from 'vue'
import App from './App.vue'
// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css'

// vue.js 运行项目时候 浏览器调试工具 Cconsole 的提示文本是否显示
Vue.config.productionTip = true
// 全局自定义指令
Vue.directive('color',{
      // bind 生命周期函数钩子：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      // 当指令第一次被绑定到元素上的时候,会立即触发 下面的 自定义指令生命周期 bind 函数
      // 形参中的el表示当前指令所绑定到的 DMO 对象
      bind(el,binding){
        console.log(el,binding);
        // 默认颜色
        el.style.color = 'blue';
        // 当元素使用 自定义指令时,传入参数,参数就是 自定义指令渲染的颜色
        el.style.color = binding.value;
      },
      update(el,binding){
        // 默认颜色
        el.style.color = 'blue';
        // 当元素使用 自定义指令时,传入参数,参数就是 自定义指令渲染的颜色
        el.style.color = binding.value;
      }
})
// 全局自定义指令和私有自定义指令的 生命周期函数 bind 和 update的逻辑一模一样的话,可以简写为:
// Vue.directive('color',function(el,binding){
//   console.log(el,binding);
//   // 默认颜色
//   el.style.color = 'blue';
//   // 当元素使用 自定义指令时,传入参数,参数就是 自定义指令渲染的颜色
//   el.style.color = binding.value;

// })


new Vue({
  render: h => h(App)
}).$mount('#app')
