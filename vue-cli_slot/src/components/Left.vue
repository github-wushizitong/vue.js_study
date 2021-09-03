<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <!-- 插槽占位,用来填充App.vue 被组件包裹的p标签 -->
    <!-- 
      vue官方规定:每一个solt插槽,必须有一个 name 属性
      如果省略了 solt 的 name 属性,则有一个默认叫做 default 的name属性值

     -->
    <slot name="default"><h1>这是 Left.vue组件,的name属性为default的   默认内容</h1></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
