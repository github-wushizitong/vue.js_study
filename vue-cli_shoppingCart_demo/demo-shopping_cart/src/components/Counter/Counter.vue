<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add(-1)">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{counterHot}}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add(1)">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 商品数量更改数据
      counterHot:this.counter
    }
  },
  // 接收父组件 Goods.vue 的自定义属性参数
  props:{
    // 商品数量
    counter:{
      type:Number,
      default:0
    }
  },
  methods:{
    // 点击 +- 按钮使商品数量 改变
    add(number){
      // console.log(this.counterHot);
      console.log(number);
      this.counterHot += number;
      console.log(this);
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
