<template>
    <div class="left-components">
        <h3>Left 组件------{{count}}</h3>
        <button @click="count += 1">+1</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                count:0
            }
        },
        methods: {
        },
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