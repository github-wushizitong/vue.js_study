<template>
  <div class="app-components">
    <button @click="count_0">App.vue组件重置子组件count的值为0</button>
    <div class="box">
      <Left ref="left_vue"></Left>
    </div>
  </div>
</template>

<script>
  // 导入子组件
  import Left from '@/components/Left.vue'
  export default {
    naem:'App',
    data(){
      return {
      }
    },
    methods: {
      // 重置子组件 count的值的回调
      count_0(){
        // 打印 子组件 Left.vue 的实例对象
        // console.log(this.$refs.left_vue);
        // this.$refs.left_vue.count = 0;
        // 调用方法 重置 count的值
        this.$refs.left_vue.count_0();
      }
    },
    // 挂载跟组件
    components:{
      Left
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