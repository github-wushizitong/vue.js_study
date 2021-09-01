<template>
    <div class="left-components">
        <p>count的值是:{{count}}</p>
        <button @click="addCount">+1</button>
        <button @click="count_0">重置count的值为0</button>
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
            // +1 按钮的回调
            addCount(){
                this.count += 1;
            },
            // 重置 count 的值为0的回调
            count_0(){
                this.count = 0;
            }
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