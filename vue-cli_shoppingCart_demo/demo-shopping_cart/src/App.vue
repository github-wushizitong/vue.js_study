<template>
  <div class="app-container">
      <Header title="标题"></Header>
      <Goods
        v-for="item in list"
        :key="item.id"
        :title="item.goods_name"
        :pic="item.goods_img"
        ></Goods>
    <h1>App 根组件</h1>
  </div>
</template>

<script>
  // 导入 axios 请求框架
  import axios from 'axios'
  // 导入 Header.vue 子组件
  import Header from '@/components/Header/Header.vue'
  import Goods from '@/components/Goods/Goods.vue'

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
      }
    },
    // 挂载子组件的components节点
    components:{
      'Header':Header,
      Goods
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