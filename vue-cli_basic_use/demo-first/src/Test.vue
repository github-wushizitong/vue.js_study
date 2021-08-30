<template>
    <div class="test-box">
        <h1>这事用户自定义的 Test.vue-----{{username}}</h1>
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
    }
}
</script>
<style lang="less">
    .test-box{
        background-color: pink;
        width: 500px;
        height: 500px;
    }
</style>