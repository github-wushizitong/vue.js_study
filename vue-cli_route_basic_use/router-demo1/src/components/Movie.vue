<template>
  <div class="movie-container">
    <!-- 当路由连接和路由模块指定了动态路由连接,可以从 组件的实例对象中 $route.params.id 拿到当前是哪个动态路由路径,根据动态路由连接指定的id来渲染对应的数据 -->
    <h3>Movie 组件{{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  name: "Movie"
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
