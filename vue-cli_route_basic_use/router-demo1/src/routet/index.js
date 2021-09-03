// 导入 vue 和 VueRouter 的包
import Vue from "vue"
import VueRouter from "vue-router"

// 调用 Vue.ues() 方法,把VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter()

// 向外共享路由的实例对象
export default router
