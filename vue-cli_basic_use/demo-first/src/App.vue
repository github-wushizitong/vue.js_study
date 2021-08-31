<template>
  <div class="app-components">
    <h1>我是APP.uve组件</h1>
    <h2>count值为:{{count}}</h2>
    <hr>
    <div class="box">
      <!-- 使用子组件 -->
      <Left :msg="message" :user="userinfo"></Left>
      <Right @numChange="getRightComponentNumber"></Right>
    </div>
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
        count:0,
        message:'我是父组件传递过去的message',
        userinfo:{
          name:'wsc',
          age:18
        }
      }
    },
    methods: {
      getRightComponentNumber(value){
        // console.log(value);
        this.count = value;
      }
    },
    // 挂载跟组件
    components:{
      Left,
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