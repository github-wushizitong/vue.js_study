<template>
  <div class="app-components">
    <h1>App 跟组件</h1>
    <button @click="comName = 'Left'">展示Left</button>
    <button @click="comName = 'Right'">展示Right</button>
    <button @click="req">发送请求</button>
    <hr />
    <!-- keep-alive   vue.js内置标签,保持Left组件隐藏或者切换的时候不被销毁,保存状态(组件被缓存到内存中了) -->
    <!-- keep-alive 对应的生命周期函数:
            当组件'被缓存'时,会自动触发组件的'deactivated'生命周期函数
            当组件'被激活'时,会自动触发组件的'activated'生命周期函数
     -->
    <!-- 
       Props：
          include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
          exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
          max - 数字。最多可以缓存多少组件实例。
      -->
    <keep-alive include="Left,Right">
      <!-- 使用 vue.js  内置组件占位符 渲染组件 -->
      <!-- is 属性值 表示要渲染的子组件的名字 -->
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
// 导入子组件
import Left from "@/components/Left.vue"
import Right from "@/components/Right.vue"
export default {
  naem: "App",
  data() {
    return {
      // 要展示组件的名字
      comName: "Left"
    }
  },
  methods: {
    async req() {
      const { data: res } = await this.$http.post("/api/post", {
        name: "zs",
        age: 20
      })
      console.log(res)
    }
  },
  // 挂载跟组件
  components: {
    Left: Left,
    Right: Right
  }
}
</script>

<style lang="less" scoped>
.app-components {
  padding: 1px 20px 20px;
  background-color: blue;
  .box {
    display: flex;
  }
}
</style>
