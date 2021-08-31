<template>
  <div class="app-components">
    <h1>我是APP.uve组件</h1>
    <hr>
    <div class="box">
      <!-- 使用子组件 -->
      <Left :msg="message" :user="userinfo"></Left>
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
        message:'我是父组件传递过去的message',
        userinfo:{
          name:'wsc',
          age:18
        }
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
    }
</style>