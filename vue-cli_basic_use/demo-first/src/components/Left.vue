<template>
    <div class="left-components">
        <h3>Left 组件------{{count}}</h3>
        <button @click="count += 1">+1</button>
    </div>
</template>

<script>
    export default {
        // 组件的注册名称:以标签的形式,把注册号的组件,渲染和使用到页面结构中
        // 组件声明时候的name节点:结合<keep-alive></keep-alive>标签实现组件缓存功能,以及在调试工具中看到组件的name名称
        name:'Left',
        data(){
            return {
                count:0
            }
        },
        methods: {
        },
        created(){
            console.log('Left 组件被创建了');
        },
        destroyed(){
            console.log('Left 组件被销毁了~~~~');
        },
        // keep-alive 对应的生命周期函数:
        //         当组件'被缓存'时,会自动触发组件的'deactivated'生命周期函数
        //         当组件'被激活'时,会自动触发组件的'activated'生命周期函数
        
        deactivated(){
            console.log('子组件被缓存');
        },
        activated(){
            console.log('子组件被激活');
        }
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