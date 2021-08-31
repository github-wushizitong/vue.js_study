<template>
  <div>
    <div class="appRoot">
      <h1>这事app父组件</h1>
    <!-- 使用子组件 -->
    <Left></Left>
    <Right></Right>
    <Quanju></Quanju>
    </div>
  </div>
</template>
<script>
  // 导入需要使用的 子组件
  import Left from '@/components/Left.vue'
  import Right from '@/components/Right.vue'

  export default {
    name:'App',
    // 导入子组件
    components:{
      // 键和值一样的话也可以简写
      'Left':Left,
      Right
    }
  }
</script>
<style lang="less" scoped>
  // 加了 scoped 属性,会防止组件之间的样式冲突,vue.js 底层 对每个组件都都使用了属性选择器 
  .appRoot{
    background-color: green;
    width: 1000px;
    height: 1000px;
    h1{
      color:yellow;
    }
  }
</style>
style