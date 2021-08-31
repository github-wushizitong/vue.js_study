<template>
    <div class="left-components">
        <h1>我是Left子组件</h1>
        <p>user的值:{{user}}</p>
        <p>msg的值:{{msg}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        props:['msg','user']
    }
</script>

<style lang="less" scoped>
    .left-components{
        padding:0 20px 20px;
        background-color: orange;
        min-height: 250px;
        flex:1
    }
</style>