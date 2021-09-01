<template>
  <div class="app-components">
    <!-- ref属性 往 this vue组件实例对象 下的属性 $refs 对象下添加 DOM 元素对象 -->
    <h1 ref="myH1">我是APP.uve组件</h1>
    <h2>count值为:{{count}}</h2>
    <button @click="showThis">打印this</button>
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
      },
      // 打印this 按钮的回调
      showThis(){
        // 打印 组件实例对象
        // console.log(this);
        // 打印组件 下的 $refs DOM 对象数组
        // console.log(this.$refs);
        // 打印 通过 ref 属性引用操作的 DOM 元素
        // console.log(this.$refs.myH1);
        // console.log(this.$refs.myH1.style);
        this.$refs.myH1.style.color = "red";
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