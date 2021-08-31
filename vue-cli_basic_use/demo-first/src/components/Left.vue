<template>
    <div class="left-components">
        <h1>我是Left子组件</h1>
        <p>user的值:{{user}}</p>
        <p>msg的值:{{msg}}</p>
        <button @click="send">向子组件共享数据</button>
        <p>向Right.vue共享的数据是:{{outData}}</p>
    </div>
</template>

<script>
    // 导入 eventBus.js 文件 用来向兄弟组件 Right.vue 共享数据
    import bus from '@/components/eventBus.js'
    export default {
        data(){
            return {
                outData:'该数据 Left.vue 为发送数据者,通过 eventBus.js 文件向 Right.vue 是接收数据者'
            }
        },
        props:['msg','user'],
        methods: {
            send(){
                // 通过自定义事件向 兄弟组件 Right.vue 共享数据
                bus.$emit('share',this.outData);
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