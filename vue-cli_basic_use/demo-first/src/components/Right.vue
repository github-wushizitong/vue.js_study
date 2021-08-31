<template>
    <div class="right">
        <h4>这是 Right.vue 子组件</h4>
        <Count :init="999"></Count>
    </div>
</template>
<script>
export default {
    name:'Right'
}
</script>

<style lang="less" scoped>
    .right{
        background-color: #ccc;
        h4{
            color:blue;
        }
    }
</style>