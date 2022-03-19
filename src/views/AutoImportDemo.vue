<template>
  <div @click="log">{{ msg }}</div>
  <div>{{ capitalize('hello') }}</div>
</template>
<script setup>
// 引入
import { capitalize } from '@/libs/helpers'
// 变量
const msg = 'Hello!'
// 函数
function log() {
  console.log(msg)
}
</script>
