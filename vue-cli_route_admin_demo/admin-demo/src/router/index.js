// 创建的路由模块

// 导入Vue构造函数
import Vue from "vue"
// 导入 vue-router 构造函数
import VueRouter from "vue-router"

// 把vueRouter 配置为 Vue 的插件
Vue.use(VueRouter)

// 创建 router 实例对象
const router = new VueRouter()

// 暴露 router 实例对象
export default router
