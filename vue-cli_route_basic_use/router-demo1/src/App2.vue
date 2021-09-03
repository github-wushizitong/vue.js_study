<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电源</a>
    <a href="#/about">关于</a> -->
    <!-- 当安装了 vue-router 后,就可以使用 router-link 来替代 普通的 a 标签了 -->
    <!-- to属性代替了 href属性,并且不用加 # 符号 -->
    <router-link to="/home">首页</router-link>
    <!-- 动态路由连接 -->
    <router-link to="/movie/1">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <router-link to="/about">关于</router-link>
    <hr />
    <!-- 只要在项目中安装和配置了 vue-router,就可以使用 router-view标签这个组件了 -->
    <!-- 它的作用很单纯:路由组件的占位符 -->
    <!-- 通过路由模块 router/index.js 文件中的 路由规则渲染该路由组件的占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
