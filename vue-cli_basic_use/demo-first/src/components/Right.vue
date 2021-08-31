<template>
    <div class="right-components">
        <p>{{count}}</p>
        <button @click="add">+1</button>
        <p>Left.vue共享的数据是:{{intData}}</p>
    </div>
</template>

<script>
    // 引入 eventBus.js 文件,用来接收 Left.vue 文件的共享数据
    import bus from '@/components/eventBus.js'
    export default {
        data(){
            return {
                count:0,
                intData:''
            }
        },
        methods: {
            add(){
                this.count += 1;
                // 通过自定义事件向父组件传递参数
                this.$emit('numChange',this.count);
            }
        },
        created(){
            bus.$on('share',(value)=>{
                this.intData = value;
            })
        }
    }
</script>

<style lang="less" scoped>
    .right-components{
        padding:0 20px 20px;
        background-color:slateblue;
        flex:1;
    }
</style>