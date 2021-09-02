<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="isFull" @change="getFullState"/>
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ 0 }}</span>
    </div>

    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">结算（{{ amout }}）</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  // 父组件传递过来的参数
  props:{
    // 全选状态
    isFull:{
      type:Boolean,
      required:true
    },
    // 商品总价
    amout:{
      type:Number,
      default:0
    }
  },
  methods:{
    // 获取input复选框的选中状态
    getFullState(e){
      // console.log(e.target.checked);
      // 通过自定义事件向父组件传递参数
      this.$emit('footer_full_state',{fullState:e.target.checked});
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>
