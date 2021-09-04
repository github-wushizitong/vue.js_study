// 创建的路由模块

// 导入Vue构造函数
import Vue from "vue"
// 导入 vue-router 构造函数
import VueRouter from "vue-router"

// 导入组件,用来路由渲染
import MyLogin from "@/components/MyLogin.vue"
import MyHome from "@/components/MyHome.vue"

// 把vueRouter 配置为 Vue 的插件
Vue.use(VueRouter)

// 创建 router 实例对象
const router = new VueRouter({
  // 路由规则
  routes: [
    { path: "/", redirect: "/login" },
    // path : 访问的路径,
    // component : 访问路径对应要渲染的组件
    { path: "/login", component: MyLogin },
    { path: "/home", component: MyHome }
  ]
})

// 暴露 router 实例对象
export default router
