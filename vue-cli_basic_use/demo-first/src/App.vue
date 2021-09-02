<template>
  <div class="app-components">
    <h1>App 跟组件</h1>
    <hr>
    <!-- 使用 vue.js  内置组件占位符 渲染组件 -->
    <!-- is 属性值 表示要渲染的子组件的名字 -->
    <component :is="right_component"></component>
  </div>
</template>

<script>
  // 导入子组件
  import Left from '@/components/Left.vue'
  import Right from '@/components/Left.vue'
  export default {
    naem:'App',
    data(){
      return {
        left_component:'Left',
        right_component:'Right'
      }
    },
    methods: {
    },
    // 挂载跟组件
    components:{
      'Left':Left,
      Right
    }
  }
</script>

<style lang="less" scoped>
    .app-components{
      padding:1px 20px 20px;
      background-color: blue;
      .box{
        display: flex;
      }
    }
</style>