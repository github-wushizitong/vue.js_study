<template>
    <div class="right-components">
        <p>{{count}}</p>
        <button @click="add">+1</button>
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
            add(){
                this.count += 1;
                // 通过自定义事件向父组件传递参数
                this.$emit('numChange',this.count);
            }
        },
    }
</script>

<style lang="less" scoped>
    .right-components{
        padding:0 20px 20px;
        background-color:slateblue;
        flex:1;
    }
</style>