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
            <slot name="author"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Article'
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