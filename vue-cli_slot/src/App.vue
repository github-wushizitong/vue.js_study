<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 
          1, 如果把内容填充到指定名称的插槽中,需要使用 v-slot: 指令
          2, v-slot: 后面要跟上组件中对应的插槽 name属性的值
          3, v-slot: 指令不能直接用在元素身上,必须用着 template 包裹标签上
          4,template 这个标签,是一个虚拟的标签,只起到包裹性质的作用,但是不会被渲染为任何实质性的 html 元素

         -->
        <template v-slot:default>
          <p>这是往Left.vue组件中插入的p标签</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
// 导入子组件
import Left from '@/components/Left.vue'
export default {
  components:{
    'Left':Left
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
