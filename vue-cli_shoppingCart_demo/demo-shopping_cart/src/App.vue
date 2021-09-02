<template>
  <div class="app-container">
      <!-- 使用子组件 -->
      <Header title="标题"></Header>
      <Goods
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :title="item.goods_name"
        :pic="item.goods_img"
        :price="item.goods_price"
        :state="item.goods_state"
        @state_change="getNewState"
        ></Goods>
        <Footer 
          :isFull="fullState"
          :amout="amt"
          @footer_full_state="getFooterFullState"
          ></Footer>
    <h1>App 根组件</h1>
  </div>
</template>

<script>
  // 导入 axios 请求框架
  import axios from 'axios'
  // 导入 Header.vue 子组件
  import Header from '@/components/Header/Header.vue'
  import Goods from '@/components/Goods/Goods.vue'
  import Footer from '@/components/Footer/Footer.vue'

  export default {
    data(){
      return {
        // 购物车列表数据
        list:[] 
      }
    },
    // 组件中使用的方法
    methods:{
      async initCartList(){
        // 调用 axios 的get 方法,请求列表数据,解构出来的 data对象重新命名为 res
        const {data:res} = await axios.get('https://www.escook.cn/api/cart')
        // console.log(res);
        if(res && res.status === 200){
          this.list = res.list;
        }
      },
      // 接收子组件Goods.vue通过自定义事件传递过来的参数
      getNewState(value){
        // console.log(value);
        this.list.some(item=>{
          if(item.id === value.id){
            item.goods_state = value.GoodsCheckboxChecked;
            // 终止后续的循环
            return;
          }
        })
      },
      // 接收子组件Footer.vue通过自定义事件传递过来的参数
      getFooterFullState(e){
        // console.log(e);
        // 把全选状态的布尔值 赋值给所有的商品选中状态的值
        this.list.forEach((item)=>{
          item.goods_state = e.fullState;
        })
      }
    },
    // 挂载子组件的components节点
    components:{
      'Header':Header,
      Goods,
      Footer
    },
    // 计算属性 定义的时候是方法,使用的时候是组件实例对象的属性
    computed:{
      // 动态计算出全选的状态 是true 还是 false
      fullState(){
        // every  判断的条件都为真 返回真,有一个item为假返回假
        return this.list.every(item=>item.goods_state);
      },
      // 计算选中商品的总价格
      amt(){
        // 先 filter 过滤,再 reduce 累加
        return this.list.filter(item=>item.goods_state).reduce((total,item)=> total += item.goods_price * item.goods_count ,0);
      }
    },
    // 生命周期函数 
    created(){
      this.initCartList();
    }

  }
</script>

<style lang="less" scoped>
  .app-container{
    padding-top:45px;
    padding-bottom: 50px;
  }
</style>