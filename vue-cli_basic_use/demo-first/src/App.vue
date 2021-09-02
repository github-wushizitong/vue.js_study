<template>
  <div class="app-components">
    <input type="text" v-if="isputVisible" @blur="showButton" ref="inputRef">
    <button v-else @click="showInput">展示输入框</button>
  </div>
</template>

<script>
  export default {
    naem:'App',
    data(){
      return {
        isputVisible:true
      }
    },
    methods: {
      showButton(){
        this.isputVisible = false;
      },
      showInput(){
        this.isputVisible = true;
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
        this.$nextTick(()=>{
          // focus() 方法 文本框自动获取焦点,如果放到 updated 生命周期函数里,只要数据变化就会触发,所以这句代码放到里面会再次获取焦点,报错
          this.$refs.inputRef.focus();
        })

      }
    },
    // 挂载跟组件
    components:{
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