<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add(-1)">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{count}}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add(1)">+</button>
  </div>
</template>

<script>
// 导入 EventBus.js文件用来兄弟组件的共享数据
import bus from '@/components/EventBus.js'
export default {
  data(){
    return {
      // 这个数据可以改变
      count:this.counter
    }
  },
  // 接收父组件 Goods.vue 的自定义属性参数
  props:{
    // 接收商品的id值,将来使用EventBus.js方案发送给App.vue组件
    id:{
      type:Number,
      required:true
    },
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
      // console.log(number);
      // console.log(this);
      const obj = {id:this.id,value:this.count += number};
      // 使用自定义事件向 App.vue 兄弟组件发送数据
      bus.$emit('share',obj);
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
