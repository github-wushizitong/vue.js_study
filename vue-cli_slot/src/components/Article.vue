<template>
    <div class="article-container">
        <!-- 文章标题 -->
        <div class="header-box">
            <!-- 带name属性 的插槽 都称为具名插槽 -->
            <slot name="title"></slot>
        </div>
        <!-- 文章内容 -->
        <div class="content-box">
            <!-- 带name属性 的插槽 都称为具名插槽 -->
            <slot name="content"></slot>
        </div>
        <!-- 文章作者 -->
        <div class="footer-box">
            <!-- 带name属性 的插槽 都称为具名插槽 -->
            <!-- 在封装组件时,为预留的<slot></slot> 提供的属性对应的值,这种用法,叫做作用域插槽 -->
            <slot name="author" :msg="str"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Article',
        data(){
            return {
                str:'hello vue.js'
            }
        }
    }
</script>

<style lang="less" scoped>
    .article-container{
        >div{
            min-height: 150px;
        }
        .header-box{
            background-color: pink;
        }
        .content-box{
            background-color: lightblue;
        }
        .footer-box{
            background-color: lightsalmon;
        }
    }
</style>