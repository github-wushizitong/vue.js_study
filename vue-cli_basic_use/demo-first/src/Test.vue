<template>
    <!-- 在template只能有一个根元素,出现多个会报错 -->
    <div class="test-box">
        <h1>这事用户自定义的 Test.vue-----{{username}}</h1>
        <button @click="changeName">按钮</button>
    </div>
</template>
<script>
// 默认导出,这事组件的固定写法
export default {
    // data 数据源
    // 注意: vue 组件中的 data 不能指向对象
    // 注意: 组件中的 data 必须是一个函数
    data(){
        return{
            username:'admin'
        }
    },
    methods:{
        changeName(){
            // this指向的是vue组件的实例对象
            console.log(this);
            console.dir(this.$el);
            this.username = '改变后的data数据源中的username';
        }
    }
}
</script>
<style lang="less">
    .test-box{
        background-color: pink;
        width: 500px;
        height: 500px;
        h1{
            color: red;
        }
    }
</style>