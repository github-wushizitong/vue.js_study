<template>
  <div>
    <!-- 点击按钮 $router.back() 方法 是返回到上一个页面 -->
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">
      后退
    </button>
    <h4 class="text-center">用户详情{{ id }}</h4>
  </div>
</template>

<script>
export default {
  name: "MyUserDetail",
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped></style>
