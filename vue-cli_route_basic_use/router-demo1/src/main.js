import Vue from "vue"
import App from "./App.vue"

// 导入 bootstrap 样式
import "bootstrap/dist/css/bootstrap.min.css"
// 全局样式
import "@/assets/global.css"

// 导入 router 实例对象
import router from "@/routet/index.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载路由的实例对象
  router: router
}).$mount("#app")
