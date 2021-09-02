<template>
    <div class="header-container">
        {{title}}
    </div>
</template>

<script>
    export default {
        // 接收父组件向子组件传递的参数,props 对象中的数据 是只读
        props:{
            title:{
                default:'',
                type:String
            }
        }
    }
</script>

<style lang="less" scoped>
    .header-container{
        font-size: 12px;
        height: 45px;
        width: 100%;
        background-color: #1d7bff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: fixed;
        top: 0;
        z-index: 999;
    }
</style>