// 导入 vue 和 VueRouter 的包
import Vue from "vue"
import VueRouter from "vue-router"

// 导入 需要路由的组件
import About from "@/components/About.vue"
import Home from "@/components/Home.vue"
import Movie from "@/components/Movie.vue"

// 调用 Vue.ues() 方法,把VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  // routes 节点 是一个数组,作用: 定义 "hash"地址与"组件"之间的对应关系
  routes: [
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/movie", component: Movie }
  ]
})

// 向外共享路由的实例对象
export default router
