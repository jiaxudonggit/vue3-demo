<template>
  <el-button type="primary" class="button" @click="toPage('/counter')">组合式API</el-button>
  <el-button type="primary" class="button" @click="toPage('/counter-setup')">组合式API script setup 语法糖</el-button>
  <el-button type="primary" class="button" @click="toPage('/counter-option')">选项式API</el-button>
  <el-button type="primary" class="button" @click="toPage('/counter-option-mixin')">选项式API mixins</el-button>
  <el-button type="primary" class="button" @click="toPage('/counter-option-slot')">选项式API slot</el-button>
  <el-button type="primary" class="button" @click="toPage('/element-demo')">Element Plus Demo</el-button>
  <el-button type="primary" class="button" @click="toPage('/auto-import-demo')">自动按需导入 Demo</el-button>
</template>
<script setup>
const router = useRouter()

const toPage = (path) => {
  router.push(path)
}
</script>
<style scoped>
.button {
  display: block;
  margin: 0 auto 20px;
}
</style>
