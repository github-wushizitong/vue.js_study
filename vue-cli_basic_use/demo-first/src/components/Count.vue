<template>
    <div class="countBox">
        <p>{{init}}</p>
        <!-- 如果回调函数只有一行代码,可以简写到行内 -->
        <button @click="count += 1">+1</button>
    </div>
</template>

<script>
    export default {
        name:'Count',
        // 父组件通过行内自定义属性传递过来的值都是用 子组件中 props 数组中对应的参数名称接收
        // props 数组中的数据 是只读的
        //  不能修改 数组中的数据,否则 会报错
        props:['init'],
        data() {
            return {
                count:this.init
            }
        }
        
    }
</script>

<style lang="less" scoped>
    .countBox{
        background-color:slateblue;
    }
</style>