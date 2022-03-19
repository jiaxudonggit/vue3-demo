<template>
  <h2>组合式API script setup 语法糖</h2>
  <el-button type="primary" @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </el-button>
  <div style="display: block;margin-top: 50px;">
    <router-link to="/" style="margin-top: 50px">首页</router-link>
  </div>
</template>

<script setup>
import { useCounter } from '@/libs/useCounter'
const { state, increment } = useCounter()
</script>
