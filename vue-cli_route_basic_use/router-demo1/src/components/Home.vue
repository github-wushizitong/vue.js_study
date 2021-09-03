<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr />
    <button @click="goto_dianying1">跳转到 电影1页面</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goto_dianying1() {
      // 编程时导航API
      // console.log(this)
      // 跳转到指定的hash地址,并增加一条历史记录
      // this.$router.push("/movie/1")
      // 跳转到指定的 hash 地址,并替换掉当前的历史记录
      // this.$replace("/movie/1")
      // 页面的前进和后退方法,正数代表前进,负数代表后退,如果后退从层数超过上限,则原地不动
      // this.$router.go(-1)
      // 在历史记录中,后退到上个页面
      // this.$router.back()
      // 历史记录中,前进到下一个页面
      this.forward()
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
