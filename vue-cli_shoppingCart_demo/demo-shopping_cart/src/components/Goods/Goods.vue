<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框   为了避免组件列表复用的冲突,建议更改 id属性为动态属性-->
        <input type="checkbox" class="custom-control-input" :id="'cb' + id" :checked="state" @change="stateChange"/>
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{title}}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{price}}</span>
        <!-- 商品的数量 -->
        <Counter 
        :counter="count"
        :id="id"
        ></Counter>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入子组件 Count.vue
  import Counter from '@/components/Counter/Counter.vue'
export default {
  // 接收父组件 传递过来的自定义属性的值(参数)
  props:{
    // 商品id
    id:{
      type:Number,
      required:true
    },
    // 商品标题
    title:{
      type:String,
      default:''
    },
    // 商品图片
    pic:{
      type:String,
      default:''
    },
    // 商品价格
    price:{
      type:Number,
      default:0
    },
    // 商品选中状态
    state:{
      type:Boolean,
      default:false
    },
    // 向子组件Counter.vue 传递的商品数量
    count:{
      type:Number,
      default:0
    }
  },
  // 挂载子组件
  components:{
    Counter
  },
  methods:{
    stateChange(e){
      // 打印事件对象
      // console.log(e);
      // 打印事件对象的 checked属性的值
      // console.log(e.target.checked);
      // 打印 当前组件的 实例对象
      // console.log(this);
      // 打印 当前 组件实例对象 下的 id属性
      // console.log(this.id);
      

      // 通过自定义事件 向父组件传递参数
      this.$emit('state_change',{id:this.id,GoodsCheckboxChecked:e.target.checked})
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
