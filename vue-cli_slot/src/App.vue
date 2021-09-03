<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <div class="article-box">
      <Article>
        <!-- 向 子组件 Article.vue中指定的具名插槽中插入内容 -->
        <template #title>
          <h1>登高</h1>
        </template>
        <template #content>
          <div>
            <p>风急天高猿啸哀，渚清沙白鸟飞回.</p>
            <p>无边落木萧萧下，不尽长江滚滚来。</p>
            <p>万里悲秋常作客，百年多病独登台。</p>
            <p>艰难苦恨繁霜鬓，潦倒新停浊酒杯。</p>
          </div>
        </template>
        <!-- 通过 v-slot: 指令绑定属性来接收 子组件Article.vue 中作用域插槽传递过来的值 -->
        <!-- 也可以通过 对象解构的方式 来接收 子组件Article.vue 中的作用域插槽传递过来的值 -->
        <!-- <template #author="scope"> -->
        <template #author="{msg}">
          <div>
            杜甫(唐代)
          </div>
          <p>{{msg}}</p>
        </template>
      </Article>
    </div>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 
          1, 如果把内容填充到指定名称的插槽中,需要使用 v-slot: 指令
          2, v-slot: 后面要跟上组件中对应的插槽 name属性的值
          3, v-slot: 指令不能直接用在元素身上,必须用着 template 包裹标签上
          4,template 这个标签,是一个虚拟的标签,只起到包裹性质的作用,但是不会被渲染为任何实质性的 html 元素
          5, v-slot: 指令的简写是  # 符号
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
import Article from '@/components/Article.vue'
export default {
  components:{
    'Left':Left,
    Article
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
