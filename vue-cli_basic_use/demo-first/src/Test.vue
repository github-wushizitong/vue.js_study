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
    name:'Test',
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
            // console.log(this);
            // console.dir(this.$el);
            this.username = '改变后的data数据源中的username';
        }
    },
    // 创建阶段的第一个生命周期函数
    beforeCreate(){
        // 此时还访问不到 export default 暴露出的js代码
        // console.log(this.username);
    },
    // created 生命周期函数,非常常用,经常调用 methods 中的方法来发生 ajax 请求,渲染 template 模板
    created(){
        // 发送 ajax 请求 来获取数据
    },
    beforeMount(){
        // 此时页面还没有被渲染,还在内存中
        // console.log(this.$el);
    },
    // 如果要操作当前组件的DOM ,最早只能在 mounted 钩子阶段执行
    mounted(){
        // 此时页面已经被渲染了
        // console.log(this.$el);
        // console.log(this.$el.children);
    },
    // 当组件内 所有的初始化数据 发生改变的时候会触发 该回调钩子,此时页面还没有重新渲染,结构页面的数据还没有被改变                                          
    beforeUpdate(){
        1
    },
    // 当组件内 所有的初始化数据 发生改变以后会触发该回调狗子,此时页面已经被重新渲染,结构页面的数据也被同步了
    // 数据发送变化之后,为了能操作到最新的 DOM 结构,必须把代码写到 updated 生命周期函数中
    updated(){

    },
    // 将要销毁此组件,此时尚未销毁,组件还处于正常工作状态的时候发生的回调
    beforeDestroy(){

    },
    // 组件已经被销毁,此组件在浏览器中对应的DOM结构已经被完全移除的回调
    destroyed(){

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