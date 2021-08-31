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
        // props:['init'],
        // 如果 父组件 不通过自定义属性方式给子组件的 props 数组传值,那就以对象的形式 定义 props 
        props:{
            init:{
                // 定义 该数据的默认值
                default:0,
                // 定义 接收的数据必须为 Number 类型
                type:Number,
                // 定义 父组件必须向子组件传递该属性
                required:true
            }
        },
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
    // 当使用第三方组件库的时候,如果又修改第三方组件默认样式的需求,需要用到 /deep/
    /deep/ p{
        font-weight: 900;
    }
</style>