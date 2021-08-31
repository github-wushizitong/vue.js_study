<template>
    <div class="left">
        <h2>这是 Left.vue 子组件</h2>
        <!-- 父组件使用自定义属性 向子组件传值 ,注意:使用 v-bind 属性绑定才能传过去的值是 数字类型的数据 -->
        <Count :init='100'></Count>

    </div>
</template>
<script>
export default {
    name:'Left'
}
</script>
<style lang="less">
    .left{
        background-color: #fff;
    }
    h2{
        color:red;
    }
</style>