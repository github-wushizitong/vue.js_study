import Vue from "vue"
import App from "./App.vue"
// 导入样式
import "./assets/css/bootstrap.css"
import "./index.css"

// 导入 router 实例对象
import router from "@/router/index.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载 router 实例对象
  router: router
}).$mount("#app")
