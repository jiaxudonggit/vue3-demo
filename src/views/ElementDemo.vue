<template>
  <!--el-button 无需从 Element Plus 中导入-->
  <el-button type="primary">{{ text }}</el-button>
  <br>
  <div style="display: block;margin-top: 50px;">
    <router-link to="/" style="margin-top: 50px">首页</router-link>
  </div>
</template>
<script setup>
  const text = ref('我是一个 Element Plus 按钮')  // ref 无需从vue中导入
</script>
