<template>
  <div class="app-components">
    <h1>App 跟组件</h1>
    <button @click="comName = 'Left' ">展示Left</button>
    <button @click="comName = 'Right' ">展示Right</button>
    <hr>
    <!-- 使用 vue.js  内置组件占位符 渲染组件 -->
    <!-- is 属性值 表示要渲染的子组件的名字 -->
    <component :is="comName"></component>

  </div>
</template>

<script>
  // 导入子组件
  import Left from '@/components/Left.vue'
  import Right from '@/components/Right.vue'
  export default {
    naem:'App',
    data(){
      return {
        // 要展示组件的名字
        comName:'Left'
      }
    },
    methods: {
    },
    // 挂载跟组件
    components:{
      'Left':Left,
      'Right':Right
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