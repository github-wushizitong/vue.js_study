<template>
  <div class="app-container">
    <div class="child-components">
      <Header title="标题"></Header>
    </div>
    <h1>App 根组件</h1>
  </div>
</template>

<script>
  // 导入 Header.vue 子组件
  import Header from '@/components/Header/Header.vue'
  export default {
    data(){
      return {
        
      }
    },
    components:{
      'Header':Header
    }
  }
</script>

<style lang="less" scoped>
  .app-container{
    padding-top:45px;
    padding-bottom: 50px;
  }
</style>