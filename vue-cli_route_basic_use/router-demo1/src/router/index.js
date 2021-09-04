// 导入 vue 和 VueRouter 的包
import Vue from "vue"
import VueRouter from "vue-router"

// 导入 需要路由的组件
import About from "@/components/About.vue"
import Home from "@/components/Home.vue"
import Movie from "@/components/Movie.vue"
import Tab1 from "@/components/tabs/Tab1.vue"
import Tab2 from "@/components/tabs/Tab2.vue"
import Login from "@/components/Login.vue"
import Main from "@/components/Main.vue"

// 调用 Vue.ues() 方法,把VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  // routes 节点 是一个数组,作用: 定义 "hash"地址与"组件"之间的对应关系
  routes: [
    // 路由规则
    // 路由重定向
    { path: "/", redirect: "/home" },
    {
      // 访问的路径
      path: "/home",
      // 路由渲染的页面
      component: Home
    },
    {
      path: "/about",
      component: About,
      // 子级路由重定向
      redirect: "/about/tab1",
      // 子路由
      // 注意:子路由不需要加 / 符号
      children: [
        // 默认子路由: 如果children 数组中,某个路由规则的 path 的值为空字符串,则默认渲染该组件,也就不需要重定向了,不过子路由连接的to里面直接写父级路由路径就可以了
        // 默认子路由有个bug,如果在地址栏中输入对应的自己路由路径,不会渲染该组件
        { path: "tab1", component: Tab1 },
        // { path: "", component: Tab1 },
        { path: "tab2", component: Tab2 }
      ]
    },
    // :id 为动态路由连接路径,接收 router-link 路径后面的动态路径
    // 路由规则传参, 加上 props:true 可以把 :id 接收router-link 的动态路由参数,传递给该组件的 props节点
    { path: "/movie/:id", component: Movie, props: true },
    { path: "/login", component: Login },
    { path: "/main", component: Main }
  ]
})
// 为 router 实例对象,声明  全局前置导航守卫
// 只要发生了路由的跳转,必然会触发 beforeEach 指定的 回调函数
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
// next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。

// next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

// next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。

// next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  next()
})

// 向外共享路由的实例对象
export default router
