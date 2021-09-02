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
        background-color: rgb(0, 102, 255);
        text-align: center;
        line-height: 45px;
        font-size:28px;
        font-weight: 400;
        color:#fff;
    }
</style>