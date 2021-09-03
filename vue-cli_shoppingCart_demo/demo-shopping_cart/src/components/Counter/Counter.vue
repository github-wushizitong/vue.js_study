<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add(-1)">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{number}}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add(1)">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      number:this.num
    }
  },
  props:{
    num:{
      type:Number,
      default:1
    }
  },
  methods:{
    add(value){
      // 通过自定义事件 向 App.vue 父组件 传递参数
      this.$emit('num-change',this.number += value)
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
